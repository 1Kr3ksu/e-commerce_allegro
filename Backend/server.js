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

app.get('/products', (req, res) => {
    const sql = "SELECT * FROM products"; 
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data); 
    });
});

app.listen(8081, () => {
    console.log('Server is running on port 8081');
});