import { Routes, Route } from 'react-router-dom'
// import Hero from './components/Hero'
// import Chooseus from './components/Chooseus'
// import Product from './components/Products'
// import Experiences from './components/Experiences'
// import Materials from './components/Materials'
// import Reviews from './components/Reviews'
import MainLandingPage from './components/MainPage'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Shop from './components/Shop'
import AboutUs from './components/Aboutus'
import Contact from './components/Contactus'
import Navbar from './components/Navbar'
import './index.css'

function App() {
  return (
    <>

      <Navbar />
 
      <Routes>
      

        <Route path="/" element={<MainLandingPage/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App