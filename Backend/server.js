const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'e-commerce_allegro'
});

// Test connection to database
db.connect((err) => {
    if (err) {
        console.log('Database connection failed: ' + err.message);
    } else {
        console.log('Connected to MySQL Database!');
    }
});

app.get('/', (req, res) => {
    return res.json('From Backend site - Server');
});

// Endpoint to test database connection
app.get('/test-db', (req, res) => {
    db.query('SELECT 1 as test', (err, result) => {
        if (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Database connection failed',
                error: err.message
            });
        }
        return res.json({
            status: 'success',
            message: 'Database connection is working!',
            data: result
        });
    });
});

// Endpoint to check database tables
app.get('/check-tables', (req, res) => {
    db.query('SHOW TABLES', (err, result) => {
        if (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Failed to fetch tables',
                error: err.message
            });
        }
        return res.json({
            status: 'success',
            message: 'Tables in database',
            tables: result
        });
    });
});

app.listen(8081, () => {
    console.log('Server is running on port 8081');
});