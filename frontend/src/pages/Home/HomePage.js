import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './HomePage.css';
import portrait from "../../assets/images/mrt.jpg";
import Button from "../../components/buttons/Button.js";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Homepage = () => {
    const [isHeroInFocus, setIsHeroInFocus] = useState(true);
    const [isSkillsetInFocus, setIsSkillsetInFocus] = useState(true);
    const [isSkillsInFocus, setIsSkillsInFocus] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Check hero section visibility
            const heroElement = document.querySelector('.hero');
            if (heroElement) {
                const rect = heroElement.getBoundingClientRect();
                setIsHeroInFocus(rect.top >= -100); // true if in focus, false if out of view
            }

            // Check skillset section visibility
            const skillsetElement = document.querySelector('.skillset');
            if (skillsetElement) {
                const rect = skillsetElement.getBoundingClientRect();
                setIsSkillsetInFocus(rect.top >= -100); // true if in focus
            }

            // Check skills section visibility
            const skillsElement = document.querySelector('.skills');
            if (skillsElement) {
                const rect = skillsElement.getBoundingClientRect();
                setIsSkillsInFocus(rect.top >= -100); // true if in focus
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* Hero Section */}
            <motion.div className="hero">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isHeroInFocus ? 1 : 0.2, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="hero_content">
                    <img src={portrait} alt="profile image" className="hero_image"></img>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isHeroInFocus ? 1 : 0.2, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="hero_intro">
                    <h2>
                        Hello! My name is Mikael Ros Tobiasson, a <RoughNotation type="highlight" color="#9644bb" show={true} animationDelay={500} animationDuration={1500} strokeWidth={1}>developer</RoughNotation> from Gothenburg, Sweden
                    </h2>

                    <p>
                        <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={1000} animationDuration={1500}>
                            Passionate</RoughNotation> and <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={2000} animationDuration={1500}>detail-oriented</RoughNotation> backend Java developer looking for new opportunities
                    </p>

                    <p>
                        I studied Java Enterprise Utvecklare at YRGO for 2 years where I learned the fundamentals of Java. Also proficient in <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={3000} animationDuration={1500}>database management
                        </RoughNotation> and several front-end frameworks, I’m dedicated to <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={4000} animationDuration={1500}> delivering secure </RoughNotation>, <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={5000} animationDuration={1500}>maintainable code</RoughNotation> that drives seamless user experiences. Eager to solve technical challenges and contribute to impactful projects within a dynamic development team.
                    </p>
                    <h2>
                        I'm currently looking for a new role as a developer.  <RoughNotation type="circle" color="#dae31c" show={true} animationDelay={1000} animationDuration={1500}>Hire me?
                        </RoughNotation>
                    </h2>
                    <button className="msgBtn"
                        onClick={() => {
                            window.location.href = "mailto:mikaeltobiasson@hotmail.com";
                        }}> Send me a message
                    </button>

                    <button
                        className="msgBtn"
                        onClick={() => {
                            const link = document.createElement("a");
                            link.href = `${process.env.PUBLIC_URL}/CV_Mikael_Ros_Tobiasson.pdf`; // Path to your file in the public folder
                            link.download = "Mikael_Ros_Tobiasson_CV.pdf"; // Specify the filename for the download
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                    >
                        Download CV
                    </button>

                    <button
                        className="msgBtn"
                        onClick={() => {
                            const link = document.createElement("a");
                            link.href = `${process.env.PUBLIC_URL}/Personligt Brev - Mikael Ros Tobiasson.pdf`; // Path to your file in the public folder
                            link.download = "Personligt Brev - Mikael Ros Tobiasson.pdf"; // Specify the filename for the download
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                    >
                        Download Personal Letter
                    </button>


                </motion.div>
            </motion.div >
        </>


    );
}

export default Homepage;
