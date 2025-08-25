import { useState } from 'react'
import Hero from './components/Hero'
import Chooseus from './components/Chooseus'
import Product from './components/Products'
import Experiences from './components/Experiences'
import Materials from './components/Materials'
import Reviews from './components/Reviews'
import './index.css'
import Footer from './components/Footer'


function App() {
  

  return (
   <div>
    <Hero/>
    <Chooseus/>
    <Product/>
    <Experiences/>
    <Materials/>
    <Reviews/>
    <Footer/>
   </div>
  )
}

export default App
