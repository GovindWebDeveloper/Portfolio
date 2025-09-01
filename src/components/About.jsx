import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="w-full md:w-1/2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Developer working"
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
          <div className="w-full md:w-1/2">
            <motion.p
              className="text-lg text-gray-600 mb-6"
              variants={itemVariants}
            >
              Hi! I’m a <b>Frontend Developer</b> with a passion for building
              clean, responsive, and user-friendly web applications. I love
              turning complex ideas into elegant solutions that look great and
              work seamlessly across devices. I specialize in <b>React</b>,{" "}
              <b>JavaScript</b>,<b>Tailwind CSS</b>, and <b>HTML/CSS</b>, and
              I’ve worked on a variety of projects — from{" "}
              <b>eCommerce platforms</b> to <b>admin dashboards</b> — always
              focusing on <b>performance</b>, <b>accessibility</b>, and creating
              smooth <b>UI/UX</b>. I’m committed to writing clean, maintainable
              code, learning new tools, and staying updated with the latest
              trends in frontend development. When I’m not coding, you’ll find
              me exploring design inspiration, experimenting with new ideas, or
              sharpening my problem-solving skills. Let’s build something
              amazing together!
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 mb-6"
              variants={itemVariants}
            ></motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              variants={containerVariants}
            >
              <motion.div
                className="bg-gray-100 px-4 py-2 rounded-full cursor-pointer"
                whileHover={{ scale: 1.05, backgroundColor: "#EEF2FF" }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <span className="text-gray-700">🎯 Problem Solver</span>
              </motion.div>
              <motion.div
                className="bg-gray-100 px-4 py-2 rounded-full cursor-pointer"
                whileHover={{ scale: 1.05, backgroundColor: "#EEF2FF" }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <span className="text-gray-700">💡 Creative Thinker</span>
              </motion.div>
              <motion.div
                className="bg-gray-100 px-4 py-2 rounded-full cursor-pointer"
                whileHover={{ scale: 1.05, backgroundColor: "#EEF2FF" }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <span className="text-gray-700">🚀 Fast Learner</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
