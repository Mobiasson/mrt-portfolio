import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SkillsSection.css";

const skillsData = [
  { 
    id: "java", 
    name: "Java", 
    level: "Expert",
    description: "Java is my primary language and I would call myself somewhat of a java expert. I always strive to produce secure and scaleable code, and try to keep myself as updated as possible on what's new. Either if you're looking for someone to create smart solutions or create API's, I'm your man!" 
  },
  { 
    id: "csharp", 
    name: "C#", 
    level: "Expert",
    description: "C# is my second primary language and I have a very good knowledge of it. I have used C# in several projects and I really enjoy working with it. I have a good understanding of the .NET ecosystem and I'm always eager to learn more about it." 
  },
  { 
    id: "javascript", 
    name: "JS/TS", 
    level: "Advanced",
    description: "I have worked extensively with both JavaScript and TypeScript in several projects. It's something I feel very comfortable with and find very fun aswell." 
  },
  { 
    id: "git", 
    name: "Git", 
    level: "Advanced",
    description: "Git is something I've worked with every day and with every project. It really is a second language and I feel very comfortable working with Git." 
  },
  { 
    id: "react", 
    name: "React", 
    level: "Advanced",
    description: "I have built several projects with React and what more is there to say. It's an amazing framework to work with and I learn more and more with it every time. Working with React is just a blast in every day possible." 
  },
  { 
    id: "html", 
    name: "HTML", 
    level: "Advanced",
    description: "I've work in many projects with HTML and it really is my second language in many ways." 
  },
  { 
    id: "css", 
    name: "CSS", 
    level: "Advanced",
    description: "I have a background from art and graphic design so I find CSS to be very fun where I can put my artistic skills to use." 
  },
  { 
    id: "angular", 
    name: "Angular", 
    level: "Intermediate",
    description: "I have done a couple of projects in Angular/AngularJS before. My knowledge is not as wide as React but I'm definitely have a working knowledge of it." 
  },
  { 
    id: "sql", 
    name: "SQL", 
    level: "Advanced",
    description: "SQL is my primary database language, used extensively in my studies and projects for database creation and manipulation." 
  },
  { 
    id: "docker", 
    name: "Docker", 
    level: "Advanced",
    description: "Docker is something I've worked with almost every day during my studies, internship and home projects." 
  },
  { 
    id: "scrum", 
    name: "Scrum", 
    level: "Advanced",
    description: "Scrum provides the structure I appreciate, including daily standups and sprint planning. It really is my prefered way of working and I would love to it again." 
  },
  { 
    id: "other", 
    name: "More", 
    level: "Various",
    description: "Other technologies I've worked with include Vue, Bootstrap, MongoDB, Liquibase, DBeaver, Postman, ActiveMQ, Figma, Framer Motion, Ubuntu, and Bash." 
  },
];

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState("java");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: { 
      opacity: 0, 
      y: 10,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const activeSkillData = skillsData.find(skill => skill.id === activeSkill);

  return (
    <div className="skills-container-new">
      <motion.h1 
        className="skills-title-new"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h1>

      <div className="skills-content-wrapper">
        <motion.div 
          className="skills-grid-new"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.id}
              className={`skill-card ${activeSkill === skill.id ? 'active' : ''}`}
              variants={skillItemVariants}
              onClick={() => setActiveSkill(skill.id)}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="skill-card-content">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-level">{skill.level}</span>
              </div>
              <div className="skill-indicator" />
            </motion.div>
          ))}
        </motion.div>

        <div className="skill-description-panel">
          <AnimatePresence mode="wait">
            {activeSkillData && (
              <motion.div
                key={activeSkill}
                className="skill-description-content"
                variants={descriptionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="description-header">
                  <h2>{activeSkillData.name}</h2>
                  <span className="level-badge">{activeSkillData.level}</span>
                </div>
                <p>{activeSkillData.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
