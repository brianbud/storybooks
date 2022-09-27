const express = require('express');
const router = express.Routher();

//@desc Login/Landing Pate
//@route GET /
router.get('/', (req, res) => {
  res.send('Login');
});

module.exports = router;
