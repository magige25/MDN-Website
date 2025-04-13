import React from 'react';

const DataAnalysis = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white py-20 pt-2">
    <div className="container mx-auto px-8 md:px-16 lg:px-24 py-20">
      <h1 className="text-4xl font-bold mb-6 text-[#601eef]">Data Analysis</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Data analysis involves inspecting, cleaning, transforming, and modeling data to discover useful information, draw conclusions, 
        and support decision-making. With our data analysis services, you can unlock valuable insights to help grow your business.
      </p>
      <h2 className="text-2xl font-bold mb-4">Our Data Analysis Approach</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        We use statistical and machine learning techniques to analyze large datasets and provide actionable insights. 
        Whether you need to analyze customer behavior, business operations, or product performance, we have the expertise to help.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="text-gray-700 dark:text-gray-300">Data Cleaning and Preprocessing</li>
        <li className="text-gray-700 dark:text-gray-300">Statistical Analysis</li>
        <li className="text-gray-700 dark:text-gray-300">Predictive Analytics</li>
        <li className="text-gray-700 dark:text-gray-300">Data Visualization</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Tools and Technologies Used</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        We leverage a range of powerful tools and technologies to perform advanced data analysis:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="text-gray-700 dark:text-gray-300">Python (Pandas, NumPy, Matplotlib)</li>
        <li className="text-gray-700 dark:text-gray-300">R and RStudio</li>
        <li className="text-gray-700 dark:text-gray-300">Power BI & Tableau</li>
      </ul>
    </div>
    </div>
  );
};

export default DataAnalysis;