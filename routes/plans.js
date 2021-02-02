const express = require('express');
const router = express.Router();
const {getCurrentDate, Fname, loadData, saveData, isInVailReq} = require('../public/util')

/* GET todo listing. */
router.get('/', (req, res) => {
    const { userId } = req.session;
    if(isInVailReq([userId], res))
      return;
  
    loadData(Fname.plans, (json) => {
      if(isInVailReq([json[userId]], res))
        return;
        
      const {todo, doing, done} = json[userId];
      res.json({todo, doing, done});
    })
});

router.post('/add', (req, res) => {
  const { userId } = req.session;
  const {text} = req.body;
  if(isInVailReq([userId, text], res))
    return;
  
  const newPlan = {text, date: getCurrentDate()};

  loadData(Fname.plans, (json) => {
    const {todo} = json[userId];
    if(isInVailReq([todo], res))
      return;

    todo.push(newPlan);

    saveData(Fname.plans, json, () => {
      res.json({newPlan})
    }); 
  })
})

router.put('/', (req, res) => {
  const { userId } = req.session;
  const {status, idx, newText} = req.body;
  if(isInVailReq([status, idx, newText], res))
    return;

  loadData(Fname.plans, (json) => {
    json[userId][status][idx].text = newText;
    saveData(Fname.plans, json, () => {
      res.json({})
    }); 
  })
})

router.put('/move', (req, res) => {
  const { userId } = req.session;
  const {from, fIdx, to, tIdx} = req.body;
  if(isInVailReq([userId, from, fIdx, to, tIdx], res))
    return;

  loadData(Fname.plans, (json) => {
    const data = json[userId];

    const [tmp] = data[from].splice(fIdx, 1);
    data[to].splice(tIdx, 0, tmp);

    saveData(Fname.plans, json, () => {
      res.json({})
    }); 
  })
})

router.delete('/', (req, res) => {
    const { userId } = req.session;
    const {status, idx} = req.body;

    if(isInVailReq([userId, status, idx], res))
      return;

    loadData(Fname.plans, (json) => {
      json[userId][status].splice(idx, 1);
      saveData(Fname.plans, json, () => {
        res.json({})
      })
    })
})

module.exports = router;
