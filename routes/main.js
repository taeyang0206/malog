const express = require("express");
const router = express.Router();

const {
    viewMain,
    viewAbout,
} = require("../controller/malogController");

router.route("/home")
    .get(viewMain);

router.route("/about")
.get(viewAbout);

module.exports = router;