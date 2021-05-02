const express = require("express"),
  router = express.Router(),
  db = require("../models"),
  helper = require("../helper/user.js");

router.get("/", helper.getAllUsers);

router.post("/", helper.postUser);

router.get("/id/:userID", helper.getUserByID);

router.get("/name/:name", helper.getUserByName);

router.patch("/id/:userID", helper.putUserByID);

router.patch("/name/:name", helper.putUserByName);

router.delete("/id/:userID", helper.deleteUserByID);

router.delete("/name/:name", helper.deleteUserByName);

module.exports = router;
