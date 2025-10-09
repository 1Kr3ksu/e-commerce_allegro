import { useState, useEffect } from 'react';
import './styles/Products.css';

function Carts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Tymczasowo localhost - Railway nie działa
        const API_URL = 'http://localhost:8081/products';
        
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Nie udało się pobrać produktów');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="loading">Ładowanie produktów...</div>;
  if (error) return <div className="error">Błąd: {error}</div>;

  return (
    <section className="allegro-products-section">
      <div className="allegro-container">
        <div className="allegro-section-header">
          <h2 className="allegro-section-title">
            Okazje do -30%? To dopiero rozgrzewka przed Allegro Days
            <a href="#" className="see-more">Zobacz więcej</a>
          </h2>
        </div>

        <div className="allegro-products-grid">
          {products.map((product) => (
            <div key={product.id} className="allegro-product-card">
              {product.is_allegro_days == 1 && (
                <div className="allegro-days-badge">allegro days</div>
              )}

              {product.is_super_price == 1 && (
                <div className="super-price-badge">SUPERCENA</div>
              )}

              <div className="allegro-product-image">
                <img src={product.image} alt={product.title} />
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carts