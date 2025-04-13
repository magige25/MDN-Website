import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" || !savedTheme;
  });

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

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-800 dark:bg-gray-800 text-white dark:text-white py-4">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold">
          MDN Portfolio
        </NavLink>
        <div className="flex items-center space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#601eef] dark:text-[#601eef] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#601eef] after:w-full"
                : "font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#601eef] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-[#601eef] dark:hover:text-[#601eef]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#601eef] dark:text-[#601eef] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#601eef] after:w-full"
                : "font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#601eef] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-[#601eef] dark:hover:text-[#601eef]"
            }
          >
            About Me
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-[#601eef] dark:text-[#601eef] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#601eef] after:w-full"
                : "font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#601eef] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-[#601eef] dark:hover:text-[#601eef]"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-[#601eef] dark:text-[#601eef] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#601eef] after:w-full"
                : "font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#601eef] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-[#601eef] dark:hover:text-[#601eef]"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#601eef] dark:text-[#601eef] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#601eef] after:w-full"
                : "font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#601eef] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-[#601eef] dark:hover:text-[#601eef]"
            }
          >
            Contact
          </NavLink>
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-700"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <RiSunLine size={20} className="text-white" />
            ) : (
              <RiMoonLine size={20} className="text-white" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;