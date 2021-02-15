const express = require('express');
const router = express.Router();
const Board = require('../models/board');
const User = require('../models/user');
const { checkInVailReq, checkErr, isLogined, isOwner } = require('../public/util');

router.use('/', isLogined);

/* ------ get ------- */

router.get('/', async(req, res) => {
    const {user} = req.session;
    
    const foundUser = await User.findOne({id: user.id}).populate('boards');
    if(!foundUser)
        checkErr('Can not find user');
    const {boards, invites} = foundUser;
    res.json({success: true, boards, invites});
});

router.get('/board', async(req, res) => {
    const {boardId} = req.query;
    const board = await Board.findById(boardId).exec();
    if(!board)
        checkErr('Can not find Board');
    res.json({board});
})

router.get('/search', async(req, res) => {
    const {text} = req.query;
    const boards = await Board.find({
        name: {$regex: text},
        state: 'public'
    }).exec();
    res.json({boards});
})
/* ------ post ------- */

router.post('/', (req, res) => {
    const {user: {id}} = req.session;
    const {name, state, description} = req.body;
    checkInVailReq([name, state, description]);

    const board = new Board({ name, state, description });
    board.members = [{id, auth: 'owner'}];
    board.lists = [{name: 'To do'}, {name: 'Doing'}, {name: 'Done'}];
    board.lastUpdate = new Date();
    board.save((err) => {
        checkErr(err);
        User.findOneAndUpdate(
            {id},
            {$push: {boards: board._id}}
        ).exec();

        res.json({success: true});
    })
})

/* ------ put ------- */

router.put('/', async(req, res) => {
    const {board: {_id, name, state, description}} = req.body;
    checkInVailReq([_id, name, state, description]);
    const pass = await isOwner(_id, req, res)
    if(!pass)
        return;
        
    await Board.findByIdAndUpdate(_id, {
            $set: {name, state, description, lastUpdate: new Date()}
        }).exec();
        
    res.json({success: true});
})
router.put('/list', async(req, res) => {
    
})

/* ------ delete ------- */
router.delete('/', async(req, res) => {
    const {boardId} = req.body;
    checkInVailReq([boardId]);
    const pass = await isOwner(boardId, req, res)
    if(!pass)
        return;

    const board = await Board.findById(boardId).exec();
    if(!board)
        checkErr('No match board');

    board.delete();
    res.json({success: true});
})

module.exports = router;