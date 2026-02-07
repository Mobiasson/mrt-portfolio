import React from "react";
import { motion } from "framer-motion";
import "./FeaturedProjects.css";

const projects = [
  {
    id: 1,
    title: "Microservices API Gateway",
    description: "Built a high-performance API gateway handling 10K+ requests/second with rate limiting, authentication, and service discovery.",
    technologies: ["Node.js", "Redis", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://yourproject.com",
  },
  {
    id: 2,
    title: "Real-time Analytics Pipeline",
    description: "Developed a distributed data processing system for streaming analytics with sub-second latency using Apache Kafka.",
    technologies: ["Python", "Kafka", "PostgreSQL", "TimescaleDB"],
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://yourproject2.com",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.",
    technologies: ["React", "Java", "Spring Boot", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: null, // No live URL for this project
  },
];

const FeaturedProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="projects-section">
      <motion.h1
        className="projects-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </motion.h1>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={projectVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  GitHub →
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Live Demo →
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturedProjects;
