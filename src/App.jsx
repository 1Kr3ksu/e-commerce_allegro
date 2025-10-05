import { useState } from 'react'

import './App.css'
import Header from './Header'
import Categories from './Categories'
import Hero_image from './Hero_image'
import Recommendations from './recommendations'
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
