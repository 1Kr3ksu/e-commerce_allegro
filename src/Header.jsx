import { useState, useEffect, useRef } from 'react';
import './styles/Header.css';
import './styles/Auth.css';
import allegroLogo from '/allegro.png';
import AuthModal from './components/auth/AuthModal';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login', userType: 'buyer' });
  const userDropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const openAuthModal = (mode, userType = 'buyer') => {
    setAuthModal({ isOpen: true, mode, userType });
    setIsUserDropdownOpen(false); // Zamykamy dropdown
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'login', userType: 'buyer' });
  };

  const handleAuthModeChange = (mode, userType = 'buyer') => {
    setAuthModal({ isOpen: true, mode, userType });
  };

  // Zamykanie dropdown'a po kliknięciu poza nim
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
                <span className="material-symbols-outlined search-category-arrow">
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
            <div className="user-menu-container" ref={userDropdownRef}>
              <div className="user-menu" onClick={toggleUserDropdown}>
                <span>Moje Allegro</span>
                <span className={`material-symbols-outlined user-arrow ${isUserDropdownOpen ? 'rotated' : ''}`}>
                  keyboard_arrow_down
                </span>
              </div>

              {isUserDropdownOpen && (
                <div className="user-dropdown">
                  <div className="user-dropdown-header">
                    <div className="user-avatar">
                      <div className="avatar-circle">
                        <span className="material-icons">person</span>
                      </div>
                      <div className="user-info">
                        <p className="welcome-text">Witaj w Allegro!</p>
                        <p className="login-text">Jeśli masz już konto, zaloguj się, aby zobaczyć swoje zakupy, obserwowane oferty i powiadomienia. W Allegro jesteś u siebie!</p>
                      </div>
                    </div>
                    <button className="login-btn" onClick={() => openAuthModal('login')}>ZALOGUJ SIĘ</button>
                    <div className="register-options">
                      <p>Nie masz jeszcze konta? Załóż teraz.</p>
                      <div className="register-buttons">
                        <button className="register-btn buyer" onClick={() => openAuthModal('register', 'buyer')}>DLA KUPUJĄCEGO</button>
                        <button className="register-btn seller" onClick={() => openAuthModal('register', 'seller')}>DLA SPRZEDAJĄCEGO</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeAuthModal}
        mode={authModal.mode}
        userType={authModal.userType}
        onModeChange={handleAuthModeChange}
      />
    </>
  )
}

export default Header