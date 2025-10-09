-- SQL do ręcznego utworzenia tabeli w Railway MySQL

-- 1. Najpierw utwórz tabelę (wklej do SQL Query w Railway):
CREATE TABLE products (
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
);

-- 2. Potem wstaw dane (wklej do SQL Query w Railway):
INSERT INTO products (
    image, 
    title, 
    price, 
    original_price, 
    is_super_price, 
    is_allegro_days, 
    guarantee, 
    delivery, 
    pay_later, 
    seller
) VALUES 
(
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
    'Laptop ASUS VivoBook 15 Intel Core i5 8GB RAM 512GB SSD',
    2299.00,
    2899.00,
    TRUE,
    TRUE,
    'Gwarancja ✓',
    'Darmowa dostawa',
    TRUE,
    'ASUS Official Store'
),
(
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    'Słuchawki bezprzewodowe Sony WH-1000XM4 Noise Cancelling',
    899.00,
    1199.00,
    TRUE,
    FALSE,
    'Gwarancja ✓',
    'Dostawa jutro',
    TRUE,
    'Sony Store'
),
(
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit=crop',
    'Smartwatch Apple Watch Series 9 GPS 45mm Sport Band',
    1599.00,
    NULL,
    FALSE,
    TRUE,
    'Gwarancja ✓',
    'Darmowa dostawa',
    FALSE,
    'Apple Authorized'
),
(
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    'Smartphone Samsung Galaxy S24 5G 256GB Phantom Black',
    3299.00,
    3699.00,
    TRUE,
    TRUE,
    'Gwarancja ✓',
    'Dostawa jutro',
    TRUE,
    'Samsung Official'
),
(
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    'Buty sportowe Nike Air Max 270 React Męskie',
    459.00,
    599.00,
    FALSE,
    FALSE,
    'Gwarancja ✓',
    'Darmowa dostawa',
    TRUE,
    'Nike Store'
),
(
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    'Słuchawki gamingowe SteelSeries Arctis 7P Wireless',
    679.00,
    NULL,
    FALSE,
    TRUE,
    'Gwarancja ✓',
    'Dostawa jutro',
    FALSE,
    'SteelSeries Official'
),
(
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
    'Zegarek męski Casio G-Shock GA-2100-1A1ER',
    299.00,
    399.00,
    TRUE,
    FALSE,
    'Gwarancja ✓',
    'Darmowa dostawa',
    TRUE,
    'Casio Store'
),
(
    'https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=400&h=300&fit=crop',
    'Tablet iPad Air 5th Gen Wi-Fi 64GB Space Gray',
    2199.00,
    2499.00,
    FALSE,
    TRUE,
    'Gwarancja ✓',
    'Dostawa jutro',
    TRUE,
    'Apple Authorized'
),
(
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop',
    'Kamera Canon EOS M50 Mark II + obiektyw 15-45mm',
    1899.00,
    NULL,
    FALSE,
    FALSE,
    'Gwarancja ✓',
    'Darmowa dostawa',
    FALSE,
    'Canon Official'
),
(
    'https://images.unsplash.com/photo-1574920111867-e8e48d9a0c2f?w=400&h=300&fit=crop',
    'Bluza z kapturem Nike Sportswear Club Fleece',
    189.00,
    249.00,
    TRUE,
    FALSE,
    'Gwarancja ✓',
    'Darmowa dostawa',
    TRUE,
    'Nike Store'
);
