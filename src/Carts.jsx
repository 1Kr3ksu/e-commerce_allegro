import './App.css'
import okularyImg from '/okulary.webp'

const products = [
  {
    id: 1,
    image: okularyImg,
    title: "SOLARKA DO UBRAŃ TAPICERKI SWETRÓW KANAP NOCNA BLUZA",
    price: "59,90",
    originalPrice: "64,36",
    isSuperPrice: false,
    isAllegoDays: true,
    guarantee: "Gwarancja najniższej ceny",
    delivery: "dostawa we wtorek",
    payLater: true,
    seller: "SMART"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    title: "LAMPA BIURKOWA LED PRZEZROCZYSTA PRZÓD NA KIEROWNICĘ",
    price: "47,49",
    originalPrice: "49,99",
    isSuperPrice: false,
    isAllegoDays: true,
    guarantee: "Gwarancja najniższej ceny",
    delivery: "dostawa we wtorek",
    payLater: true,
    seller: "SMART"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    title: "Deska Śniadaniowa WC Wolnostojąca Uniwersalna BIAŁO",
    price: "52,24",
    originalPrice: "54,99",
    isSuperPrice: false,
    isAllegoDays: true,
    guarantee: "SMART",
    delivery: "zapłać później",
    payLater: true,
    seller: "SMART"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",
    title: "KOŃCÓWKI DO SZCZOTECZKI SONICZNEJ ELEKTRYCZNEJ VITAMIX",
    price: "62,99",
    originalPrice: "73,99",
    isSuperPrice: true,
    isAllegoDays: true,
    guarantee: "Gwarancja najniższej ceny",
    delivery: "zapłać później",
    payLater: true,
    seller: "SMART"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop",
    title: "Przefiltrowana ekspres do kawy MPM MKW-05",
    price: "129,00",
    originalPrice: "149,00",
    isSuperPrice: false,
    isAllegoDays: true,
    guarantee: "Gwarancja najniższej ceny",
    delivery: "dostawa we wtorek",
    payLater: true,
    seller: "SMART"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop",
    title: "Kawa ziarnista 100% ARABICA ŚWIEŻO PALONA ESPRESSO 1kg",
    price: "66,75",
    originalPrice: "70,27",
    isSuperPrice: false,
    isAllegoDays: true,
    guarantee: "Gwarancja najniższej ceny",
    delivery: "dostawa we wtorek",
    payLater: true,
    seller: "SMART"
  }
];

function Carts() {
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
              {product.isAllegoDays && (
                <div className="allegro-days-badge">allegro days</div>
              )}

              {product.isSuperPrice && (
                <div className="super-price-badge">SUPERCENA</div>
              )}

              <div className="allegro-product-image">
                <img src={product.image} alt={product.title} />
              </div>

              <div className="allegro-product-info">
                <div className="allegro-price-info">
                  <div className="allegro-old-price">{product.originalPrice} zł</div>
                  <div className="allegro-current-price">{product.price} zł</div>
                </div>

                <div className="allegro-guarantee">
                  <span className="guarantee-icon">✓</span>
                  {product.guarantee}
                </div>

                <h3 className="allegro-product-title">{product.title}</h3>

                <div className="allegro-seller">
                  <span className="seller-badge">{product.seller}</span>
                </div>

                {product.payLater && (
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