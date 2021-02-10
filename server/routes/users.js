const express = require('express');
const router = express.Router();

const User = require('../models/user');
const { isInVailReq } = require('../public/util');

router.get('/', (req, res) => {
    const {logined, user} = req.session;
    res.json({logined, user, sessionId : req.sessionID});
});

router.get('/login', (req, res) => {
    const {id, pw} = req.query;
    if(isInVailReq([id, pw], res))
        return;

    User.findOne({ id }).exec((err, item) => {
        const result = {success: false};
        if(err) 
            console.log(err), result['err'] = "😢 server err"
        else if(!item)
            result['err'] = "😢 Check Your ID"
        else if(item.pw !== pw )
            result['err'] = "😢 Check Your Password";
        else {
            const user = {id, name: item.name};
            result['success'] = true;
            result['user'] = user;
            // login in session
            const sess = req.session;
            sess.logined = true;
            sess.user = user;
        }
        res.json(result);
    })
})

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.json({});
})

router.post('/signup', (req, res) => {
    const {id, pw, name} = req.body;
    if(isInVailReq([id, pw, name], res))
        return;
        
    // ADD USER  
    const user = new User({id, pw, name})
        user.save((err) => {
            const result = {success: false};
            if(err) 
                console.log(err), result['err'] = `😢 ${err}`;
            else
                result.success = true;
            res.json(result)
        })

})

module.exports = router;