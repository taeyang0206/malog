const express = require("express");
const router = express.Router();

const { getBlog } = require("../controller/blogController.js");

router.route("/:useruuid")
    .get(getBlog);

module.exports = router;