const express = require('express');
const router = express.Router();

const User = require('../models/user');
const { isInVailReq } = require('../public/util');

router.get('/', (req, res) => {
    res.render('index', { title: 'Users' });
});

router.get('/login', (req, res) => {
    const {id, pw} = req.query;
    if(isInVailReq([id, pw], res))
        return;

    User.findOne({ id }).exec((err, user) => {
        const result = {success: false};
        if(err) 
            console.log(err), result['err'] = "😢 server err"
        else if(!user)
            result['err'] = "😢 Check Your ID"
        else if(user.pw !== pw )
            result['err'] = "😢 Check Your Password";
        else {
            result.success = true;
            result['name'] = user.name;
        }
        res.json(result);
    })
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