const mysql = require("mysql2");
const express = require("express");
const connection = require("../config/malogdbConnection");
const mainLayout = "../views/layouts/main.ejs";
const { format } = require("date-fns");

// 유저에 대한 모든 블로그 정보 가져오기
const getAllBlog = async (useruuid) =>
{
    try
    {
        const [ blog ] = await connection.query(`SELECT * FROM blog WHERE useruuid = ?`, [useruuid]);

        if(blog.length === 0)
        {
            throw new Error("EMPTY DATA");
        }
        else
        {
            const updatedBlog = blog.map(post => ({ ...post, 
                created_at: format(new Date(post.created_at), "yyyy-MM-dd HH:mm:ss")}));

            return updatedBlog;
        }
    }
    catch(error)
    {
        throw new Error("NOT FOUND BLOG DATA");
    }
}

// 특정 블로그 uuid 에 대한 블로그 제목 및 내용 가져오기
const getOneBlog = async (bloguuid) =>
{
    try
    {
        const [ blog ] = await connection.query(`SELECT * FROM blog WHERE bloguuid = ?`, [bloguuid]);

        const updatedBlog = blog.map(post => ({ ...post, 
            created_at: format(new Date(post.created_at), "yyyy-MM-dd HH:mm:ss")}));

        return updatedBlog;
    }
    catch(error)
    {
        res.status(400).send(error);
    }
}

module.exports = { getAllBlog, getOneBlog };