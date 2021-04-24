const express = require('express');
const dbModel = require('../../models/dbModel.js');
const router = express.Router();
const apiController = require('../controllers/apiController.js');

console.log(apiController.solve);

<<<<<<< HEAD
// router.get('/test', apiController.solve, (err, res) => {
//   res.status(200).json('some response');
// })


=======
router.get('/test', apiController.solve, (err, res) => {
  res.status(200).json('some response');
})



module.exports = router;
>>>>>>> master
