import React from "react";
import { motion } from "framer-motion";
import './About.css';

const About = () => {
    return (
        <motion.div className="aboutme-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
        >
            <motion.div className="aboutme-content">

                <h1>.aboutMe()</h1>
                <p>
                    I am a full-stack web developer with a passion for creating beautiful
                    and functional websites. I have experience with JavaScript, React,
                    Node.js, Express, and MongoDB. I am always looking to learn new
                    technologies and improve my skills.
                </p>
            </motion.div>
        </motion.div>
    );
}

export default About;