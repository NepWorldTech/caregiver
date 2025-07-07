import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/logo.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const servicesDropdownTimeout = useRef(null);

  const handleServicesEnter = () => {
    clearTimeout(servicesDropdownTimeout.current);
    setIsServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    servicesDropdownTimeout.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 200);
  };

  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const pagesDropdownTimeout = useRef(null);

  const handlePagesEnter = () => {
    clearTimeout(pagesDropdownTimeout.current);
    setIsPagesDropdownOpen(true);
  };

  const handlePagesLeave = () => {
    pagesDropdownTimeout.current = setTimeout(() => {
      setIsPagesDropdownOpen(false);
    }, 200);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-semibold italic text-lg relative">
          <NavLink to="/" className={({ isActive }) =>
            `hover:text-[#7f91e0] hover:underline transition ${isActive ? 'text-[#6921dd] underline' : ''}`
          }>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) =>
            `hover:text-[#7f91e0] hover:underline transition ${isActive ? 'text-[#6921dd] underline' : ''}`
          }>
            About
          </NavLink>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button className="hover:text-[#7f91e0] hover:underline transition">
              Services
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border rounded-md shadow-lg w-44 z-50">
                <NavLink
                  to="/services"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  onClick={() => setIsServicesDropdownOpen(false)}
                >
                  All Services
                </NavLink>
                <NavLink
                  to="/service-detail"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  onClick={() => setIsServicesDropdownOpen(false)}
                >
                  Service Detail
                </NavLink>
              </div>
            )}
          </div>

          {/* Pages Dropdown */}
          <div
            className="relative"
            onMouseEnter={handlePagesEnter}
            onMouseLeave={handlePagesLeave}
          >
            <button className="hover:text-[#7f91e0] hover:underline transition">
              Pages
            </button>
            {isPagesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border rounded-md shadow-lg w-44 z-50">
                <NavLink
                  to="/teams"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  onClick={() => setIsPagesDropdownOpen(false)}
                >
                  Our Team
                </NavLink>
                <NavLink
                  to="/faqs"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  onClick={() => setIsPagesDropdownOpen(false)}
                >
                  FAQs
                </NavLink>
                <NavLink
                  to="/price"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  onClick={() => setIsPagesDropdownOpen(false)}
                >
                  Pricing
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" className={({ isActive }) =>
            `hover:text-[#7f91e0] hover:underline transition ${isActive ? 'text-[#6921dd] underline' : ''}`
          }>
            Contact
          </NavLink>

          <button className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <NavLink to="/appointment" className={({ isActive }) =>
              `hover:text-[#7f91e0] hover:underline transition ${isActive ? 'text-[#6921dd] underline' : ''}`
            }>
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
          <NavLink to="/" onClick={toggleMenu} className="hover:text-[#7f91e0]">Home</NavLink>
          <NavLink to="/about" onClick={toggleMenu} className="hover:text-[#7f91e0]">About</NavLink>
          <NavLink to="/services" onClick={toggleMenu} className="hover:text-[#7f91e0]">Services</NavLink>
          <NavLink to="/service-detail" onClick={toggleMenu} className="hover:text-[#7f91e0] text-sm">‣ Service Detail</NavLink>

          <NavLink to="/teams" onClick={toggleMenu} className="hover:text-[#7f91e0]">Our Team</NavLink>
          <NavLink to="/faqs" onClick={toggleMenu} className="hover:text-[#7f91e0]">FAQs</NavLink>
          <NavLink to="/price" onClick={toggleMenu} className="hover:text-[#7f91e0]">Pricing</NavLink>

          <NavLink to="/contact" onClick={toggleMenu} className="hover:text-[#7f91e0]">Contact</NavLink>
          <NavLink to="/appointment" onClick={toggleMenu}>
            <button className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm">
              Make Appointment
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




