import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Code, 
  Briefcase, 
  BookOpen, 
  Mail, 
  Instagram, 
  ChevronLeft, 
  ChevronRight, 
  FileText,
  Linkedin
} from 'lucide-react';
import { AuroraBackground } from './components/AuroraBackground';
import { SparklesCore } from './components/SparklesCore';
import { NavBar } from './components/NavBar';
import { ProjectCard } from './components/ProjectCard';
import { cn } from './lib/utils';

function App() {
  const [currentProject, setCurrentProject] = useState(0);
  
  const navItems = [
    { name: 'Home', url: '#home', icon: User },
    { name: 'Skills', url: '#skills', icon: Code },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'About', url: '#about', icon: User },
    { name: 'Education', url: '#education', icon: BookOpen },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  const projects = [
    {
      title: "FlameGuard E-Commerce Platform",
      description: " A sleek fire safety e-commerce site built with React, TypeScript, and Tailwind CSS. Features include user auth, product browsing, cart, and profile management.",
      image: "https://res.cloudinary.com/dgs7wqzhg/image/upload/v1750325668/Flameguard.png.png",
      tags: ["React", "TypeScript", "Tailwind"],
      liveUrl: "https://fire-extinguisher-site.vercel.app",
      githubUrl: "https://github.com/mitchellwanjiru/fireextinguisherproject"
    },
    {
      title: "Study Buddy",
      description: "AI-powered study tool designed to help users enhance their learning experience. It allows users to upload documents, ask questions, generate quizzes, and create flashcards using AI. The app also enables users to select previously uploaded notes from a dropdown list and marks notes as read for easy tracking.",
      image: "https://res.cloudinary.com/dgs7wqzhg/image/upload/v1750332421/Screenshot_2025-06-19_142535_n3utwt.png",
      tags: ["Python", "Streamlit", "Cohere API", "HTML","CSS"],
      liveUrl: "https://learningassistant1.streamlit.app/",
      githubUrl: "https://github.com/mitchellwanjiru/school_project"
    },
    {
      title: "E-Book Website",
      description: "A beautiful website designed for purchasing E-books",
      image: "https://res.cloudinary.com/dgs7wqzhg/image/upload/v1750333119/Screenshot_2025-06-19_143810_mi8e8b.png",
      tags: ["HTML", "CSS", "Javascript"],
      liveUrl: "https://mitchellwanjiru.github.io/docs/",
      githubUrl: "https://github.com/mitchellwanjiru/docs"
    },
    // {
    //   title: "KALRO Landing page",
    //   description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features for motivation.",
    //   image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    //   tags: ["React Native", "Firebase", "Redux", "Expo"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/example/fitness-app"
    // },
    // {
    //   title: "Blockchain Voting System",
    //   description: "Secure and transparent voting system built on blockchain technology ensuring immutable and verifiable elections.",
    //   image: "https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    //   tags: ["Solidity", "Web3.js", "React", "Ethereum"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/example/blockchain-voting"
    // },
    // {
    //   title: "Real Estate Platform",
    //   description: "Comprehensive real estate platform with property listings, virtual tours, and mortgage calculator integration.",
    //   image: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    //   tags: ["Vue.js", "Laravel", "MySQL", "Mapbox"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/example/real-estate"
    // }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <NavBar items={navItems} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AuroraBackground>
          <div className="absolute inset-0 z-0">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1.2}
              particleDensity={50}
              className="w-full h-full"
              particleColor="#8b5cf6"
              speed={0.5}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative z-10 flex flex-col gap-6 items-center justify-center px-4 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative mb-8 mt-20"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dgs7wqzhg/image/upload/v1750335691/profile_zshjob.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-[#0a0a0a] flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </motion.div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30"
              >
                <Instagram className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300 font-medium">@developer.portfolio</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center">
                <span className="gradient-text">
                  Software Developer
                </span>
              </h1>
              
              <p className="font-light text-lg md:text-xl text-gray-300 py-4 max-w-2xl">
                Crafting digital experiences that blend creativity with cutting-edge technology. 
                Specializing in full-stack development, and innovative web solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-8 py-3 font-medium hover:shadow-lg transition-all duration-300"
                >
                  View My Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border border-purple-500/50 text-purple-300 rounded-full px-8 py-3 font-medium hover:bg-purple-500/20 transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AuroraBackground>
      </section>

      {/* Skills & Certifications Section */}
      <section id="skills" className="py-16 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Technologies I work with and <span className="gradient-text">certifications I've earned</span>
            </h2>
          </motion.div>


          <div className="grid md:grid-cols-3 gap-8">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                <Code className="w-5 h-5 text-purple-400" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: "React/Next.js", level: 20 },
                  { name: "TypeScript", level: 30 },
                  { name: "Node.js", level: 10 },
                  { name: "Python", level: 80 },
                  { name: "Java", level: 75 },
                  { name: "Vercel", level: 70 }
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                <FileText className="w-5 h-5 text-purple-400" />
                Certifications
              </h3>
              <div className="space-y-4">
                {[
                  
                  {
                    name: "Angaza Elimu Internet of Things Certification",
                    issuer: "Angaza Elimu x ALX",
                    year: "2024"
                  },
                  
                  {
                    name: "AI Career Essentials Certificate",
                    issuer: "ALX",
                    year: "2024"
                  },
                  {
                    name: "ALX Certified data analyst",
                    issuer: "ALX Africa",
                    year: "2023"
                  },
                  // {
                  //   name: "MongoDB Certified Developer",
                  //   issuer: "MongoDB University",
                  //   year: "2022"
                  // }
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border border-gray-800 rounded-lg p-4 hover:border-purple-500/50 transition-colors"
                  >
                    <h4 className="font-semibold text-white">{cert.name}</h4>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                    <p className="text-xs text-purple-400 font-medium">{cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                <FileText className="w-5 h-5 text-purple-400" />
                Experience
              </h3>
              <div className="space-y-4">
                {[
                  
                  {
                    name: "Attachee",
                    issuer: "Kenya Agricultural and Livestock Research Organization",
                    year: "May - August 2025"
                  },
                  
                  // {
                  //   name: "AI Career Essentials Certificate",
                  //   issuer: "ALX",
                  //   year: "2024"
                  // },
                  // {
                  //   name: "ALX Certified data analyst",
                  //   issuer: "ALX Africa",
                  //   year: "2023"
                  // },
                  // {
                  //   name: "MongoDB Certified Developer",
                  //   issuer: "MongoDB University",
                  //   year: "2022"
                  // }
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border border-gray-800 rounded-lg p-4 hover:border-purple-500/50 transition-colors"
                  >
                    <h4 className="font-semibold text-white">{cert.name}</h4>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                    <p className="text-xs text-purple-400 font-medium">{cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my latest work, featuring innovative solutions and creative implementations
            </p>
          </motion.div>

          {/* Project Slider */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/80 backdrop-blur-sm border border-gray-800 rounded-full flex items-center justify-center hover:bg-black hover:border-purple-500/50 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/80 backdrop-blur-sm border border-gray-800 rounded-full flex items-center justify-center hover:bg-black hover:border-purple-500/50 transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Project Cards Container */}
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex"
                animate={{
                  x: `${-currentProject * 100}%`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="max-w-2xl mx-auto">
                      <ProjectCard {...project} />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    currentProject === index
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  )}
                />
              ))}
            </div>

            {/* Project Counter */}
            <div className="text-center mt-4 text-sm text-gray-400">
              {currentProject + 1} of {projects.length}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm a passionate full-stack developer with over 2 years of experience creating 
              digital solutions that make a difference. I specialize in modern web technologies 
              and love bringing creative ideas to life through clean, efficient code.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { label: "Projects", value: "7+" },
                { label: "Clients", value: "2+" },
                { label: "Experience", value: "2+ Years" },
                { label: "Technologies", value: "15+" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              <span className="gradient-text">Education</span> & Learning
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My academic background and continuous learning journey
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                degree: "Bachelor of Science in Software Development",
                school: "KCA University",
                period: "2022 - 2026",
                description: "Specialized in Full Stack web development and cloud computing.",
                achievements: ["Dean's List", "Research Assistant", "Published 2 papers"]
              },
              {
                degree: " Internet of Things",
                school: "Angaza Elimu",
                period: "2024 - 2024",
                description: "Focused on full-stack development and software architecture. Active member of the Computer Science Society.",
                achievements: ["PCB Design", "Arduino", "Edge Computing"]
              },
              // {
              //   degree: "Full Stack Web Development Bootcamp",
              //   school: "freeCodeCamp",
              //   period: "2020",
              //   description: "Intensive program covering modern web development technologies and best practices.",
              //   achievements: ["Top 5% Graduate", "Capstone Project Award"]
              // }
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      <h4 className="text-lg gradient-text font-semibold mb-2">{edu.school}</h4>
                      <p className="text-gray-400 mb-4">{edu.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-4 py-2 bg-gray-800 rounded-lg text-sm font-medium text-gray-300">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Timeline connector */}
                {index < 2 && (
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-px h-8 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://mitchellwanjiru95@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-8 py-3 font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={16} /> Send Email
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mitchell-wanjiru/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-purple-500/50 text-purple-300 rounded-full px-8 py-3 font-medium hover:bg-purple-500/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Linkedin size={16} /> LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;