import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-screen bg-gray-200 dark:bg-black text-gray-900 dark:text-white text-center py-16 pt-24">
      {/* Animated Image */}
      <motion.img
        src={`${import.meta.env.BASE_URL}assets/images/home-image.JPG`}
        alt="Home Image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />

      {/* Name and Animated Role */}
      <h1 className="text-3xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-[#601eef]">
          Magige David
        </span>
        ,{" "}
        <span className="text-[#601eef]">
          <Typewriter
            words={[
              "Full-Stack Developer",
              "Frontend Engineer",
              "Backend Developer",
              "Tech Explorer",
              "Web Designer",
              "Data Analyst"
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </span>
      </h1>

      {/* Tagline */}
      <p className="mt-2 italic text-[#601eef] text-sm">
        Creating elegant solutions for complex problems.
      </p>

      {/* Description */}
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <Link
          to="/contact"
          className="button-base contact-button gap-2 px-6 py-2 bg-[#601eef] text-white rounded-md hover:bg-[#4a1fc1] transition"
        >
          Contact Me
        </Link>
        <Link
          to="/resume"
          className="button-base resume-button gap-2 px-6 py-2 border border-[#601eef] text-[#601eef] rounded-md hover:bg-[#601eef] hover:text-white transition"
        >
          Resume
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="mt-6 flex justify-center gap-6 text-2xl text-[#601eef]">
        <a href="https://github.com/magige25" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://x.com/magige_" target="_blank" rel="noreferrer">
          <SiX />
        </a>
      </div>

      {/* Tech Stack */}
      <p className="mt-6 text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
        Tech I Use: React • Node.js • MySQL • Tailwind • Express • Python
      </p>
    </div>
  );
};

export default Home;
