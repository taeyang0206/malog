const mysql = require('mysql2');
const connection = require("../config/malogdbConnection.js");

const createUserTable = async () =>
{
    try
    {
        await connection.query
        (
            `CREATE TABLE IF NOT EXISTS user
            (
                useruuid VARCHAR(20) PRIMARY KEY,
                username VARCHAR(100) NOT NULL,
                useremail VARCHAR(100) NOT NULL UNIQUE,
                phonenum VARCHAR(100) NOT NULL UNIQUE,
                userid VARCHAR(100) NOT NULL UNIQUE,
                userpassword VARCHAR(100) NOT NULL UNIQUE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )`
        );
        console.log("SUCCESS USER TABLE CREATE")
    }
    catch(err)
    {
        console.log("FAIL USER TABLE CREATE:", err);
    }
};

module.exports = createUserTable;