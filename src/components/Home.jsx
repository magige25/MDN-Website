import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-200 dark:bg-black text-gray-900 dark:text-white text-center py-16">
      <img
        src={`${import.meta.env.BASE_URL}assets/images/home-image.JPG`}
        alt="Home Image"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-3xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-[#601eef]">
          Magige David
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        {/* Contact Me Button */}
        <Link
          to="/contact"
          className="button-base contact-button"
        >
          Contact Me
        </Link>

        {/* Resume Button */}
        <Link
          to="/resume"
          className="button-base resume-button"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Home;