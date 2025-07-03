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
              `hover:text-[#b04123] hover:underline transition ${
                isActive ? 'text-[#b04123] underline' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-[#b04123] hover:underline transition ${
                isActive ? 'text-[#b04123] underline' : ''
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-[#b04123] hover:underline transition ${
                isActive ? 'text-[#b04123] underline' : ''
              }`
            }
          >
            Contact
          </NavLink>
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
              `hover:text-[#b04123] hover:underline transition ${
                isActive ? 'text-[#b04123] underline' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-[#b04123] hover:underline transition ${
                isActive ? 'text-[#b04123] underline' : ''
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-[#b04123] hover:underline transition ${
                isActive ? 'text-[#b04123] underline' : ''
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

