const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'sa',
    password: '23500', // ใช้ environment variable
    database: 'villagecoop'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = connection;
