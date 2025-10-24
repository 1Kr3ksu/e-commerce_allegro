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

// Nowy endpoint do wyszukiwania produktów
app.get('/products/search', (req, res) => {
    const { search, category } = req.query;
    
    let sql = "SELECT * FROM products WHERE 1=1";
    let params = [];
    
    if (search) {
        sql += " AND title LIKE ?";
        params.push(`%${search}%`);
    }
    
    if (category && category !== 'all') {
        sql += " AND category = ?";
        params.push(category);
    }
    
    db.query(sql, params, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});

// Endpoint do pobierania dostępnych kategorii
app.get('/categories', (req, res) => {
    const sql = "SELECT DISTINCT category FROM products WHERE category IS NOT NULL";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data.map(row => row.category));
    });
});

app.listen(8081, () => {
    console.log('Server is running on port 8081');
});