const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');

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

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to retrieve user data (for testing purposes)
app.get('/api/data', async (req, res) => {
    try {
        const pool = await sql.connect(config);
        const result = await pool.request().query('SELECT * FROM [user]');
        res.json(result.recordset);
    } catch (err) {
        console.error('Error retrieving data:', err);
        res.status(500).send('Error retrieving data');
    }
});

// User login endpoint
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const pool = await sql.connect(config);
        const result = await pool.request()
            .input('username', sql.VarChar, username)
            .query('SELECT * FROM [user] WHERE username = @username');

        if (result.recordset.length > 0) {
            const user = result.recordset[0];
            if (user.password === password) {
                return res.status(200).json({ message: 'Login successful' });
            } else {
                return res.status(401).json({ message: 'Invalid username or password' });
            }
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Database error:', error);
        return res.status(500).json({ message: 'Server error' });
    }
});

// User registration endpoint
app.post('/api/register-member', async (req, res) => {
    const { firstName, lastName, username, password, email, phone } = req.body;

    try {
        const pool = await sql.connect(config);
        const result = await pool.request()
            .input('FirstName', sql.NVarChar(50), firstName)
            .input('LastName', sql.NVarChar(100), lastName)
            .input('UserName', sql.VarChar(100), username)
            .input('Password', sql.VarChar(60), password)
            .input('Email', sql.VarChar(50), email)
            .input('Phone', sql.NVarChar(10), phone)
            .query('INSERT INTO User_Account (FirstName, LastName, UserName, Password, Email, Phone) VALUES (@FirstName, @LastName, @UserName, @Password, @Email, @Phone)');

        if (result.rowsAffected[0] > 0) {
            res.status(201).send({ message: 'User registered successfully', rowsAffected: result.rowsAffected[0] });
        } else {
            res.status(400).send({ message: 'User registration failed' });
        }
    } catch (err) {
        console.error('Database query failed:', err);
        res.status(500).send('An error occurred while registering the user.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
