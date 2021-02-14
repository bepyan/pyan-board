const express = require('express');
const router = express.Router();

const User = require('../models/user');
const { bcryptHash, bcryptCompare } = require('../public/encypt');
const { checkInVailReq, checkErr, isLogined } = require('../public/util');

router.get('/', (req, res) => {
    const {logined, user} = req.session;
    res.json({logined, user, sessionId : req.sessionID});
});

router.get('/login', (req, res) => {
    const {id, pw} = req.query;
    checkInVailReq([id, pw]);

    User.findOne({ id }).exec((err, item) => {
        checkErr(err);
        const result = {success: false};
        if(!item)
            result['err'] = "😢 Check Your ID"
        else if(!bcryptCompare(pw, item.pw))
            result['err'] = "😢 Check Your Password";
        else {
            const user = {id: item.id, name: item.name};
            result['success'] = true;
            result['user'] = user;
            // login in session
            const sess = req.session;
            sess.logined = true;
            sess.user = user;
        }
        res.json(result);
    })
});

router.get('/invaite', isLogined, async(req, res) => {
    const {user: {id}} = req.session;

    const user = await User.findOne({ id }).exec();
    res.json({invites: user.invites});
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.json({});
});

router.post('/signup', async(req, res) => {
    const {id, pw, name} = req.body;
    checkInVailReq([id, pw, name]);
        
    const duplicated = await User.findOne({id}).exec();
    if(duplicated){
        res.json({sucess: false, err: "🥲 Duplicated ID"})
        return;
    }

    const encyptPW = bcryptHash(pw);
    if(!encyptPW)
        checkErr('bcryptHash error');
    const user = new User({id, pw: encyptPW, name});
    user.save((err) => {
        checkErr(err);
        res.json({success: true});
    })

});

module.exports = router;