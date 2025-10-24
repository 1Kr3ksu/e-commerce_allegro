import { useState } from 'react'

import './styles/global.css';
import './styles/Theme.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './Header'
import Categories from './Categories'
import Hero_image from './Hero_image'
import Recommendations from './Recommendations'
import Carts from './Carts'
import Footer from './Footer'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearch = (term, category) => {
    setSearchTerm(term);
    setSelectedCategory(category);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <ThemeProvider>
      <Header 
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
      />
      <Hero_image />
      <Recommendations />
      <Carts 
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
      />
      <Categories />
      <Footer />
    </ThemeProvider>
  )
}

export default App