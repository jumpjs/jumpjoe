const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/tapcircle', (req, res) => {
  res.render('tapcircle');
});

module.exports = router;
