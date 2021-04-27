const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const db = require("../../models/dbModel");

const loginController = {};

loginController.login = (req, res, next) => {
  const { email, password } = req.body;
  const sqlparams = [email, password];
  //query string that returns email, password, id, first_name, last_name from user table where email and password matches
  const verifyUserQuery = `SELECT u.email, u.password, u.id, u.first_name, u.last_name
  FROM "user" u
  WHERE u.email= $1 AND u.password = $2`;
  async function loginUser() {
    const doLogin = await db.query(verifyUserQuery, sqlparams);
    if (doLogin.rows[0] !== undefined) {
      res.locals.userId = true;
      //assign properties to res.locals object
      res.locals.user = {
        email: doLogin.rows[0].email,
        id: doLogin.rows[0].id,
        firstName: doLogin.rows[0].first_name,
        lastName: doLogin.rows[0].last_name,
      };
    }
    //if db.query function call didn't return anything, return false
    if (doLogin.rows[0] === undefined) {
      res.locals.userId = false;
    }
    return next();
  }
  loginUser().catch((err) => {
    return next({
      log: `ERROR In ${err}`,
    });
  });
};

module.exports = loginController;
