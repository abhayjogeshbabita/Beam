import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Notification from './Pages/Notification/Notification'
import Navbar from './Pages/Navbar/Navbar'
import Footer from './Pages/Footer/Footer'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import Product from './Pages/Product/Product'
import Shop from './Pages/Shop/Shop'
import Home from './Pages/Home/Home'


const App = () => {
  return (
    <Router>
      <Notification/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pages/Shop" element={<Shop />} />
        <Route path="/Pages/About" element={<About />} />
        <Route path="/Pages/Product" element={<Product />} />
        <Route path="/Pages/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App