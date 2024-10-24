const config = {
    user: 'sa',
    password: '261200',
    server: '127.0.0.1', 
    database: 'DB',
    synchronize: true,
    options: {
        encrypt: false, 
        trustServerCertificate: true,
        enableArithAbort: true
    },
    port: 1433, 
};

module.exports = config;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Uncomment this block if you need to test the data retrieval endpoint
app.get('/api/data', async (req, res) => {
    try {
        const pool = await sql.connect(config);
        const result = await pool.request().query(`SELECT * FROM [user]`);
        res.json(result.recordset);
    } catch (err) {
        console.error('Error retrieving data:', err);
        res.status(500).send('Error retrieving data');
    }
});

// app.post('/api/login', async (req, res) => {
//     const { username, password } = req.body;

//     if (!username || !password) {
//         console.error('Login attempt with missing username or password:', { username, password });
//         return res.status(400).json({ message: 'Username and password are required' });
//     }

//     try {
//         const pool = await sql.connect(config);
//         const result = await pool.request()
//             .input('username', sql.VarChar, username)
//             .query('SELECT * FROM [user] WHERE username = @username');
        
//         if (result.recordset.length > 0) {
//             const user = result.recordset[0];
//             console.log('User found:', user);

//             // Replace this with your password hashing and comparison logic
//             if (user.password === password) {
//                 // password is correct, you can return a success response
//                 console.log('Login successful for user:', username);
//                 return res.status(200).json({ message: 'Login successful' });
//             } else {
//                 // password is incorrect
//                 console.warn('Invalid password attempt for user:', username);
//                 return res.status(401).json({ message: 'Invalid username or password' });
//             }
//         } else {
//             // User not found
//             console.warn('User not found:', username);
//             return res.status(404).json({ message: 'User not found' });
//         }
//     } catch (error) {
//         console.error('Database error:', error);
//         return res.status(500).json({ message: 'Server error' });
//     }
// });

// app.post('/signup', async (req, res) => {
//     const { firstName, lastName, username, password, email, phonenumber} = req.body;

//     try {
//         const pool = await sql.connect(config);
// console.log(err)
//         const result = await pool.request()
//             .input('FirstName', sql.NVarChar(50), firstName)
//             .input('LastName', sql.NVarChar(100), lastName)
//             .input('UserName', sql.VarChar(100), username)
//             .input('Password', sql.VarChar(60), password)
//             .input('Email', sql.VarChar(50), email)
//             .input('Phone', sql.NVarChar(10), phonenumber)
//             .query('INSERT INTO User_Account (FirstName, LastName, UserName, Password, Email, Phone, Role) VALUES (@FirstName, @LastName, @UserName, @Password, @Email, @Phone)');
        
//         console.log(result);

//         if (result.rowsAffected[0] > 0) {
//             res.status(201).send({ message: 'User registered successfully', rowsAffected: result.rowsAffected[0] });
// console.log(err)
//         } else {
//             res.status(400).send({ message: 'User registration failed' });
// console.log(err)
//         }
//     } catch (err) {
//         console.error('Database query failed:', err);
//         res.status(500).send('An error occurred while registering the user.');
//     }
// });
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
