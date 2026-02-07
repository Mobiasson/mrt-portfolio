import React from "react";
import { motion } from "framer-motion";
import "./FeaturedProjects.css";

const projects = [
  {
    id: 1,
    title: "DungeonCrawler",
    description: "DungeonCrawler game for an assignment in school. The game is a 2D top-down dungeon crawler where the player must navigate through procedurally generated levels and defeat enemies.",
    technologies: ["C#"],
    githubUrl: "https://github.com/Mobiasson/Labb2/tree/ef4790936f70792e1599217daf23f9d90321a4f3",
    liveUrl: null,
  },
  {
    id: 2,
    title: "Quizzly",
    description: "This is a Quiz application built in WPF with MVVM architecture. It features a user-friendly interface where users can take quizzes on various topics, track their scores, and view their progress over time.",
    technologies: ["C#", "WPF", "MVVM"],
    githubUrl: "https://github.com/Mobiasson/Labb3_Quizzly",
    liveUrl: null,
  },
  {
    id: 3,
    title: "Insulter",
    description: "WPF application that generates random insults. You can generate in different languages. You can perform CRUD operations on the insults and save them to a database.",
    technologies: ["C#", "WPF", "MongoDB"],
    githubUrl: "https://github.com/Mobiasson/Labb2_Insulter",
    liveUrl: null,
  },
   {
    id: 4,
    title: "JobSter",
    description: "JobSter is an easier way to save job applications. You login with your account and password and it will save your applications. Change status from pending, accepted or rejected. You can also save notes on the application and see all your applications in a nice overview.",
    technologies: ["React", "Java", "Spring Boot", "MongoDB"],
    githubUrl: "https://github.com/Mobiasson/JobSter",
    liveUrl: null,
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
