const express = require('express');
const dbModel = require('../../models/dbModel.js');
const router = express.Router();
const loginController = require('../controllers/loginController.js');

router.post('/', (req, res, next) => {
  console.log("this is the route")
   next()
  },
   loginController.login, 
   (req, res) => {
  res.sendStatus(res.locals.status);
})


module.exports = router;