import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6 px-6 md:px-20 mt-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
       
        <div>
          <img src={logo} alt="Logo" className="h-14 mb-4" />
          <p className="text-sm text-gray-400">
            Empowering families with compassionate care and dedicated carers. We're here when you need us most.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-[#b04123] hover:underline ${
                  isActive ? 'text-[#b04123] underline' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-[#b04123] hover:underline ${
                  isActive ? 'text-[#b04123] underline' : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-[#b04123] hover:underline ${
                  isActive ? 'text-[#b04123] underline' : ''
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `hover:text-[#b04123] hover:underline ${
                  isActive ? 'text-[#b04123] underline' : ''
                }`
              }
            >
              Resources
            </NavLink>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400 mb-1">Email: support@careexample.com</p>
          <p className="text-sm text-gray-400 mb-1">Phone: +1 (800) 123-4567</p>
          <p className="text-sm text-gray-400">Mon–Fri: 9:00 AM – 6:00 PM</p>
        </div>
      </div>

      
      <div className="text-center text-sm text-gray-400 mt-10 border-t pt-4">
        © {new Date().getFullYear()} CareCiver. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
