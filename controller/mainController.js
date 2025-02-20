const express = require("express");
const mysql = require("mysql2");
const mainLayout = "../views/layouts/main.ejs";

const 
{
    getAllBlog,
    getOneBlog
} = require("./blogController.js");

const
{
    getUserName
} = require("./userController.js");

const connectUserBlog = async (req, res) =>
{
    const useruuid = req.params.useruuid;

    try
    {
        const [ blogData, userdata] = await Promise.all
        (
            [
                getAllBlog(useruuid),
                getUserName(useruuid)
            ]
        )

        const data = blogData.map(post => ({...post, userdata}))

        const locals = 
        {
            title: "USER HOME"
        }

        res.render("index", { data, locals, layout: mainLayout});
    }
    catch(error)
    {
        res.status(500).send({ error: 'Error retrieving blog data' });
    }    
};

const connectUserOneBlog = async (req, res) =>
{
    const bloguuid = req.params.bloguuid;

    try
    {
        const combineBlogUser =  await Promise.all
        (
            [
                getOneBlog(bloguuid),
            ]
        )

        locals =
        {
            title: "USER BLOG"
        };

        res.render("about", {locals, layout: mainLayout});
    }
    catch(error)
    {
        res.status(500).send("NOT FOUND DATA");
    }
}

module.exports = 
{   
    connectUserBlog,
    connectUserOneBlog,
};