import React from "react";
import { motion } from "framer-motion";
import './HomePage.css';
import portrait from "../../assets/images/mrt.jpg";
import Button from "../../components/buttons/Button.js";

const Homepage = () => {
    return (
        <>
            <section className="hero">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }} className="hero_content">
                    <img src={portrait} alt="profile image" className="hero_image"></img>
                    <h2><span>Hello!</span> My name is Mikael Ros Tobiasson</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }} className="hero_intro">
                    <h2>Developer from Gothenburg, Sweden</h2>
                    <p>Creating solutions and solving problems</p>
                    <Button text="Send me a message" className="msgBtn" />
                </motion.div>
            </section>
            <section className="skills">
                <div className="backend">
                    <h3>backend</h3>
                </div>
                <div className="frontend">
                    <h3>frontend</h3>
                </div>
                <div className="database">
                    <h3>database</h3>
                </div>
            </section>
        </>
    );
}

export default Homepage;
