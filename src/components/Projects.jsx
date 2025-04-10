import React from "react";
import supplyMSImage from "../assets/supply-ms.png";
import bookMSImage from "../assets/mdn-dashboard.png";

const projects = [
  {
    id: 1,
    name: "Dairy Products Supply Chain MS",
    technologies: "MERN Stack",
    image: supplyMSImage,
    github: "https://github.com/magige25",
  },
  {
    id: 2,
    name: "Admin Dashboard App",
    technologies: "MERN Stack",
    image: bookMSImage,
    github: "https://github.com/magige25",
  },
  {
    id: 3,
    name: "Book MS",
    technologies: "MERN Stack",
    image: supplyMSImage,
    github: "https://github.com/magige25",
  },
];

const Projects = () => {
  return (
    <div className="bg-black dark:bg-white text-white dark:text-gray-900 py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 dark:bg-gray-100 p-6 rounded-lg hover:shadow-lg 
              transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 dark:text-gray-600 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;