import { useState, useEffect } from 'react';
import './Hero_image.css';
const slides = [
  {
    img: 'https://tinyurl.com/yreevpjx',
    text: 'Jak sezonowe obniżki, to łap okazje na jesień',
  },
  {
    img: 'https://cdn.wallpapersafari.com/42/56/or4AOP.jpg',
    text: 'Nowości w elektronice – sprawdź już dziś!',
  },
  {
    img: 'https://tse2.mm.bing.net/th/id/OIP.akNzX6A9kRtHNJJR-6tlLgHaFm?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
    text: 'Wyjątkowe okazje na modę',
  },
  {
    img: 'https://tinyurl.com/2eth7wm5',
    text: 'Dom i ogród – promocje sezonowe',
  },
  {
    img: 'https://m.smedata.sk/api-media/media/image/sme/3/82/8261443/8261443_1200x.jpg?rev=3',
    text: 'Najlepsze gadżety do auta',
  },
];

function Hero_image() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
  <section className="hero-image">
    <div className="hero-image-slide">
      <img src={slides[current].img} alt="Hero" />
    </div>
    <div>{slides[current].text}</div>
    <button onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}>&lt;</button>
    <button onClick={() => setCurrent((current + 1) % slides.length)}>&gt;</button>
    <div>
      {slides.map((_, idx) => (
        <span
          key={idx}
          style={{ margin: 2, cursor: 'pointer', color: idx === current ? 'orange' : 'gray' }}
          onClick={() => setCurrent(idx)}
        >●</span>
      ))}
    </div>
  </section>
);
}

export default Hero_image;