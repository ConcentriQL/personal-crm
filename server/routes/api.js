const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController.js');

console.log(apiController.solve);

router.get('/test', apiController.solve, (err, res) => {
  res.status(200).json('some response');
})

module.exports = router;