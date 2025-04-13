import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 dark:bg-black text-gray-800 dark:text-gray-300">
      <h1 className="text-6xl font-bold text-[#601eef]">404</h1>
      <p className="text-xl mt-4 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-[#601eef] text-white rounded-md hover:bg-indigo-700 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;