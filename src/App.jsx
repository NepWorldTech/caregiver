import React from 'react'
import Home from './features/Home/Home'
import About from './features/Aboutus/About'
import Contact from './features/Contactus/Contact' 
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <div>
      <Routes>
        <Route path ='/' element={<Home/>}/>
         <Route path ='/about' element={<About/>}/>
          <Route path ='/contact' element={<Contact/>}/>
      </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App

