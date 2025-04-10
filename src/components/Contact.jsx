import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <div className="bg-black dark:bg-white text-white dark:text-gray-900 py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p className="text-gray-300 dark:text-gray-700">
              I'm open to discussing web development projects or partnership opportunities.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <Link to="mailto:davidmagige1998@gmail.com" className="hover:underline text-gray-300 dark:text-gray-700">
                davidmagige1998@gmail.com
              </Link>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <Link to="tel:+254746771924" className="hover:underline text-gray-300 dark:text-gray-700">
                +254746771924
              </Link>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span className="text-gray-300 dark:text-gray-700">Waiyaki-Way, Nairobi, Kenya</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 dark:bg-white border border-gray-600 dark:border-gray-300 
                  focus:outline-none focus:border-green-400 dark:focus:border-green-500 text-white dark:text-gray-900"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 rounded bg-gray-800 dark:bg-white border border-gray-600 dark:border-gray-300 
                  focus:outline-none focus:border-green-400 dark:focus:border-green-500 text-white dark:text-gray-900"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  className="w-full p-2 rounded bg-gray-800 dark:bg-white border border-gray-600 dark:border-gray-300 
                  focus:outline-none focus:border-green-400 dark:focus:border-green-500 text-white dark:text-gray-900"
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;