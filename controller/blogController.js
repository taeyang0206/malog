const mysql = require("mysql2");
const express = require("express");
const connection = require("../config/malogdbConnection");
const mainLayout = "../views/layouts/main.ejs";
const { format } = require("date-fns");

const 
{
    getUserName,
} = require("./userController.js");

// 유저에 대한 모든 블로그 정보 가져오기
const getAllBlog = async (req, res) =>
{
    const useruuid = req.params.useruuid;
    const username = await getUserName(useruuid);

    try
    {
        const [ blog ] = await connection.query(`SELECT * FROM blog WHERE useruuid = ?`, [useruuid]);

        if(blog.length === 0)
        {
            res.status(401).send("EMPTY DATA");
        }
        else
        {
            // query로 가져온 데이터에 username 이라는 데이터 추가
            const updatedBlog = blog.map(post => ({ ...post, 
                created_at: format(new Date(post.created_at), "yyyy-MM-dd HH:mm:ss"), username }));

            const locals =
            {
                title : "USER HOME",
            };

            res.render("index", { blog: updatedBlog, locals, layout : mainLayout})
        }
    }
    catch(error)
    {
        res.status(400).send("NOT FOUND BLOG DATA");
    }
}

// 특정 블로그 uuid 에 대한 블로그 제목 및 내용 가져오기
const getOneBlog = async (req, res) =>
{
    const bloguuid = req.params.bloguuid;

    try
    {
        const [ blog ] = await connection.query(`SELECT * FROM blog WHERE bloguuid = ?`, [bloguuid]);
        res.json(blog);
    }
    catch(error)
    {
        res.status(400).send(error);
    }
}

module.exports = { getAllBlog, getOneBlog };