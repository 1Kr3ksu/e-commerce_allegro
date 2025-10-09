const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Railway MySQL connection
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
        initializeDatabase();
    }
});

// Function to initialize database with tables and data
function initializeDatabase() {
    // Create products table if it doesn't exist
    const createTableSQL = `
        CREATE TABLE IF NOT EXISTS products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            image TEXT,
            title TEXT,
            price DECIMAL(10,2),
            original_price DECIMAL(10,2),
            is_super_price BOOLEAN DEFAULT FALSE,
            is_allegro_days BOOLEAN DEFAULT FALSE,
            guarantee TEXT,
            delivery TEXT,
            pay_later BOOLEAN DEFAULT FALSE,
            seller TEXT
        )
    `;

    db.query(createTableSQL, (err) => {
        if (err) {
            console.log('Error creating table: ' + err.message);
        } else {
            console.log('Products table ready!');
            
            // Check if table is empty and insert sample data
            db.query('SELECT COUNT(*) as count FROM products', (err, result) => {
                if (err) {
                    console.log('Error checking table: ' + err.message);
                } else if (result[0].count === 0) {
                    console.log('Table is empty, inserting sample data...');
                    insertSampleData();
                } else {
                    console.log(`Table already has ${result[0].count} products`);
                }
            });
        }
    });
}

// Function to insert sample data
function insertSampleData() {
    const insertSQL = `
        INSERT INTO products (
            image, title, price, original_price, is_super_price, is_allegro_days, 
            guarantee, delivery, pay_later, seller
        ) VALUES 
        (
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
            'Laptop ASUS VivoBook 15 Intel Core i5 8GB RAM 512GB SSD',
            2299.00, 2899.00, TRUE, TRUE, 'Gwarancja ✓', 'Darmowa dostawa', TRUE, 'ASUS Official Store'
        ),
        (
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
            'Słuchawki bezprzewodowe Sony WH-1000XM4 Noise Cancelling',
            899.00, 1199.00, TRUE, FALSE, 'Gwarancja ✓', 'Dostawa jutro', TRUE, 'Sony Store'
        ),
        (
            'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit=crop',
            'Smartwatch Apple Watch Series 9 GPS 45mm Sport Band',
            1599.00, NULL, FALSE, TRUE, 'Gwarancja ✓', 'Darmowa dostawa', FALSE, 'Apple Authorized'
        ),
        (
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
            'Smartphone Samsung Galaxy S24 5G 256GB Phantom Black',
            3299.00, 3699.00, TRUE, TRUE, 'Gwarancja ✓', 'Dostawa jutro', TRUE, 'Samsung Official'
        ),
        (
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
            'Buty sportowe Nike Air Max 270 React Męskie',
            459.00, 599.00, FALSE, FALSE, 'Gwarancja ✓', 'Darmowa dostawa', TRUE, 'Nike Store'
        ),
        (
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
            'Słuchawki gamingowe SteelSeries Arctis 7P Wireless',
            679.00, NULL, FALSE, TRUE, 'Gwarancja ✓', 'Dostawa jutro', FALSE, 'SteelSeries Official'
        ),
        (
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
            'Zegarek męski Casio G-Shock GA-2100-1A1ER',
            299.00, 399.00, TRUE, FALSE, 'Gwarancja ✓', 'Darmowa dostawa', TRUE, 'Casio Store'
        ),
        (
            'https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=400&h=300&fit=crop',
            'Tablet iPad Air 5th Gen Wi-Fi 64GB Space Gray',
            2199.00, 2499.00, FALSE, TRUE, 'Gwarancja ✓', 'Dostawa jutro', TRUE, 'Apple Authorized'
        ),
        (
            'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop',
            'Kamera Canon EOS M50 Mark II + obiektyw 15-45mm',
            1899.00, NULL, FALSE, FALSE, 'Gwarancja ✓', 'Darmowa dostawa', FALSE, 'Canon Official'
        ),
        (
            'https://images.unsplash.com/photo-1574920111867-e8e48d9a0c2f?w=400&h=300&fit=crop',
            'Bluza z kapturem Nike Sportswear Club Fleece',
            189.00, 249.00, TRUE, FALSE, 'Gwarancja ✓', 'Darmowa dostawa', TRUE, 'Nike Store'
        )
    `;

    db.query(insertSQL, (err) => {
        if (err) {
            console.log('Error inserting sample data: ' + err.message);
        } else {
            console.log('Sample data inserted successfully!');
        }
    });
}

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