const express = require('express');
const router = express.Router();
const {Fname, loadData, saveData, isInVailReq} = require('../public/util')

router.get('/', (req, res) => {
  console.log(req.sessionID)
  const {logined, userId} = req.session;
  res.json({success: logined, userId});
});

router.get('/login', (req, res) => {
  const {id, pw} = req.query;
  const result = { success: false };
  if(isInVailReq([id, pw], res))
    return;
    
  loadData(Fname.users, (json) => {
    const users = json;

    if(!users[id])
      result.err = "😢 Check Your ID";
    else if(users[id].pw !== pw)
      result.err = "😢 Check Your PW";
    else {
      result.success = true;
      result.userId = id;
      // login in express session
      const sess = req.session
      sess.logined = true
      sess.userId = id;
    }
    res.json(result);
  });
})

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.json({});
})

/* sign up new user */
router.post('/signup', (req, res) => {
  const {id, pw, name} = req.body;
  const result = { success: false };
  if(isInVailReq([id, pw, name], res))
    return;
    
  // ADD USER  
  loadData(Fname.users, (json) => {
    const users = json;
    if(users[id]){
      resul.err = '😢 Duplicate ID'
      res.json(result);
      return;
    }
    users[id] = {pw, name};
    createEmptyPlanDB(id);

    saveData(Fname.users, users, () => {
      result.success = true;
      res.json(result);
    })
  });
})
const createEmptyPlanDB = (id) => {
  loadData(Fname.plans, (json) => {
    const plans = json;
    plans[id] = {
      todo: [], doing: [], done: []
    };
    saveData(Fname.plans, plans, () => {})
  })
}

// 서버 렌더용
router.get('/list', (req, res, next) => {
  loadData(Fname.users, (json) => {
    res.send(json);
  });
});

module.exports = router;
