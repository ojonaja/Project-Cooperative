const express = require('express');
const router = express.Router();
const connection = require('../config');

// User login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    connection.query('SELECT * FROM user WHERE username = ?', [username], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Server error' });
        }
        if (results.length > 0 && results[0].password === password) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    });
});

// User registration route
router.post('/register', (req, res) => {
    const { firstName, lastName, username, password, email, phone } = req.body;

    const query = 'INSERT INTO User_Account (FirstName, LastName, UserName, Password, Email, Phone) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [firstName, lastName, username, password, email, phone], (err, results) => {
        if (err) {
            console.error('Database query failed:', err);
            return res.status(500).send('An error occurred while registering the user.');
        }
        res.status(201).send({ message: 'User registered successfully', rowsAffected: results.affectedRows });
    });
});

module.exports = router;
