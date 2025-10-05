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
  return (
    <ThemeProvider>
      <Header />
      <Hero_image />
      <Recommendations />
      <Carts />
      <Categories />
      <Footer />
    </ThemeProvider>
  )
}

export default App
