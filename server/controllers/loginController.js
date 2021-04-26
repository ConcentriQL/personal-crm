const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const db = require('../../models/dbModel')

const loginController = {};

loginController.login = (req, res, next) => {
  console.log(req)
  console.log(req.body)
  const { email, password } = req.body;
  const sqlparams = [email, password]
  const verifyUserQuery = `SELECT u.email, u.password
  FROM "user" u
  WHERE u.email= $1 AND u.password = $2`
  async function loginUser () {
    const doLogin = await db.query(verifyUserQuery, sqlparams);
    if (doLogin.rows[0] !== undefined) {res.locals.status = 200}
    else {res.locals.status = 401};
    return next();
  } loginUser()
  .catch(err => next(err));
}

module.exports = loginController;