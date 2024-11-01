// controllers/registerController.js
const sql = require('mssql');

// คอนฟิกการเชื่อมต่อ SQL Server
const sqlConfig = {
    user: 'sa',
    password: '23500',
    server: 'localhost',
    database: 'villagecoop',
    options: {
        encrypt: true, // ใช้ true สำหรับ Azure
        trustServerCertificate: false, // ใช้ false สำหรับ production
    },
};

const registerMember = async (req, res) => {
    // รหัสการลงทะเบียนสมาชิก
    // ...
};

// ส่งออกฟังก์ชัน
module.exports = { registerMember };
