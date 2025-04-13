import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
    route: "/services/web-design"
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    route: "/services/frontend"
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    route: "/services/backend"
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
    route: "/services/full-stack"
  },
  {
    id: 5,
    title: "Data Analysis",
    description: "Leveraging data to uncover insights, drive decision-making, and optimize business performance.",
    route: "/services/data-analysis"
  },
];

const Service = () => {
  return (
    <div className="bg-gray-200 dark:bg-black text-gray-900 dark:text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-blue-600 bg-clip-text 
                bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-[#601eef]">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{service.description}</p>
              <Link to={service.route} className="mt-4 inline-block text-blue-600 dark:text-blue-600 hover:text-blue-500 dark:hover:text-blue-700">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;