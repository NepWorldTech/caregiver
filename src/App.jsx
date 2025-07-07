import React from 'react'
import Home from './features/Home/Home'
import About from './features/Aboutus/About'
import Contact from './features/Contactus/Contact' 
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Services from './features/Services/Services'
import OurTeam from './features/OurTeam/OurTeam'
import ServiceDetail from './features/Services/ServiceDetail'
import Pages from './features/Pages'
import Pricing from './features/Pricing/Pricing'
import Faqs from './features/Faqs/Faqs'



const App = () => {
  return (
    <>
    <Navbar/>
    <div>
      <Routes>
        <Route path ='/' element={<Home/>}/>
         <Route path ='/about' element={<About/>}/>
         <Route path = '/services' element={<Services/>}/>
         <Route path='/service-detail' element={<ServiceDetail/>}/>
         <Route path='/pages' element={<Pages/>}/>
         <Route path ='/price' element={<Pricing/>}/>
         <Route path='/faqs' element ={<Faqs/>}/>
          <Route path ='/contact' element={<Contact/>}/>
          <Route path ='/teams' element={<OurTeam/>}/>
      </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App

