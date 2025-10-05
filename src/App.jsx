import { useState } from 'react'

import './styles/global.css';
import Header from './Header'
import Categories from './Categories'
import Hero_image from './Hero_image'
import Recommendations from './Recommendations'
import Carts from './Carts'
import Footer from './Footer'

function App() {
  return (
    <>
      <Header />
      <Hero_image />
      <Recommendations />
      <Carts />
      <Categories />
      <Footer />
    </>
  )
}

export default App
