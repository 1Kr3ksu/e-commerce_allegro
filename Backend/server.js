const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.MYSQLHOST || 'localhost',
    port: process.env.MYSQLPORT || 3306,
    user: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || '',
    database: process.env.MYSQLDATABASE || 'e-commerce_allegro'
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

app.get('/products', (req, res) => {
    const sql = "SELECT * FROM products"; 
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data); 
    });
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});