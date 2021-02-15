const express = require('express');
const router = express.Router();
const Board = require('../models/board');
const { checkInVailReq, isLogined, isEditer, checkErr } = require('../public/util');

router.use('/', isLogined);

/* ------ get ------- */
router.get('/', async(req, res) => {

})

/* ------ post ------- */
router.post('/', async(req, res) => {
    const {boardId, name} = req.body;  
    checkInVailReq([boardId]);

    // await Board.findByIdAndUpdate(boardId, {
    //     $set: {lastUpdate: new Date()},
    //     $push: {lists: {name}}
    // }).exec();

    const board = await Board.findById(boardId).exec();
    if(!isEditer(board, req, res))
        return;
    board.lastUpdate = new Date();
    const len = board.lists.push({name});
    const newList = board.lists[len-1];
    board.save(err => {
        checkErr(err);
        res.json({success: true, newList});
    })

});

/* ------ put ------- */
router.put('/', async(req, res) => {
    const {boardId, listId, name} = req.body;
    checkInVailReq([boardId, listId, name]);

    const board = await Board.findById(boardId).exec();
    if(!isEditer(board, req, res))
        return;

    const list = board.lists.find(item => String(item._id) === listId);
    list.name = name;
    board.save(err => {
        checkErr(err);
        res.json({success: true, newList: list});
    })
});

/* ------ delete ------- */
router.delete('/', async(req, res) => {
    const {boardId, listId} = req.body;
    checkInVailReq([boardId, listId]);

    const board = await Board.findById(boardId).exec();
    if(!isEditer(board, req, res))
        return;

    const idx = board.lists.findIndex(item => String(item._id) === listId);
    board.lists.splice(idx, 1);
    board.save(err => {
        checkErr(err);
        res.json({success: true})
    })

});

module.exports = router;