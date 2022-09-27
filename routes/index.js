const express = require('express');
const router = express.Routher();

//@desc Login/Landing Pate
//@route GET /
router.get('/', (req, res) => {
  res.send('Login'); //test
});

//@desc Dashboard
//@route GET /dashboard
router.get('/dashboard', (req, res) => {
  res.send('Dashboard'); //test
});

module.exports = router;
