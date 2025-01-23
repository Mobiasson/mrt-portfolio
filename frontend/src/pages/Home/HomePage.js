import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './HomePage.css';
import portrait from "../../assets/images/mrt.jpg";
import { RoughNotation } from "react-rough-notation";

const Homepage = () => {
    const [isHeroInFocus, setIsHeroInFocus] = useState(true);
    const [expandedSection, setExpandedSection] = useState('java');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const heroElement = document.querySelector('.hero');
            if (heroElement) {
                const rect = heroElement.getBoundingClientRect();

                const threshold = isMobile ? -400 : -100;
                setIsHeroInFocus(rect.top >= threshold);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMobile]);

    const toggleSection = (sectionId) => {
        setExpandedSection(prevState => prevState === sectionId ? null : sectionId);
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const sections = [
        {
            id: 'java',
            name: 'Java',
            description: "Java is my primary language and the one I have most experience with. I always thrive to produce secure and scaleable code to the best of my ability. Either if it's creating new API's or managing existing ones. I prosper especially in a challenge and often try to think outside the box to tackle any obstacle in my way. With a great attention to detail, maybe I am the one to solve your problems?"
        },
        {
            id: 'javascript',
            name: 'JS/TS',
            description: "I have worked extensively with both Javascript and Typescript in several of the projects I have been a part of. It is something I feel comfortable with and would very much like to work with in future projects in one way or another."
        },
        {
            id: 'git',
            name: 'Git',
            description: "I've worked with Git through the years I studied, did my internship and projects at home. It's something I enjoy and feel comfortable. Even if it's just normal version-management or code reviewing."
        },
        {
            id: 'react',
            name: 'React',
            description: "This portfolio is my second React project and I chose React to expand my knowledge as much as possible. I thoroughly enjoy it and I would very much like to work more with it on something bigger. I especially enjoy the component-based architecture to minimize repetitive code and also being easy to debug."
        },
        {
            id: 'html',
            name: 'HTML',
            description: "I also have good knowledge and experience working with HTML. It's a breath of fresh air to visually see what you're creating and something I enjoy a lot."
        },
        {
            id: 'css',
            name: 'CSS',
            description: "I have previous knowledge and experience in the craft of art and colours. I have studied colours in my time as a florist but also in my time drawing. To me it correlates to CSS, knowing what looks beautiful together, but also what doesn't."
        },
        {
            id: 'angular',
            name: 'Angular',
            description: "Angular is something I worked with in my time at Västra Götalandsregionen where I did my LIA. I especially enjoy the two-way data binding approach and is also something I would like to work more with in the future."
        },
        {
            id: 'sql',
            name: 'SQL',
            description: "SQL is the primary db langauge I have used db creation and manipulation. I've used it extensively throughout my studies and projects and is something I feel comfortable with."
        },
        {
            id: 'docker',
            name: 'Docker',
            description: "I would say I have a good understanding of Docker. It is something I have come across all through my studies but also in my LIA and is something I like using."
        },
        {
            id: 'scrum',
            name: 'Scrum',
            description: "As of work methodology, Scrum is the one for me. The daily standups and the sprints is something that makes me feel structured and prepared for every challenge. I'm also knowledgeable in kanban."
        },
        {
            id: 'other',
            name: 'More',
            description: "More tech I worked with: Vue, Boostrap, mongoDB, Liquibase, DBeaver, Postman, activeMQ, Figma, Framer-motion, Ubuntu, Bash. I have also worked a lot with .XSD, .JSON and .XML."

        },

    ];


    return (
        <>
            <div className="scroll-container">
                <motion.div className="hero-container">
                    <motion.div
                        className="hero_content"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: isHeroInFocus ? 1 : 0.2, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <img src={portrait} alt="profile image" className="hero_image"></img>
                    </motion.div>

                    {/* <div id="dev_message">
                        <h2>DEV MESSAGE</h2>
                        <h3>Good to see you here! I'm currently developing, adding and changing new features all the time.</h3>
                        <p>Currently working on: Light/Dark mode. "A fun fact about me" and fixing aboutMe page. 2024-12-02</p>
                        <h3>Mikael Ros Tobiasson</h3>
                    </div> */}

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: isHeroInFocus ? 1 : 0.2, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="hero_intro">
                        <h2>
                            Hello! My name is Mikael Ros Tobiasson, a <RoughNotation type="highlight" color="#9644bb" show={true} animationDelay={1000} animationDuration={1500} strokeWidth={1}>developer</RoughNotation> from Gothenburg, Sweden
                        </h2>

                        {/* <p>
                            <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={1500} animationDuration={1500}>
                                Passionate</RoughNotation> and <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={2000} animationDuration={1500}>detail-oriented</RoughNotation> software developer looking for new opportunities
                        </p> */}

                        <p>
                            I'm a junior software developer looking for new opportunities. I'm also proficient in <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={3000} animationDuration={1500}> SQL
                            </RoughNotation> and several front-end frameworks, I’m dedicated to <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={4000} animationDuration={1500}> 
                            delivering secure </RoughNotation>, <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={5000} animationDuration={1500}>maintainable code</RoughNotation> that drives seamless user experiences. Eager to solve technical challenges and contribute to impactful projects within a dynamic development team.
                        </p>
                        <h2>
                            I'm currently looking for a new role as a    developer.  <RoughNotation type="circle" color="#dae31c" show={true} animationDelay={1000} animationDuration={1500}>Hire me?</RoughNotation>
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
                                link.href = `${process.env.PUBLIC_URL}/CV_Mikael_Ros_Tobiasson.pdf`;
                                link.download = "Mikael_Ros_Tobiasson_CV.pdf";
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
                                link.href = `${process.env.PUBLIC_URL}/Personligt Brev - Mikael Ros Tobiasson.pdf`;
                                link.download = "Personligt Brev - Mikael Ros Tobiasson.pdf";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            Download Personal Letter
                        </button>
                    </motion.div>
                </motion.div >

                <div className="skills-container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="skills-title"
                    >
                        My Skills
                    </motion.h1>

                    <div className="skills">
                        {sections.map(section => (
                            <motion.div
                                key={section.id}
                                id={section.id}
                                className="section"
                            >
                                <motion.h2
                                    onClick={() => toggleSection(section.id)}
                                    initial={{ opacity: 0.5 }}
                                    animate={{ opacity: expandedSection === section.id ? 1 : 0.3 }}
                                    transition={{ duration: 0.7 }}
                                >
                                    {section.name}
                                </motion.h2>

                                <motion.p
                                    key={section.id}
                                    initial={{ opacity: 0, y: 20, scale: 0.5 }}
                                    animate={{
                                        opacity: expandedSection === section.id ? 1 : 0,
                                        y: expandedSection === section.id ? 0 : 20,
                                        scale: expandedSection === section.id ? 1 : 1,
                                    }}
                                    exit={{ opacity: 0, y: 20, scale: 0.5 }}
                                    transition={{
                                        opacity: { duration: 0.3 },
                                        y: { duration: 0.6, ease: "easeInOut" },
                                        scale: { duration: 0.3 }
                                    }}
                                    className="section-description"
                                >
                                    {section.description}
                                </motion.p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="jobs-container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="jobs-title">
                        What I'm looking for
                    </motion.h1>

                    <motion.div className="jobs" onClick={toggleExpand}>
                        <h2>Fullstack Developer</h2>
                        <h2>Software Developer</h2>
                        <h2>BackEnd/FrontEnd -Developer</h2>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Homepage;
