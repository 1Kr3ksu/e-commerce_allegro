import { useState } from 'react'

import './App.css'
import Header from './Header'
import Categories from './categories'
import Hero_image from './hero_image'
import Recommendations from './recommendations'
import Carts from './carts'
import Footer from './footer'

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
