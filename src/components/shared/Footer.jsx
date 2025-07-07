import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import care from '../../assets/images/care.jpg';

const Footer = () => {
  return (
    <>
     <div
            className="relative mt-20 mx-6 md:mx-20 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
            style={{ backgroundImage: `url(${care})` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 text-white text-center px-6 py-20">
              <h1 className="text-2xl md:text-4xl font-bold">+ Get Started</h1>
              <h2 className="text-base md:text-2xl mt-2 mb-4 font-semibold">Your Journey Begins Here</h2>
    
              <NavLink to="/contact">
                <button className="bg-blue-950  cursor-pointer  text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
                  Contact Us
                </button>
              </NavLink>
    
              <div className="mt-8 max-w-3xl mx-auto text-sm md:text-base">
                <p>
                  Have questions or need assistance? Our dedicated team is here to help you every step of the way.
                  Reach out today, and let's start a conversation.
                </p>
              </div>
            </div>
          </div>
       
    <footer className="bg-white text-black pt-10 pb-6 px-6 md:px-20 mt-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
       
        <div>
          <img src={logo} alt="Logo" className="h-14 mb-4" />
          <p className="text-sm text-black">
            Empowering families with compassionate care and dedicated carers. We're here when you need us most.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-blue-500 hover:underline ${
                  isActive ? 'text-blue-600 underline' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-blue-500 hover:underline ${
                  isActive ? 'text-blue-600 underline' : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-blue-500 hover:underline ${
                  isActive ? 'text-blue-600 underline' : ''
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                `hover:text-blue-500 hover:underline ${
                  isActive ? 'text-blue-600 underline' : ''
                }`
              }
            >
             FAQs
            </NavLink>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm text-black mb-1">Email: support@careexample.com</p>
          <p className="text-sm text-black mb-1">Phone: +1 (800) 123-4567</p>
          <p className="text-sm text-black mb-1">Mon–Fri: 9:00 AM – 6:00 PM</p>
        </div>
      </div>

      
      <div className="text-center text-sm text-black mt-10 border-t pt-4">
        © {new Date().getFullYear()} CareCiver. All rights reserved.
      </div>
    </footer>
       </>
  )
}

export default Footer
