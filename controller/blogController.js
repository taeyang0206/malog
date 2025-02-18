const mysql = require("mysql2");
const express = require("express");
const connection = require("../config/malogdbConnection");

// 유저에 대한 모든 블로그 정보 가져오기
const getBlog = async (req, res) =>
{
    const useruuid = req.params;

    try
    {
        const [ blog ] = await connection.query(`SELECT * FROM blog WHERE useruuid = ?`, [useruuid]);
        res.json(blog);
    }
    catch(error)
    {
        res.status(400).send("NOT FOUND BLOG DATA");
    }
}

module.exports = { getBlog };