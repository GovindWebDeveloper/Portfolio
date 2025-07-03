import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "React",
      "JavaScript(ES6)",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
      "Responsive Design",
      "React + Vite",
      "Next.js",
      "Material UI(MUI)",
    ],
    icon: "🎨",
  },
  {
    title: "Backend",
    skills: ["Node.js", "MySQL", "MongoDB", "Express"],
    icon: "⚙️",
  },
  {
    title: "Tools & Others",
    skills: [
      "Git",
      "Github",
      "VS Code",
      "RESTful API",
      "Axios",
      "Agile",
      "Jupyter Notebook",
    ],
    icon: "🛠️",
  },
];

const Skills = () => {
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
    <section id="skills" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">{category.icon}</span>
                <h3 className="text-xl font-semibold text-indigo-600">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm cursor-pointer"
                    whileHover={{ scale: 1.05, backgroundColor: "#EEF2FF" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
