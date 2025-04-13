import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 dark:bg-gray-800"> {/* Set the background color to match the dark section */}
      {/* Non-sticky upper part of the footer */}
      <div className="bg-white dark:bg-black text-gray-900 dark:text-white py-8">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
            <div className="flex-1 mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Magige</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Full-Stack Developer based in Nairobi, Kenya, specializing in web
                and software development, as well as data analysis.
              </p>
            </div>
            <div className="flex-1 w-full">
              <form className="flex items-center justify-center">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-2 rounded-l-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 
                  focus:outline-none focus:border-[#601eef]  dark:focus:border-green-400 text-gray-900 dark:text-gray-200"
                />
                <button
                  type="submit"
                  className="bg-[#601eef] text-white px-4 
                  py-2 rounded-r-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Dark section */}
      <div className="w-full bg-gray-900 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 py-6">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Mdn Systems. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <Link
              to="https://www.facebook.com/profile.php?id=100068058460983"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FaFacebook
                className="text-[#601eef] transition-all duration-300"
                size={24}
              />
            </Link>
            <Link
              to="https://x.com/@magige_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <SiX
                className="text-[#601eef] transition-all duration-300"
                size={24}
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/magige-david-392439239/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FaLinkedin
                className="text-[#601eef] transition-all duration-300"
                size={24}
              />
            </Link>
            <Link
              to="https://github.com/magige25"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FaGithub
                className="text-[#601eef] transition-all duration-300"
                size={24}
              />
            </Link>
            <Link
              to="https://instagram.com/magige___"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FaInstagram
                className="text-[#601eef] transition-all duration-300"
                size={24}
              />
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/policy"
              className="text-gray-600 hover:text-[#601eef] dark:text-gray-400 dark:hover:text-[#601eef] transition-all duration-300"
            >
              Privacy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-600 hover:text-[#601eef] dark:text-gray-400 dark:hover:text-[#601eef] transition-all duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;