import { useState } from 'react';
import './styles/Footer.css';
import allegroLogo from '/allegro.png';
import appStoreBadge from '/app-store-badge.svg';
import googlePlayBadge from '/google-play-badge.png';
import appGalleryBadge from '/app-gallery-badge.svg';
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaHeart } from 'react-icons/fa';
import { useTheme } from './contexts/ThemeContext';
import ThemeModal from './components/ThemeModal';

function Footer() {
  const { themePreference, currentTheme } = useTheme();
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  const getThemeDisplayName = () => {
    switch (themePreference) {
      case 'system':
        return `Preferencje systemowe (${currentTheme === 'dark' ? 'ciemny' : 'jasny'})`;
      case 'light':
        return 'Motyw jasny';
      case 'dark':
        return 'Motyw ciemny';
      default:
        return 'Motyw jasny';
    }
  };
  return (
    <footer className="allegro-footer">
      <div className="allegro-footer-container">
        <div className="allegro-footer-content">
          <div className="allegro-footer-sections">
            <div className="allegro-footer-column">
              <h4 className="allegro-footer-title">Allegro</h4>
              <ul className="allegro-footer-links">
                <li><a href="#">O nas</a></li>
                <li><a href="#">Allegro Share</a></li>
                <li><a href="#">Reklama</a></li>
                <li><a href="#">Allegro Ads</a></li>
                <li><a href="#">Allegro API</a></li>
                <li><a href="#">Praca w Allegro</a></li>
                <li><a href="#">Zrównoważony rozwój</a></li>
                <li><a href="#">Mapa strony</a></li>
                <li><a href="#">Rankingi produktów</a></li>
                <li><a href="#">Informacje dla Aktu o Usługach Cyfrowych i zgłaszanie produktów niebezpiecznych</a></li>
                <li><a href="#">Dodatkowe informacje o reklamie w Allegro i jej parametrach</a></li>
                <li><a href="#">Raport o przeciwdziałaniu rozpowszechniania treści o charakterze terrorystycznym</a></li>
              </ul>
            </div>

            <div className="allegro-footer-column">
              <h4 className="allegro-footer-title">Centrum pomocy</h4>
              <ul className="allegro-footer-links">
                <li><a href="#">Pomoc dla kupujących</a></li>
                <li><a href="#">Aktualności dla kupujących</a></li>
                <li><a href="#">Spytaj Społeczność</a></li>
                <li><a href="#">Dla kupujących</a></li>
                <li><a href="#">Pomoc dla sprzedających</a></li>
                <li><a href="#">Sprzedawaj na Allegro</a></li>
                <li><a href="#">Zwrot zakupu</a></li>
                <li><a href="#">Polityka prywatności mediów społecznościowych</a></li>
                <li><a href="#">Polityka plików "cookies"</a></li>
                <li><a href="#">Ustawienia plików "cookies"</a></li>
                <li><a href="#">Regulamin</a></li>
                <li><a href="#">Udostępnianie lokalizacji</a></li>
                <li><a href="#">Bezpieczeństwo</a></li>
                <li><a href="#">Sprzedaż międzynarodowa</a></li>
                <li><a href="#">Informacja o dostępności usług</a></li>
              </ul>
            </div>

            <div className="allegro-footer-column">
              <h4 className="allegro-footer-title">Serwisy</h4>
              <ul className="allegro-footer-links">
                <li><a href="#">Allegro Ochrona Kupujących</a></li>
                <li><a href="#">Akademia Allegro</a></li>
                <li><a href="#">Allegro Analytics</a></li>
                <li><a href="#">Allegro Business</a></li>
                <li><a href="#">Allegro Care</a></li>
                <li><a href="#">Allegro Charytatywni</a></li>
                <li><a href="#">Allegro Inspiruje</a></li>
                <li><a href="#">Allegro Lokalnie</a></li>
                <li><a href="#">Allegro Merchant Finance</a></li>
                <li><a href="#">Allegro One</a></li>
                <li><a href="#">Allegro One Fulfillment</a></li>
                <li><a href="#">Allegro Pay</a></li>
                <li><a href="#">Allegro Pay Business</a></li>
                <li><a href="#">Allegro Smart!</a></li>
                <li><a href="#">Archiwum Allegro</a></li>
                <li><a href="#">Karty podarunkowe Allegro</a></li>
                <li><a href="#">Monety Allegro</a></li>
                <li><a href="#">Strefa marek</a></li>
              </ul>
            </div>

            <div className="allegro-footer-column">
              <h4 className="allegro-footer-title">Ustawienia wyświetlania</h4>
              <div className="allegro-footer-settings">
                <div className="allegro-setting-item">
                  <span className="allegro-setting-label">Wygląd:</span>
                  <button
                    className="allegro-setting-value theme-toggle-btn"
                    onClick={() => setIsThemeModalOpen(true)}
                  >
                    {getThemeDisplayName()}
                  </button>
                </div>
              </div>

              <h4 className="allegro-footer-title">Ustawienia lokalizacji</h4>
              <div className="allegro-footer-settings">
                <div className="allegro-setting-item">
                  <span className="allegro-setting-label">Kraj:</span>
                  <span className="allegro-setting-value">Polska</span>
                </div>
                <div className="allegro-setting-item">
                  <span className="allegro-setting-label">Kraj dostawy:</span>
                  <span className="allegro-setting-value">Polska</span>
                </div>
                <div className="allegro-setting-item">
                  <span className="allegro-setting-label">Język:</span>
                  <span className="allegro-setting-value">polski</span>
                </div>
                <div className="allegro-setting-item">
                  <span className="allegro-setting-label">Waluta:</span>
                  <span className="allegro-setting-value">PLN</span>
                </div>
              </div>
            </div>
          </div>

          <div className="allegro-footer-apps">
            <div className="allegro-app-stores">
              <a href="https://apps.apple.com/app/allegro/id305659772" target="_blank" rel="noopener noreferrer" className="allegro-app-store">
                <img src={appStoreBadge} alt="Pobierz w App Store" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=pl.allegro" target="_blank" rel="noopener noreferrer" className="allegro-google-play">
                <img src={googlePlayBadge} alt="Dostępne w Google Play" />
              </a>
              <a href="https://appgallery.huawei.com/#/app/C100080395" target="_blank" rel="noopener noreferrer" className="allegro-app-store">
                <img src={appGalleryBadge} alt="Dostępne w AppGallery" />
              </a>
            </div>

            <div className="allegro-social-icons">
              <a href="#" className="allegro-social-link">
                <FaFacebook />
              </a>
              <a href="#" className="allegro-social-link">
                <FaLinkedin />
              </a>
              <a href="#" className="allegro-social-link">
                <FaInstagram />
              </a>
              <a href="#" className="allegro-social-link">
                <FaPinterest />
              </a>
              <a href="#" className="allegro-social-link">
                <FaYoutube />
              </a>
              <a href="#" className="allegro-social-link">
                <FaHeart />
              </a>
            </div>
          </div>
        </div>

        <div className="allegro-footer-bottom">
          <div className="allegro-footer-logo">
            <img src={allegroLogo} alt="Allegro" />
          </div>
        </div>
      </div>

      {/* Theme Modal */}
      <ThemeModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
      />
    </footer>
  );
}

export default Footer;