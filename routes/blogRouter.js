const express = require("express");
const router = express.Router();

const 
{ 
    connectUserBlog,

} = require("../controller/mainController.js");

router.route("/:useruuid")
    .get(connectUserBlog);

// router.route("/:useruuid/:bloguuid")
//     .get(getOneBlog);

module.exports = router;