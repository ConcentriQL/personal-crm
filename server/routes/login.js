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
    if (res.locals.user !== false) {
      const { email, id, firstName, lastName} = res.locals.user
      res.status(200).json({email: email, userId: id, firstName: firstName, lastName: lastName})
    }
    else {
      res.status(200).json(res.locals.userId)
    }
    
})


module.exports = router;