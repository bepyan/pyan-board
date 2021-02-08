const isInVailReq = (arr, res) => {
    const result = arr.some(item => item === undefined);
    if(result)
        res.json({success: false, err: '😢 Invalid Request'});
    return result;
}

module.exports = {isInVailReq}