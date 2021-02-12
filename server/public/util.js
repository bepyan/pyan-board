const isInVailReq = (arr, res) => {
    const result = arr.some(item => item === undefined);
    if(result)
        res.json({success: false, err: '😢 Invalid Request'});
    return result;
}

const isLogined = (req, res, next) => {
    const {logined} = req.session;
    if(!logined){
        res.json({success: false, err: '😎 Please Login'});
        throw new Error('Not logined or Session error')
    }
    next();
}

const isErr = (err) => {
    if(err)
        throw new Error(`😔 Server Error \n ${err}`);
}

module.exports = {isInVailReq, isLogined, isErr}