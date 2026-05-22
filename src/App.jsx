import React, {useState , useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from './components/navbar'
import Footer from './components/footer'

import Home from './pages/home'
import Skills from './pages/skills'
import Contact from './pages/contact'
import Work from './pages/work'
import About from './pages/about'



const App = () => {


  return (
      <Router>

        <Navbar />
    
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/work' element={<Work/>} />
          <Route path='/about' element={<About/>} />
        </Routes>

        <Footer />

      </Router>
  )
}

export default App