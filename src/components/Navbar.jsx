import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RiSunLine, RiMoonLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" || !savedTheme;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#601eef] dark:text-[#601eef] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#601eef] after:w-full"
      : "font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#601eef] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-[#601eef] dark:hover:text-[#601eef]";

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-800 dark:bg-gray-800 text-white dark:text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold">
          MDN DevSpace
        </NavLink>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-700"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <RiSunLine size={20} /> : <RiMoonLine size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 dark:bg-gray-800 text-white px-4 pb-4">
          <div className="flex flex-col space-y-4 mt-4">
            <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={toggleMenu}>
              About Me
            </NavLink>
            <NavLink to="/services" className={navLinkClass} onClick={toggleMenu}>
              Services
            </NavLink>
            <NavLink to="/projects" className={navLinkClass} onClick={toggleMenu}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={toggleMenu}>
              Contact
            </NavLink>
            <button
              onClick={() => {
                toggleTheme();
                toggleMenu();
              }}
              className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-700 self-start"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <RiSunLine size={20} /> : <RiMoonLine size={20} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;