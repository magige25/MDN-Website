import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Non-sticky upper part of the footer */}
      <div className="bg-black dark:bg-white text-white dark:text-gray-900 py-8">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
            <div className="flex-1 mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Magige</h3>
              <p className="text-gray-400 dark:text-gray-600">
                Full-Stack Developer based in Nairobi, Kenya, specializing in web
                and software development, as well as data analysis.
              </p>
            </div>
            <div className="flex-1 w-full">
              <form className="flex items-center justify-center">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-2 rounded-l-lg bg-gray-800 dark:bg-white border border-gray-600 dark:border-gray-300 
                  focus:outline-none focus:border-green-400 dark:focus:border-green-500 text-white dark:text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                  py-2 rounded-r-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky colored section */}
      <div className="fixed bottom-0 w-full z-50 bg-gray-800 dark:bg-gray-100 border-t border-gray-600 dark:border-gray-300 py-6">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} Mdn Systems. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <Link
              to="https://www.facebook.com/profile.php?id=100068058460983"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-600 dark:bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#601eef]"
            >
              <FaFacebook
                className="text-blue-600 transition-all duration-300"
                size={24}
              />
            </Link>
            <Link
              href="https://x.com/@magige_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-600 dark:bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#601eef]"
            >
              <SiX
                className="text-white dark:text-black transition-all duration-300"
                size={24}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/magige-david-392439239/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-600 dark:bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#601eef]"
            >
              <FaLinkedin
                className="text-blue-700 transition-all duration-300"
                size={24}
              />
            </Link>
            <Link
              href="https://github.com/magige25"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-600 dark:bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#601eef]"
            >
              <FaGithub
                className="text-gray-200 dark:text-gray-800 hover:text-white transition-all duration-300"
                size={24}
              />
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/policy"
              className="text-gray-400 hover:text-[#601eef] dark:text-gray-600 dark:hover:text-[#601eef] transition-all duration-300"
            >
              Privacy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-400 hover:text-[#601eef] dark:text-gray-600 dark:hover:text-[#601eef] transition-all duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;