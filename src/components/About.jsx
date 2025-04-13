import React, { useEffect, useRef, useState } from "react";
import {
  FaRocket,
  FaMobileAlt,
  FaDatabase,
  FaProjectDiagram,
  FaLaptopCode,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaLaptopCode as FaLaptop,
  FaServer,
} from "react-icons/fa";

const About = () => {
  const sectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const [hoveredYear, setHoveredYear] = useState(null);
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  // Timeline nodes data
  const timelineNodes = [
    {
      year: "2019",
      title: "Career Launch",
      desc: "Started my development journey with web technologies",
      icon: <FaRocket />,
    },
    {
      year: "2020",
      title: "Mobile Development",
      desc: "Expanded skills with React Native and Flutter",
      icon: <FaMobileAlt />,
    },
    {
      year: "2021",
      title: "Data Expertise",
      desc: "Advanced into data analysis and visualization",
      icon: <FaDatabase />,
    },
    {
      year: "2022",
      title: "Solution Architect",
      desc: "Leading complex projects with full-stack expertise",
      icon: <FaProjectDiagram />,
    },
    {
      year: "Now",
      title: "Full Stack Mastery",
      desc: "Creating comprehensive solutions across all platforms",
      icon: <FaLaptopCode />,
    },
  ];

  // Automatic highlight animation for years
  useEffect(() => {
    if (hoveredYear !== null) return; // Pause if a year is hovered

    const interval = setInterval(() => {
      setActiveYearIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= timelineNodes.length ? 0 : nextIndex;
      });
    }, 1000); // Change every 1 second

    return () => clearInterval(interval);
  }, [hoveredYear]);

  // Scroll-triggered animation for section header and skills section
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-reveal-text");
        }
      });
    }, observerOptions);

    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-reveal-content");
        }
      });
    }, observerOptions);

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);
    if (skillsSectionRef.current) skillsObserver.observe(skillsSectionRef.current);

    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      if (skillsSectionRef.current) skillsObserver.unobserve(skillsSectionRef.current);
    };
  }, []);

  return (
    <section
      className="bg-white dark:bg-black text-gray-900 dark:text-white py-20 pt-24 relative overflow-hidden"
      id="about"
      ref={sectionRef}
    >
      {/* Background Particles - Fixed Position Across the Page */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, index) => (
          <div
            key={`particle-${index}`}
            className="about-particles"
            style={{
              top: `${10 + (index % 4) * 25}%`,
              left: `${5 + (index % 4) * 25}%`,
              animationDelay: `${index * 1.5}s`,
            }}
          ></div>
        ))}
        {[...Array(6)].map((_, index) => (
          <div
            key={`pattern-${index}`}
            className="about-pattern"
            style={{
              top: `${15 + (index % 3) * 30}%`,
              right: `${10 + (index % 3) * 25}%`,
              animationDelay: `${index * 2}s`,
            }}
          ></div>
        ))}
        <div className="about-gradient"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#601eef] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Turning ideas into exceptional digital experiences
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Journey Timeline and Stats */}
          <div className="lg:w-1/3">
            {/* Timeline */}
            <div className="relative mb-12">
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-[#601eef] opacity-50 timeline-line"></div>
              {timelineNodes.map((node, index) => (
                <div
                  key={index}
                  className={`flex mb-8 journey-node ${
                    hoveredYear === node.year || (!hoveredYear && activeYearIndex === index)
                      ? "active"
                      : ""
                  }`}
                  onMouseEnter={() => setHoveredYear(node.year)}
                  onMouseLeave={() => setHoveredYear(null)}
                >
                  <div className="flex-shrink-0 w-8 h-8 relative">
                    <div
                      className={`w-4 h-4 rounded-full border-2 node-dot ${
                        hoveredYear === node.year || (!hoveredYear && activeYearIndex === index)
                          ? "bg-[#601eef] border-[#601eef] glow"
                          : "bg-white border-[#601eef]"
                      } absolute top-1/2 transform -translate-y-1/2 left-2`}
                    ></div>
                    <span
                      className={`absolute left-0 top-1/2 transform -translate-y-1/2 text-sm font-semibold node-year ${
                        hoveredYear === node.year || (!hoveredYear && activeYearIndex === index)
                          ? "text-[#601eef] glow"
                          : "text-gray-500"
                      }`}
                    >
                      {node.year}
                    </span>
                  </div>
                  <div className="ml-12 flex-1">
                    <div
                      className={`node-content bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm ${
                        hoveredYear === node.year || (!hoveredYear && activeYearIndex === index)
                          ? "border-l-4 border-[#601eef]"
                          : ""
                      }`}
                    >
                      <div className="flex items-center">
                        <div
                          className={`node-icon text-xl mr-4 ${
                            hoveredYear === node.year || (!hoveredYear && activeYearIndex === index)
                              ? "text-[#601eef]"
                              : "text-gray-500"
                          }`}
                        >
                          {node.icon}
                        </div>
                        <div className="node-details">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {node.title}
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300">
                            {node.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "50+", label: "Projects Completed" },
                { value: "10+", label: "Happy Clients" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 shadow-sm dark:bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 text-center"
                >
                  <h3 className="text-2xl font-bold text-[#601eef] mt-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column - Tech Bridge */}
          <div className="lg:w-1/3 flex justify-center items-center -mt-12">
            <div className="relative tech-bridge">
              <div className="bridge-connector"></div>
              <div className="w-48 h-48 relative tech-orbit">
                {[
                  { icon: <FaJs />, className: "tech-ball js" },
                  { icon: <FaReact />, className: "tech-ball react" },
                  { icon: <FaNodeJs />, className: "tech-ball node" },
                  { icon: <FaPython />, className: "tech-ball py" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`absolute w-12 h-12 bg-[#601eef] text-white rounded-full flex items-center justify-center ${tech.className}`}
                    style={{
                      animationDelay: `${index * 0.5}s`,
                    }}
                  >
                    {tech.icon}
                  </div>
                ))}
                <div className="absolute inset-0 border-2 border-[#601eef] opacity-20 rounded-full"></div>
              </div>
              <div className="bridge-connector"></div>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className="lg:w-1/3" ref={skillsSectionRef}>
            <div className="mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                I'm a creative{" "}
                <span className="text-[#601eef] font-semibold">
                  Full Stack Developer
                </span>{" "}
                and{" "}
                <span className="text-[#601eef] font-semibold">
                  Data Analyst
                </span>{" "}
                with a focus on building 
                modern and responsive web applications. With a strong foundation 
                in both frontend and backend technologies, I strive to create seamless 
                and efficient user experiences. I have expertise in data analysis, 
                machine learning, web app development, and system automation, and 
                I am continuously learning and applying new technologies to solve real-world problems.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                My journey in tech has equipped me with the expertise to create
                intuitive, scalable, and high-performance applications. I thrive
                in collaborative environments and enjoy turning complex
                challenges into streamlined solutions.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Technical Expertise
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    category: "Frontend",
                    icon: <FaLaptop className="text-[#601eef] text-2xl" />,
                    skills: [
                      "JavaScript",
                      "React.js",
                      "Angular",
                      "Vue.js",
                      "Next.js",
                    ],
                  },
                  {
                    category: "Backend",
                    icon: <FaServer className="text-[#601eef] text-2xl" />,
                    skills: ["Node.js", "Python", "Django", "Flask", "PHP"],
                  },
                  {
                    category: "Mobile",
                    icon: <FaMobileAlt className="text-[#601eef] text-2xl" />,
                    skills: ["React Native", "Flutter"],
                  },
                  {
                    category: "Data",
                    icon: <FaDatabase className="text-[#601eef] text-2xl" />,
                    skills: ["MongoDB", "MySQL", "PostgreSQL", "Tableau"],
                  },
                ].map((category, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 shadow-sm dark:bg-gray-800 px-6 py-4 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
                  >
                    <div className="flex items-center mb-3">
                      <div className="mr-2">{category.icon}</div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {category.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-[#601eef] hover:text-white transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Bars */}
            <div className="mt-8 space-y-4">
              {[
                { skill: "HTML & CSS", width: "w-11/12", color: "bg-pink-500" },
                { skill: "React JS", width: "w-10/12", color: "bg-[#601eef]" },
                { skill: "Node JS", width: "w-7/12", color: "bg-yellow-500" },
                { skill: "Python", width: "w-11/12", color: "bg-red-500" },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <label className="w-2/12 text-sm font-semibold text-gray-900 dark:text-white">
                    {item.skill}
                  </label>
                  <div className="grow bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                    <div
                      className={`${item.color} h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 ${item.width}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;