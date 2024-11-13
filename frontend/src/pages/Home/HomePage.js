import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './HomePage.css';
import portrait from "../../assets/images/mrt.jpg";
import { RoughNotation } from "react-rough-notation";

const Homepage = () => {
    const [isHeroInFocus, setIsHeroInFocus] = useState(true);
    const [expandedSection, setExpandedSection] = useState('java');

    useEffect(() => {
        const handleScroll = () => {
            const heroElement = document.querySelector('.hero');
            if (heroElement) {
                const rect = heroElement.getBoundingClientRect();
                setIsHeroInFocus(rect.top >= -100);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleSection = (sectionId) => {
        setExpandedSection(prevState => prevState === sectionId ? null : sectionId);
    };

    const sections = [
        {
            id: 'java',
            name: 'Java',
            description: 'This is text about Java. Java is a powerful, object-oriented programming language used for a wide range of applications. It is known for its portability, as Java programs can run on any platform with a JVM (Java Virtual Machine).'
        },
        {
            id: 'javascript',
            name: 'JavaScript',
            description: 'This is text about JavaScript. JavaScript is a versatile, high-level programming language that is primarily used for creating interactive web pages. It allows developers to add dynamic behavior, such as animations and form validations, to websites.'
        },
        {
            id: 'react',
            name: 'React',
            description: 'This is text about React. React is a popular JavaScript library for building user interfaces, especially for single-page applications. It enables developers to create reusable UI components and manage application state efficiently.'
        },
        {
            id: 'html',
            name: 'HTML',
            description: 'This is text about HTML. HTML (Hypertext Markup Language) is the standard language for creating web pages. It provides the basic structure of a website, including elements like headings, paragraphs, links, and images.'
        },
        {
            id: 'css',
            name: 'CSS',
            description: 'This is text about CSS. CSS (Cascading Style Sheets) is used to describe the presentation of a document written in HTML. It controls the layout, colors, fonts, and overall visual appearance of web pages.'
        },
        {
            id: 'angular',
            name: 'Angular',
            description: 'This is text about Angular. Angular is a popular framework for building dynamic, single-page web applications. It provides a robust set of tools for developing front-end applications, including two-way data binding and dependency injection.'
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
                    animate={{ opacity: isHeroInFocus ? 1 : 0.2, scale: 1 }}
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
        </>
    );
}

export default Homepage;
