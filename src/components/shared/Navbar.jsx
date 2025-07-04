import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/images/logo.jpg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-semibold italic text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-[#7f91e0] hover:underline transition ${
                isActive ? 'text-[#6921dd] underline' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-[#7f91e0]  hover:underline transition ${
                isActive ? 'text-[#6921dd] underline' : ''
              }`
            }
          >
            About
          </NavLink>
           <NavLink
            to="/services"
            className={({ isActive }) =>
              `hover:text-[#7f91e0] hover:underline transition ${
                isActive ? 'text-[#6921dd] underline' : ''
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/teams"
            className={({ isActive }) =>
              `hover:text-[#7f91e0] hover:underline transition ${
                isActive ? 'text-[#6921dd] underline' : ''
              }`
            }
          >
           Our Team
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-[#7f91e0] hover:underline transition ${
                isActive ? 'text-[#6921dd] underline' : ''
              }`
            }
          >
            Contact
          </NavLink>
          <button className='border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
            <NavLink
            to="/appointment"
            className={({ isActive }) =>
              `hover:text-[#7f91e0] hover:underline transition ${
                isActive ? 'text-[#6921dd] underline' : ''
              }`
            }
          >
            Make Appointment
          </NavLink>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-white font-semibold italic text-lg border-t">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-[#7f91e0] hover:underline transition ${
                isActive ? 'text-[#6921dd] underline' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-[#7f91e0] hover:underline transition ${
                isActive ? 'text-[#6921dd] underline' : ''
              }`
            }
          >
            About
          </NavLink>
           <NavLink
            to="/services"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-[#7f91e0] hover:underline transition ${
                isActive ? 'text-[#6921dd] underline' : ''
              }`
            }
          >
           Services
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-[#7f91e0] hover:underline transition ${
                isActive ? 'text-[#6921dd] underline' : ''
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar

