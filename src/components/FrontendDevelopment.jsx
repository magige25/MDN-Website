import React from 'react';

const FrontendDevelopment = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white py-20 pt-2">
    <div className="container mx-auto px-8 md:px-16 lg:px-24 py-20">
      <h1 className="text-4xl font-bold mb-6 text-[#601eef]">Frontend Development</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Frontend development refers to the development of the part of the website or web application that users interact with directly. 
        This includes creating interactive features and ensuring the website looks good on all devices.
      </p>
      <h2 className="text-2xl font-bold mb-4">Our Frontend Development Approach</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        We focus on creating highly interactive, responsive, and accessible frontend solutions using the latest technologies. 
        Our frontend development process includes ensuring compatibility across browsers, performance optimization, and user engagement.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="text-gray-700 dark:text-gray-300">Responsive Design</li>
        <li className="text-gray-700 dark:text-gray-300">Cross-browser Compatibility</li>
        <li className="text-gray-700 dark:text-gray-300">Performance Optimization</li>
        <li className="text-gray-700 dark:text-gray-300">React, Redux, and State Management</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        We use the latest technologies to build fast and responsive web apps:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="text-gray-700 dark:text-gray-300">HTML5, CSS3 & JavaScript</li>
        <li className="text-gray-700 dark:text-gray-300">React.js & Next.js</li>
        <li className="text-gray-700 dark:text-gray-300">Tailwind CSS & Material UI</li>
      </ul>
    </div>
    </div>
  );
};

export default FrontendDevelopment;
