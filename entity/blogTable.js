const mysql = require("mysql2");
const connection = require("../config/malogdbConnection.js");

const createBlogTable = async () =>
{
    try
    {
        await connection.query
        (
            `
            CREATE TABLE IF NOT EXISTS blog
            (
                bloguuid VARCHAR(20) PRIMARY KEY,
                useruuid VARCHAR(20) NOT NULL,
                title VARCHAR(100) NOT NULL,
                content VARCHAR(500) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (useruuid) REFERENCES user(uuid) ON DELETE CASCADE
            )`
        );
        console.log("SUCCESS BLOG TABLE CREATE");
    }
    catch(err)
    {
        console.log("FAIL BLOG TABLE CREATE :", err);
    }
};

module.exports = createBlogTable;