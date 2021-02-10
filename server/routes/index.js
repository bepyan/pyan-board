const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  console.log(req.sessionID)
  res.render('index', { title: 'Express', sessionID: req.sessionID });
});

module.exports = router;
