const express = require('express');
const { findById } = require('../models/board');
const router = express.Router();

const Board = require('../models/board');
const User = require('../models/user');
const { isInVailReq, isErr, isLogined } = require('../public/util');

router.use('/', isLogined);

/* ------ get ------- */

router.get('/', async(req, res) => {
    const {user} = req.session;
    
    const foundUser = await User.findOne({id: user.id}).populate('boards');
    if(!foundUser)
        isErr('Can not find user');
    const {boards, invites} = foundUser;
    res.json({success: true, boards, invites});
});
router.get('/board', async(req, res) => {
    const {boardId} = req.query;
    const board = await Board.findById(boardId).exec();
    if(!board)
        isErr('Can not find Board');
    res.json({board});
})
router.get('/lists', async(req, res) => {
    const {id} = req.query;
    const lists = await Board.findById().exec();
    if(!board)
        isErr('Can not find Board');
    res.json({board});
})

/* ------ post ------- */

router.post('/', (req, res) => {
    const {user: {id}} = req.session;
    const {name, state, description} = req.body;
    if(isInVailReq([name, state, description], res))
        return;
    const board = new Board({ name, state, description });
    board.members = [{id, auth: 'owner'}];
    board.lists = [{name: 'To do'}, {name: 'Doing'}, {name: 'Done'}];
    
    board.save((err) => {
        isErr(err);
        User.findOneAndUpdate(
            {id},
            {$push: {boards: board._id}}
        ).exec();

        res.json({success: true});
    })
})

router.post('/list', async(req, res) => {
    const {boardId, name} = req.body;  
    if(isInVailReq([boardId], res))
        return;
    await Board.findByIdAndUpdate(boardId, {
        $push: {lists: {name}}
    }).exec();

    res.json({success: true});
})

router.post('/note', async(req, res) => {
    const {boardId, listIdx, newNote} = req.body;  
    if(isInVailReq([boardId, listIdx, newNote], res))
        return;
    const board = await Board.findById(boardId).exec();
    if(!board)
        isErr('No match board');
    board.lists[listIdx].notes.push(newNote);
    board.save((err) => {
        isErr(err);
        res.json({success: true});
    })
})

/* ------ put ------- */

router.put('/edit', async(req, res) => {
    const {board: {_id, name, state, description}} = req.body;
    
    await Board.findByIdAndUpdate(_id, {
            $set: {name, state, description, lastUpdate: new Date()}
        }).exec();
        
    res.json({success: true});
})

/* ------ delete ------- */

router.delete('/', async(req, res) => {
    const {user: {id : userId}} = req.session;
    const {boardId} = req.body;
    if(isInVailReq([boardId], res))
        return;

    const board = await Board.findById(boardId).populate('members').exec();
    if(!board)
        isErr('No match board');

    const isOwner = board.members.some(item => item.id === userId && item.auth === 'owner');
    if(!isOwner)
        isErr('You are not onwer of board');

    board.delete();
    res.json({success: true});
})
module.exports = router;