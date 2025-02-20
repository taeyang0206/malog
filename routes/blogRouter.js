const express = require("express");
const router = express.Router();

const 
{ 
    connectUserBlog,
    connectUserOneBlog,

} = require("../controller/mainController.js");

router.route("/:useruuid")
    .get(connectUserBlog);

router.route("/:useruuid/:bloguuid")
    .get(connectUserOneBlog);

module.exports = router;