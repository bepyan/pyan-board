const express = require('express');
const router = express.Router();
const Board = require('../models/board');
const { checkInVailReq, checkErr, isLogined, isEditer } = require('../public/util');

router.use('/', isLogined);

/* ------ post ------- */

router.post('/', async(req, res) => {
    const {boardId, listId, newNote} = req.body;  
    checkInVailReq([boardId, listId, newNote]);

    const board = await Board.findById(boardId).exec();
    if(!isEditer(board, req, res))
        return;
    const list = board.lists.find(item => String(item._id) === listId);
    if(!list)
        checkErr('No match list');
    
    list.notes.push(newNote);
    newNote._id = list.notes[list.notes.length-1]._id;
    board.lastUpdate = new Date();
    board.save((err) => {
        checkErr(err);
        res.json({success: true, newNote});
    })
})

/* ------ put ------- */

router.put('/', async(req, res) => {
    const {boardId, listId, newNote} = req.body;
    checkInVailReq([boardId, listId, newNote]);

    const board = await Board.findById(boardId).exec();
    if(!board)
        checkErr('No match board');
    if(!isEditer(board, req, res))
        return;
    
    const {notes} = board.lists.find(item => String(item._id) === listId);
    const idx = notes.findIndex(item => String(item._id) === newNote._id);
    notes[idx] = newNote;
    board.lastUpdate = new Date();
    board.save(err => {
        checkErr(err);
        res.json({success: true});
    })
})

/* ------ delete ------- */
router.delete('/', async(req, res) => {
    const {boardId, listId, noteId} = req.body;
    checkInVailReq([boardId, listId, noteId]);
    
    const board = await Board.findById(boardId).exec();
    if(!isEditer(board, req, res))
        return;
    
    const list = board.lists.find(item => String(item._id) === listId);
    const idx = list.notes.findIndex(item => String(item._id) === noteId);
    list.notes.splice(idx, 1);
    board.lastUpdate = new Date();
    board.save(err => {
        checkErr(err);
        res.json({success: true});
    });
})


module.exports = router;