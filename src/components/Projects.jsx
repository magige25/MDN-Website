import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Dairy Products Supply Chain MS",
    technologies: "MERN Stack",
    image: `${import.meta.env.BASE_URL}assets/images/supply-ms.png`,
    github: "https://github.com/magige25",
  },
  {
    id: 2,
    name: "Admin Dashboard App",
    technologies: "MERN Stack",
    image: `${import.meta.env.BASE_URL}assets/images/mdn-dashboard.png`,
    github: "https://github.com/magige25",
  },
  {
    id: 3,
    name: "Book MS",
    technologies: "MERN Stack",
    image: `${import.meta.env.BASE_URL}assets/images/supply-ms.png`,
    github: "https://github.com/magige25",
  },
];

const Projects = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white py-20 pt-24" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg 
              transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.technologies}</p>
              <Link
                to={project.github}
                className="inline-block button text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;