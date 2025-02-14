const express = require("express");
const router = express.Router();

const view = require("../controller/malogController");

router.route("/")
    .get(view);

module.exports = router;