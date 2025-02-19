const express = require("express");
const router = express.Router();

const 
{ 
    getAllBlog,
    getOneBlog

} = require("../controller/blogController.js");

router.route("/home/:useruuid")
    .get(getAllBlog);

router.route("/:useruuid/:bloguuid")
    .get(getOneBlog);

module.exports = router;