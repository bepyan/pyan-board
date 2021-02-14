const Board = require('../models/board');

const checkInVailReq = (arr) => {
    const result = arr.some(item => item === undefined);
    if(result)
        throw new Error('😢 Invalid Request');
}

const checkErr = (err) => {
    if(err)
        throw new Error(`😔 Server Error \n ${err}`);
}

const isLogined = (req, res, next) => {
    const {logined} = req.session;
    if(!logined){
        res.json({success: false, err: '😎 Please Login'});
        throw new Error('Not logined or Session error')
    }
    next();
}

const isEditer = (board, req, res) => {
    const {user: {id: userId}} = req.session;
    const {auth} = board.members.find(item => item.id === userId);
    if(auth !== 'edit' && auth !== 'owner'){
        res.json({success: false, err: '😇 You have no authority'});
        return false;
    }
    return true;
}
const isOwner = async(boardId, req, res) => {
    const {user: {id: userId}} = req.session;
    const board = await Board.findById(boardId).exec();
    const {auth} = board.members.find(item => item.id === userId);
    if (auth !== 'owner'){
        res.json({success: false, err: '😇 You are not the owner'});
        return false;
    }
    return true;
}

module.exports = {checkInVailReq, checkErr, isLogined, isEditer, isOwner }