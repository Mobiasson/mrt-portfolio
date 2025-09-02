import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./HomePage.css";
import portrait from "../../assets/images/mrt.jpg";
import { RoughNotation } from "react-rough-notation";

const sections = [
    { id: "java", name: "Java", description: "Java is my primary language and I would call myself somewhat of a java expert. I always strive to produce secure and scaleable code, and try to keep myself as updated as possible on what's new. Either if you're looking for someone to create smart solutions or create API's, I'm your man!" },
    { id: "javascript", name: "JS/TS", description: "I have worked extensively with both JavaScript and TypeScript in several projects. It's something I feel very comfortable with and find very fun aswell. " },
    { id: "git", name: "Git", description: "Git is something I've worked with every day and with every project. It really is a second language and I feel very comfortable working with Git." },
    { id: "react", name: "React", description: "I have built several projects with React and what more is there to say. It's an amazing framework to work with and I learn more and more with it every time.Working with React is just a blast in every day possible." },
    { id: "html", name: "HTML", description: "I've work in many projects with HTML and it really is my second language in many ways." },
    { id: "css", name: "CSS", description: "I have a background from art and graphic design so I find CSS to be very fun where I can put my artistic skills to use." },
    { id: "angular", name: "Angular", description: "I have done a couple of projects in Angular/AngularJS before. My knowledge is not as wide as React but I'm definitely have a working knowledge of it." },
    { id: "sql", name: "SQL", description: "SQL is my primary database language, used extensively in my studies and projects for database creation and manipulation." },
    { id: "docker", name: "Docker", description: "Docker is something I've worked with almost every day during my studies, internship and home projects." },
    { id: "scrum", name: "Scrum", description: "Scrum provides the structure I appreciate, including daily standups and sprint planning. It really is my prefered way of working and I would love to it again." },
    { id: "other", name: "More", description: "Other technologies I've worked with include Vue, Bootstrap, MongoDB, Liquibase, DBeaver, Postman, ActiveMQ, Figma, Framer Motion, Ubuntu, and Bash." },
];

const Homepage = () => {
    const [isHeroInFocus, setIsHeroInFocus] = useState(true);
    const [expandedSection, setExpandedSection] = useState("java");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    // const [factIndex, setFactIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const heroElement = document.querySelector(".hero");
            if (heroElement) {
                const rect = heroElement.getBoundingClientRect();
                const threshold = isMobile ? -400 : -100;
                setIsHeroInFocus(rect.top >= threshold);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);

    const toggleSection = (sectionId) => {
        setExpandedSection(prev => (prev === sectionId ? null : sectionId));
    };

    // const changeFact = () => {
    //     setFactIndex(prev => (prev + 1) % facts.length);
    // };

    return (
        <div className="scroll-container">
            <motion.div className="hero-container">

                <motion.div
                    className="hero_content"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isHeroInFocus ? 1 : 0.2, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img src={portrait} alt="profile" className="hero_image" />
                    <div className="assignments">
                <ul> 
                    {/* <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li> */}
                </ul>
            </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isHeroInFocus ? 1 : 0.2, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="hero_intro"
                >
                    <h2>
                        Hello! My name is Mikael Ros Tobiasson, a{" "}
                        <RoughNotation type="highlight" color="#9644bb" show animationDelay={1000} animationDuration={1500} strokeWidth={1}>
                            developer
                        </RoughNotation>{" "}
                        from Gothenburg, Sweden.
                    </h2>

                    <p>Currently studying .NET development expected to graduate 2027.</p>

                    <p>
                        I'm a java developer looking for new opportunities. I'm also proficient in <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={3000} animationDuration={1500}> SQL, HTML, CSS and many more
                        </RoughNotation> and several front-end frameworks, I’m dedicated to <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={4000} animationDuration={1500}>
                            delivering secure </RoughNotation>, <RoughNotation type="highlight" color="#870da2" show={true} animationDelay={5000} animationDuration={1500}>maintainable code</RoughNotation> that drives seamless user experiences. Eager to solve technical challenges and contribute to impactful projects within a dynamic development team.
                    </p>

                    <h2>
                        I'm currently looking for a new role as a developer.{" "}
                        <RoughNotation type="circle" color="#dae31c" show animationDelay={1000} animationDuration={1500}>
                            Hire me?
                        </RoughNotation>
                    </h2>

                    <div className="button-container">
                        <button
                            className="msgBtn"
                            onClick={() =>
                                (window.location.href = "mailto:mikaeltobiasson@hotmail.com")
                            }
                        >
                            Send me a message
                        </button>

                        <a href={`${process.env.PUBLIC_URL}/CV_Mikael_Ros_Tobiasson.pdf`} download>
                            <button className="msgBtn">Download CV</button>
                        </a>

                        <a href={`${process.env.PUBLIC_URL}/Personligt_Brev_Mikael_Ros_Tobiasson.pdf`} download>
                            <button className="msgBtn">Download Personal Letter</button>
                        </a>
                    </div>

                </motion.div>
            </motion.div>

            <div className="skills-container">
                <motion.h1 className="skills-title">My Skills</motion.h1>
                <div className="skills">
                    {sections.map((section) => (
                        <motion.div key={section.id} className="section">
                            <motion.h2 onClick={() => toggleSection(section.id)}>
                                {section.name}
                            </motion.h2>
                            {expandedSection === section.id && <motion.p>{section.description}</motion.p>}
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="jobs-container">
                <motion.h1 className="jobs-title">What I'm looking for</motion.h1>
                <motion.div className="jobs">
                    <h2>Fullstack Developer</h2>
                    <h2>Software Developer</h2>
                    <h2>BackEnd/FrontEnd Developer</h2>
                </motion.div>
            </div>
        </div>
    );
};

export default Homepage;
