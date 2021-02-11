const express = require('express');
const router = express.Router();

const Board = require('../models/board');
const User = require('../models/user');
const { isInVailReq, isErr, isLogined } = require('../public/util');

router.use('/', isLogined);

router.get('/', async(req, res) => {
    const {user} = req.session;
    
    const foundUser = await User.findOne({id: user.id}).populate('boards');
    if(!foundUser)
        isErr('Can not fine user');
    const {boards, invites} = foundUser;
    res.json({success: true, boards, invites});
});

router.post('/add', (req, res) => {
    const {user: {id}} = req.session;
    const {name, state, description} = req.body;
    if(isInVailReq([name, state, description], res))
        return;

    const board = new Board({ name, state, description });
    board.members.push({id, auth: 'owner'})
    board.save((err) => {
        isErr(err);
            
        User.findOneAndUpdate(
            {id},
            {$push: {boards: board._id}}
        ).exec();

        res.json({success: true});
    })
})

router.put('/edit', async(req, res) => {
    const {board: {_id, name, state, description}} = req.body;
    console.log(req.body)
    
    await Board.findByIdAndUpdate(_id, {
            $set: {name, state, description, lastUpdate: new Date()}
        }).exec();
        
    res.json({success: true});
})

router.delete('/', async(req, res) => {
    const {user: {id : userId}} = req.session;
    const {boardId} = req.body;
    if(isInVailReq([boardId], res))
        return;

    const board = await Board.findById(boardId).populate('members').exec();
    if(!board)
        isErr('No match board');
    console.log(board.members, userId);
    const isOwner = board.members.some(item => item.id === userId && item.auth === 'owner');
    if(!isOwner)
        isErr('You are not onwer of board');

    board.delete();
    res.json({success: true});
})
module.exports = router;