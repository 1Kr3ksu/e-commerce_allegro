-- SQL do Railway MySQL - utwórz tabelę products

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

-- Wstaw przykładowy produkt
INSERT INTO products (image, title, price, original_price, is_super_price, is_allegro_days, guarantee, delivery, pay_later, seller) VALUES 
('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop', 'Laptop ASUS VivoBook 15', 2299.00, 2899.00, TRUE, TRUE, 'Gwarancja ✓', 'Darmowa dostawa', TRUE, 'ASUS Store');

-- Sprawdź czy działa
SELECT * FROM products;
