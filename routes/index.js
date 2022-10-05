const router = require("express").Router();
const axios = require("axios");
const { response } = require("../app");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
