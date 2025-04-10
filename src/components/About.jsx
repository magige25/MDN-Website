import React from "react";
import AboutImage from "../assets/aboutme-image.jpg";

const About = () => {
  return (
    <div className="bg-black dark:bg-white text-white dark:text-gray-900 py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 text-gray-300 dark:text-gray-700">
              "I am a passionate full-stack developer with a focus on building 
              modern and responsive web applications. With a strong foundation 
              in both frontend and backend technologies, I strive to create seamless 
              and efficient user experiences. I have expertise in data analysis, 
              machine learning, web app development, and system automation, and 
              I am continuously learning and applying new technologies to solve real-world problems."
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 dark:bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="reactjs" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 dark:bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="nodejs" className="w-2/12">
                  Node JS
                </label>
                <div className="grow bg-gray-800 dark:bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-7/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="python" className="w-2/12">
                  Python
                </label>
                <div className="grow bg-gray-800 dark:bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
            </div>
            {/* Updated stats section to match Service component styling */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="bg-gray-800 dark:bg-gray-100 px-6 pb-6 rounded-lg hover:shadow-lg 
                transform transition-transform duration-300 hover:scale-105 text-center"
              >
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500 mt-2">
                  3+
                </h3>
                <p className="text-gray-300 dark:text-gray-700">Years Experience</p>
              </div>
              <div
                className="bg-gray-800 dark:bg-gray-100 px-6 pb-6 rounded-lg hover:shadow-lg 
                transform transition-transform duration-300 hover:scale-105 text-center"
              >
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500 mt-2">
                  50+
                </h3>
                <p className="text-gray-300 dark:text-gray-700">Projects Completed</p>
              </div>
              <div
                className="bg-gray-800 dark:bg-gray-100 px-6 pb-6 rounded-lg hover:shadow-lg 
                transform transition-transform duration-300 hover:scale-105 text-center"
              >
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500 mt-2">
                  10+
                </h3>
                <p className="text-gray-300 dark:text-gray-700">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;