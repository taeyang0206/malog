const mysql = require('mysql2');

const createUserTable = `
    CREATE TABLE IF NOT EXISTS user
    (
        uuid VARCHAR(100) PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        useremail VARCHAR(100) NOT NULL UNIQUE,
        phonenum VARCHAR(100) NOT NULL UNIQUE,
        nickname VARCHAR(100) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
    `;

module.exports = createUserTable;