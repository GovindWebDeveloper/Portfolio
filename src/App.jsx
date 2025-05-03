import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Qualifications from "./components/Qualifications.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-gray-800">
              &#123;DevGovind&#125;
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">
                Skills
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">
                Projects
              </a>
              <a
                href="#qualifications"
                className="text-gray-600 hover:text-gray-900"
              >
                Qualifications
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>
            <div className="flex md:hidden">
              <button className="text-gray-600">
                <ChevronDown size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Qualifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; 2025 Govind. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://github.com/GovindWebDeveloper"
                className="hover:text-gray-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/govind-kumar-7a47061a7/"
                className="hover:text-gray-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:govindkumar.file116@gmail.com"
                className="hover:text-gray-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
