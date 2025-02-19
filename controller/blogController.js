const mysql = require("mysql2");
const express = require("express");
const connection = require("../config/malogdbConnection");

// 유저에 대한 모든 블로그 정보 가져오기
const getAllBlog = async (req, res) =>
{
    const useruuid = req.params.useruuid;

    try
    {
        const [ blog ] = await connection.query(`SELECT * FROM blog WHERE useruuid = ?`, [useruuid]);

        if(blog.length === 0)
        {
            res.status(401).send("EMPTY DATA");
        }
        else
        {
            res.json(blog);
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