import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './HomePage.css';
import portrait from "../../assets/images/mrt.jpg";
import { RoughNotation } from "react-rough-notation";

const Homepage = () => {
    const [isHeroInFocus, setIsHeroInFocus] = useState(true);
    const [expandedSection, setExpandedSection] = useState('java');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

                const threshold = isMobile ? -300 : -100;
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

    const sections = [
        {
            id: 'java',
            name: 'Java',
            description: "Java is my primary language and the one I have most experience with. I always thrive to produce secure and scaleable code to the best of my ability. Either if it's creating new API's or managing existing ones. I prosper especially in a challenge and often try to think outside the box to tackle any obstacle in my way. With a great attention to detail, maybe I am the one to solve your problems?"},
        {
            id: 'javascript',
            name: 'JavaScript',
            description: "I have a good knowledge of JavaScript and it's something I've worked quite a lot with and something I enjoy. Even here I always try to produce high-quality code that is secure and manageable but at the same time bring life to a webpage and give the user the best experience possible."
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
            description: 'This is text about SQL. SQL (Structured Query Language) is a language used for managing and querying relational databases. It allows developers to create, update, and manipulate data stored in database tables.'
        },
        {
            id: 'docker',
            name: 'Docker',
            description: 'This is text about Docker. Docker is an open-source platform used for developing, shipping, and running applications inside containers. It allows developers to package applications and their dependencies into a standardized unit, ensuring consistency across environments.'
        },
        {
            id: 'typescript',
            name: 'TypeScript',
            description: 'This is text about TypeScript. TypeScript is a superset of JavaScript that adds static typing to the language. It helps catch errors early during development and provides better tooling for large-scale applications.'
        },
    ];


    return (
        <>
            <motion.div className="hero">
                <motion.div
                    className="hero_content"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isHeroInFocus ? 1 : 0.2, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img src={portrait} alt="profile image" className="hero_image"></img>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isHeroInFocus ? 1 : 0.2 , scale: 1 }}
                    transition={{ duration: 1 }}
                    className="hero_intro">
                    <h2>
                        Hello! My name is Mikael Ros Tobiasson, a <RoughNotation type="highlight" color="#9644bb" show={true} animationDelay={1000} animationDuration={1500} strokeWidth={1}>developer</RoughNotation> from Gothenburg, Sweden
                    </h2>

                    <p>
                        <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={1500} animationDuration={1500}>
                            Passionate</RoughNotation> and <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={2000} animationDuration={1500}>detail-oriented</RoughNotation> backend Java developer looking for new opportunities
                    </p>

                    <p>
                        I studied Java Enterprise Utvecklare at YRGO for 2 years where I learned the fundamentals of Java. Also proficient in <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={3000} animationDuration={1500}>database management
                        </RoughNotation> and several front-end frameworks, I’m dedicated to <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={4000} animationDuration={1500}> delivering secure </RoughNotation>, <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={5000} animationDuration={1500}>maintainable code</RoughNotation> that drives seamless user experiences. Eager to solve technical challenges and contribute to impactful projects within a dynamic development team.
                    </p>
                    <h2>
                        I'm currently looking for a new role as a developer.  <RoughNotation type="circle" color="#dae31c" show={true} animationDelay={1000} animationDuration={1500}>Hire me?</RoughNotation>
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

        </>
    );
}

export default Homepage;
