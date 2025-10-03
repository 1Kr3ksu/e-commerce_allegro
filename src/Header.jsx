import './App.css'
function Header() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-logo">
            <img src="/allegro.png" alt="Logo" />
          </div>
          <div className='navbar-search'>
            <input type="text" placeholder="Czego szukasz?" />
            <label for="category">Wszystkie kategorie</label>
            <select id="category" name="category">
              <option value="all">Wszystkie kategorie</option>
              <option value="electronics">Elektronika</option>
              <option value="fashion">Moda</option>
              <option value="home">Dom i ogród</option>
              <option value="sports">Sport i rekreacja</option>
              <option value="toys">Zabawki</option>
              <option value="motors">Motoryzacja</option>
            </select>
            <button type="submit">Szukaj</button>
          </div>
          <div className="navbar-links">
            <button>Zaloguj się</button>
          </div>
        </nav>
      </header>
    </>
  )
}
export default Header