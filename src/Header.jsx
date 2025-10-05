import './styles/Header.css';
import allegroLogo from '/allegro.png';

function Header() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={allegroLogo} alt="Allegro" />
          </div>

          <div className="navbar-search">
            <div className="search-container">
              <input type="text" placeholder="czego szukasz?" className="search-input" />
              <div className="search-category">
                <select className="category-select">
                  <option value="all">Wszystkie kategorie</option>
                  <option value="electronics">Elektronika</option>
                  <option value="fashion">Moda</option>
                  <option value="home">Dom i ogród</option>
                  <option value="sports">Sport i rekreacja</option>
                  <option value="toys">Zabawki</option>
                  <option value="motors">Motoryzacja</option>
                </select>
                <span className="material-symbols-outlined category-arrow">
                  keyboard_arrow_down
                </span>

              </div>
              <button type="submit" className="search-button">SZUKAJ</button>
            </div>
          </div>

          <div className="navbar-icons">
            <div className="icon-item">
              <span className="material-symbols-outlined delivery-icon">local_shipping</span>
            </div>
            <div className="icon-item">
              <span className="material-symbols-outlined chatsupport-icon">
                chat_info
              </span>
            </div>
            <div className="icon-item">
              <span className="material-symbols-outlined favorite-icon">
                favorite
              </span>
            </div>
            <div className="icon-item">
              <span className="material-icons notification-icons">notifications</span>
            </div>
            <div className="icon-item">
              <span className="material-icons shopping-icons">shopping_bag</span>
            </div>
            <div className="user-menu">
              <span>Moje Allegro</span>
              <span className="material-symbols-outlined category-arrow">
                keyboard_arrow_down
              </span>

            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header