const mysql = require("mysql2");
const connection = require("../config/malogdbConnection");
const express = require("express");

const getUserName = async (useruuid) =>
{
    // 배열 형태로 반환
    const [ data ] = await connection.query(`SELECT username FROM user WHERE useruuid = ?`, [ useruuid ]);

    if(data.length <= 0)
    {
        return null;
    }
    else
    {
        return data[0].username;
    }
}

module.exports = { getUserName };