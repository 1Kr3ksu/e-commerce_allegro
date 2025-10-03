import { useState } from 'react';

const categoriesData = [
  {
    name: 'Rankingi',
    items: [
      'Ranking ekspresów do kawy do 4000 zł',
      'Ranking ekspresów do kawy do 500 zł',
      'Ranking ekspresów do kawy do 600 zł',
    ],
  },
  {
    name: 'Ostatnio dodane',
    items: [
      'Podręczniki szkolne',
      'Outlet mebli',
      'Najlepsze gadżety i akcesoria do samochodu',
    ],
  },
  {
    name: 'Najczęściej czytane',
    items: [
      'Regeneracja belki skrętnej',
      'Przyprawy i mieszanki indyjskie',
      'Piłka do koszykówki',
    ],
  },
  {
    name: 'Wyjątkowe okazje',
    items: [
      'EA SPORTS FC FIFA 26',
      'Znicze na Wszystkich Świętych',
      'Kalendarz adwentowy z kosmetykami',
    ],
  },
  {
    name: 'Dom i Ogród',
    items: [
      'Casino',
      'Agregat prądotwórczy',
      'Prezent na dzień nauczyciela',
      'Basen ogrodowy',
      'Jacuzzi ogrodowe',
    ],
  },
  {
    name: 'Moda',
    items: [
      'Iphone 17 pro',
      'Labubu',
      'Płaszcze damskie',
      'Sneakersy damskie',
    ],
  },
  {
    name: 'Elektronika',
    items: [
      'Iphone 17',
      'Iphone 15 pro',
      'Iphone 17 pro max',
      'Iphone 13',
      'Air fryer',
      'Radio na baterie',
    ],
  },
  {
    name: 'Motoryzacja',
    items: [
      'Używane przyczepki samochodowe do 750 kg używane',
      'Uchwyt na telefon do samochodu',
      'Focus 2',
      'Tablice rejestracyjne',
    ],
  },
  {
    name: 'Dziecko',
    items: [
      'Dzień kropki',
      'Koszulka w kropki dla chłopca',
      'Koszulka na dzień kropki',
      'Fotel do biurka dla dziecka',
    ],
  },
  {
    name: 'Kultura i rozrywka',
    items: [
      'Odkrywam królestwo boże klasa 2',
      'Moje serce będzie z tobą gdziekolwiek pójdziesz',
    ],
  },
];

function Categories() {
  const [showMore, setShowMore] = useState(false);

  // Pierwsze 4 zawsze widoczne
  const alwaysVisible = categoriesData.slice(0, 4);
  // Reszta po kliknięciu
  const hidden = categoriesData.slice(4);

  return (
    <section className='categories'>
      {alwaysVisible.map(cat => (
        <div key={cat.name}>
          <h4>{cat.name}</h4>
          <ul>
            {cat.items.map(item => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>
      ))}
      {showMore && (
        <div className="footer-categories-row">
          {hidden.map(cat => (
            <div key={cat.name}>
              <h4>{cat.name}</h4>
              <ul>
                {cat.items.map(item => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Ukryj' : 'Pokaż więcej'}
      </button>
    </section>
  );
}

export default Categories;