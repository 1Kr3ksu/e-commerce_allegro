import { useState, useEffect } from 'react';
import './styles/Products.css';

function Carts({ searchTerm = '', selectedCategory = 'all' }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let API_URL = 'http://localhost:8081/products';
        
        // Jeśli jest wyszukiwanie lub kategoria, użyj endpoint search
        if (searchTerm || selectedCategory !== 'all') {
          const params = new URLSearchParams();
          if (searchTerm) params.append('search', searchTerm);
          if (selectedCategory !== 'all') params.append('category', selectedCategory);
          API_URL = `http://localhost:8081/products/search?${params.toString()}`;
        }
        
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Nie udało się pobrać produktów');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchTerm, selectedCategory]);

  if (loading) return <div className="loading">Ładowanie produktów...</div>;
  if (error) return <div className="error">Błąd: {error}</div>;

  return (
    <section className="allegro-products-section">
      <div className="allegro-container">
        {/* Pokazuj info o wyszukiwaniu jeśli jest aktywne */}
        {(searchTerm || selectedCategory !== 'all') && (
          <div className="search-info">
            <h3>
              Wyniki wyszukiwania 
              {searchTerm && <span> dla: "<strong>{searchTerm}</strong>"</span>}
              {selectedCategory !== 'all' && <span> w kategorii: <strong>{selectedCategory}</strong></span>}
            </h3>
            <p>Znaleziono: {filteredProducts.length} produktów</p>
          </div>
        )}

        <div className="allegro-section-header">
          <h2 className="allegro-section-title">
            {searchTerm || selectedCategory !== 'all' ? 'Wyniki wyszukiwania' : 'Okazje do -30%? To dopiero rozgrzewka przed Allegro Days'}
            <a href="#" className="see-more">Zobacz więcej</a>
          </h2>
        </div>

        <div className="allegro-products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="allegro-product-card">
                {product.is_allegro_days == 1 && (
                  <div className="allegro-days-badge">allegro days</div>
                )}

                {product.is_super_price == 1 && (
                  <div className="super-price-badge">SUPERCENA</div>
                )}

                <div className="allegro-product-image">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x400/f0f0f0/666?text=Brak+zdjęcia';
                    }}
                  />
                </div>

                <div className="allegro-product-info">
                  <div className="allegro-price-info">
                    {product.original_price && product.original_price > 0 && (
                      <div className="allegro-old-price">{parseFloat(product.original_price).toFixed(2)} zł</div>
                    )}
                    <div className="allegro-current-price">{parseFloat(product.price).toFixed(2)} zł</div>
                  </div>

                  <div className="allegro-guarantee">
                    <span className="guarantee-icon">✓</span>
                    {product.guarantee}
                  </div>

                  <h3 className="allegro-product-title">{product.title}</h3>

                  <div className="allegro-seller">
                    <span className="seller-badge">{product.seller}</span>
                  </div>

                  {product.pay_later == 1 && (
                    <div className="pay-later">
                      <span>zapłać później</span>
                      <span className="pay-icon">PAY</span>
                    </div>
                  )}

                  <div className="allegro-delivery">
                    {product.delivery}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products">
              <p>Nie znaleziono produktów spełniających kryteria wyszukiwania.</p>
              {searchTerm && (
                <p>Spróbuj wyszukać inne słowa kluczowe.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Carts