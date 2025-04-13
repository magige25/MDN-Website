import React from 'react';

const BackendDevelopment = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white py-20 pt-2">
    <div className="container mx-auto px-8 md:px-16 lg:px-24 py-20">
      <h1 className="text-4xl font-bold mb-6 text-[#601eef]">Backend Development</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Backend development involves building the server-side logic, databases, and APIs that power your website or application. 
        We ensure scalability, security, and efficiency in building robust backend systems.
      </p>
      <h2 className="text-2xl font-bold mb-4">Our Backend Development Approach</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Our backend development process focuses on building secure, scalable, and fast APIs and server logic that can efficiently handle 
        user requests and interactions. We use industry-standard technologies and tools to ensure high performance and security.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="text-gray-700 dark:text-gray-300">Database Integration</li>
        <li className="text-gray-700 dark:text-gray-300">API Development (REST, GraphQL)</li>
        <li className="text-gray-700 dark:text-gray-300">Security & Authentication</li>
        <li className="text-gray-700 dark:text-gray-300">Scalability and Performance Optimization</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        We use the latest backend technologies to ensure your application performs seamlessly:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="text-gray-700 dark:text-gray-300">Node.js & Express</li>
        <li className="text-gray-700 dark:text-gray-300">MongoDB & MySQL</li>
        <li className="text-gray-700 dark:text-gray-300">JWT Authentication & OAuth</li>
      </ul>
    </div>
    </div>
  );
};

export default BackendDevelopment;