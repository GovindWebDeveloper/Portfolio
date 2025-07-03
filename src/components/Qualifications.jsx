import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const qualifications = [
  {
    type: "Education",
    items: [
      {
        title: "B.Tech in Computer Science & Engineering",
        institution: "Rajiv Gandhi Vishwavidyalaya, Madhya Pradesh",
        year: "2022-2025",
        description: "Major in Computer Science with focus on Web Technologies",
      },
      {
        title: "Diploma in Computer Science & Engineering",
        institution: "Jharkhand University of Technology, Jharkhand",
        year: "2019-2022",
        description:
          "Major in Computer Science with focus on Web Technologies and computer fundamentals",
      },
      {
        title: "10+2 in Math Science",
        institution: "Jharkhand Academic Council, Ranchi, Jharkhand",
        year: "2019-2022",
        description:
          "Major in Science with focus on Physics, Chemistry, and Mathematics fundamentals",
      },
    ],
  },
  {
    type: "Experience",
    items: [
      {
        title: "Frontend Developer Intern",
        institution: "Nextzen Minds Pvt. Ltd.",
        year: "Jan-2025-Present",
        description:
          "I am contributing to real-world projects like eCommerce platforms and admin panels. I focus on building responsive user interfaces, optimizing performance, and implementing features using React, Redux, and Tailwind CSS, while collaborating with cross-functional teams in an agile environment.",
      },
      {
        title: "Data Analyst Intern",
        institution: "NSK Bearing India Pvt. Ltd.",
        year: "Mar-2024-May-2024",
        description:
          "Completed an internship at NSK Bearings India Pvt. Ltd., where I gained hands-on experience in industrial operations and manufacturing processes. I worked closely with the engineering team, enhancing my understanding of mechanical systems, quality control, and data analysis within a real-world production environment.",
      },
    ],
  },
];

const Qualifications = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="qualifications" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Qualifications
        </motion.h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {qualifications.map((qual) => (
            <motion.div key={qual.type} variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
                {qual.type}
              </h3>
              <div className="space-y-8">
                {qual.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    whileHover={{ y: -5 }}
                    variants={itemVariants}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-medium">{item.title}</h4>
                      <span className="text-gray-500 text-sm">{item.year}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{item.institution}</p>
                    <p className="text-gray-500">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Qualifications;
