import React from 'react';

const WebDesign = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white py-20 pt-2">
    <div className="container mx-auto px-8 md:px-16 lg:px-24 py-20">
      <h1 className="text-4xl font-bold mb-6 text-[#601eef]">Web Design</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Web design is the process of planning and creating the structure and layout of a website. 
        It involves visual design, content production, and user experience considerations. 
        A well-designed website can make a big difference in engaging users and enhancing brand presence.
      </p>
      <h2 className="text-2xl font-bold mb-4">Our Approach to Web Design</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        We focus on creating visually appealing websites that are easy to navigate and provide seamless user experiences. 
        Our approach includes understanding your brand, user goals, and creating a design that meets those needs.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="text-gray-700 dark:text-gray-300">Custom Designs</li>
        <li className="text-gray-700 dark:text-gray-300">Responsive Layouts</li>
        <li className="text-gray-700 dark:text-gray-300">User Experience (UX) Focused</li>
        <li className="text-gray-700 dark:text-gray-300">SEO Optimized</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        We use the latest design tools and frameworks to create responsive, mobile-first websites. 
        Some of the key technologies we use include:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="text-gray-700 dark:text-gray-300">HTML5 & CSS3</li>
        <li className="text-gray-700 dark:text-gray-300">JavaScript & React</li>
        <li className="text-gray-700 dark:text-gray-300">Adobe XD & Figma</li>
      </ul>
    </div>
    </div>
  );
};

export default WebDesign;