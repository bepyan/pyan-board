const express = require('express');
const router = express.Router();
const Board = require('../models/board');
const { checkInVailReq, isLogined, isEditer } = require('../public/util');

router.use('/', isLogined);

/* ------ get ------- */
router.get('/', async(req, res) => {

})

/* ------ post ------- */
router.post('/', async(req, res) => {
    const {boardId, name} = req.body;  
    checkInVailReq([boardId]);

    const board = await Board.findById(boardId).exec();
    if(!isEditer(board, req, res))
        return;

    await Board.findByIdAndUpdate(boardId, {
        $set: {lastUpdate: new Date()},
        $push: {lists: {name}}
    }).exec();

    res.json({success: true});
});

/* ------ put ------- */
router.put('/', async(req, res) => {
    
});

/* ------ delete ------- */
router.delete('/', async(req, res) => {
    
});

module.exports = router;