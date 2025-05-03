import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { image } from "../assets/index";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "An E-Commerce website with integrated with Payment gateway, Cart management using local Storage.",
    image: image.Ecommerce,
    technologies: ["React", "Stripe", "Redux", "API", "Vercel"],
    liveLink: "https://e-commerce-full-web-site.vercel.app/",
    githubLink: "https://github.com/GovindWebDeveloper/ShopSphere",
  },
  {
    title: "E-commerce Platform",
    description:
      "An E-Commerce website with integrated with Payment gateway, Cart management using local Storage.",
    image: image.Ecommerce,
    technologies: ["React", "Stripe", "Redux", "API", "Vercel"],
    liveLink: "https://e-commerce-full-web-site.vercel.app/",
    githubLink: "https://github.com/GovindWebDeveloper/ShopSphere",
  },
  {
    title: "E-commerce Platform",
    description:
      "An E-Commerce website with integrated with Payment gateway, Cart management using local Storage.",
    image: image.Ecommerce,
    technologies: ["React", "Stripe", "Redux", "API", "Vercel"],
    liveLink: "https://e-commerce-full-web-site.vercel.app/",
    githubLink: "https://github.com/GovindWebDeveloper/ShopSphere",
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
            >
              <motion.div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-indigo-600 bg-opacity-0 transition-all"
                  animate={{
                    backgroundColor:
                      hoveredIndex === index
                        ? "rgba(79, 70, 229, 0.2)"
                        : "rgba(79, 70, 229, 0)",
                  }}
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm"
                      whileHover={{ scale: 1.05, backgroundColor: "#EEF2FF" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveLink}
                    className="flex items-center text-indigo-600 hover:text-indigo-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    className="flex items-center text-gray-600 hover:text-gray-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} className="mr-1" /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
