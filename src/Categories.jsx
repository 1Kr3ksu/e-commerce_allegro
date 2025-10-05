import { useState } from 'react';
import './styles/Categories.css';

const categoriesData = [
  {
    name: 'Rankingi',
    items: [
      'Ranking głośników bluetooth do 350 zł',
      'Ranking głośników bluetooth do 400 zł',
      'Ranking głośników bluetooth do 500 zł',
      'Ranking głośników komputerowych',
      'Ranking głośników komputerowych do 400 zł',
      'Ranking głośników komputerowych do 500 zł'
    ],
  },
  {
    name: 'Ostatnio dodane',
    items: [
      'Podręczniki szkolne',
      'Outlet mebli',
      'Najlepsze gadżety i akcesoria do samochodu – co warto mieć w aucie?',
      'Tuning kokpitu auta – jak zrobić tuning wewnętrzny auta?',
      'Poduszka ortopedyczna - jaką wybrać'
    ],
  },
  {
    name: 'Najczęściej czytane',
    items: [
      'Regeneracja belki skrętnej – objawy usteri, regeneracja, koszty',
      'Przyprawy i mieszanki indyjskie, które warto stosować w kuchni',
      'Piłka do koszykówki – jaką wybrać?',
      'Gadżety na rower – top akcesoriów, które uatrakcyjnią Twoją jazdę'
    ],
  },
  {
    name: 'Wyjątkowe okazje',
    items: [
      'Bon na laptop dla nauczyciela',
      'iPhone 17',
      'iPhone 17 Pro',
      'iPhone 16',
      'Playstation 5',
      'Nintendo switch 2'
    ],
  },
  // Dodatkowe kategorie do pokazania po kliknięciu
  {
    name: 'Dom i Ogród',
    items: [
      'Meble ogrodowe',
      'Narzędzia budowlane',
      'Dekoracje wnętrz',
      'Oświetlenie LED',
      'Rośliny doniczkowe'
    ],
  },
  {
    name: 'Moda',
    items: [
      'Ubrania damskie',
      'Buty sportowe',
      'Akcesoria modowe',
      'Zegarki męskie',
      'Torebki damskie'
    ],
  },
  {
    name: 'Elektronika',
    items: [
      'Smartfony',
      'Laptopy',
      'Słuchawki bezprzewodowe',
      'Telewizory',
      'Konsole do gier'
    ],
  },
  {
    name: 'Sport i Turystyka',
    items: [
      'Sprzęt fitness',
      'Odzież sportowa',
      'Rowery',
      'Sprzęt turystyczny',
      'Suplementy'
    ],
  }
];

function Categories() {
  const [showMore, setShowMore] = useState(false);

  // Pierwsze 4 kategorie zawsze widoczne
  const visibleCategories = showMore ? categoriesData : categoriesData.slice(0, 4);

  return (
    <section className="allegro-categories-section">
      <div className="allegro-categories-container">
        <div className="allegro-categories-grid">
          {visibleCategories.map((category, index) => (
            <div key={index} className="allegro-category-column">
              <h3 className="allegro-category-title">{category.name}</h3>
              <ul className="allegro-category-links">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="allegro-category-link">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="allegro-show-more">
          <button
            className="allegro-show-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'POKAŻ MNIEJ' : 'POKAŻ WIĘCEJ'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Categories;