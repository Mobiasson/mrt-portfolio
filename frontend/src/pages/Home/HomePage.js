import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./HomePage.css";
import portrait from "../../assets/images/mrt.jpg";
import { RoughNotation } from "react-rough-notation";
import SkillsSection from "../../components/SkillsSection/SkillsSection";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";

const Homepage = () => {
  const [isHeroInFocus, setIsHeroInFocus] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector(".hero_content");
      if (heroElement) {
        const { top } = heroElement.getBoundingClientRect();
        setIsHeroInFocus(top >= (isMobile ? -400 : -100));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const Highlight = ({ children, delay }) => (
    <RoughNotation type="highlight" color="#870da2" show animationDelay={delay} animationDuration={1500}>
      {children}
    </RoughNotation>
  );

  const heroAnimation = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: isHeroInFocus ? 1 : 0.2, scale: 1 },
    transition: { duration: 1 }
  };

  return (
    <div className="scroll-container">
      <motion.div className="hero-container">
        <motion.div className="hero_content" {...heroAnimation}>
          <img src={portrait} alt="profile" className="hero_image" />
          <div className="assignments" />
        </motion.div>
        <motion.div className="hero_intro" {...heroAnimation}>
          <h2>
            Hello! My name is Mikael Ros Tobiasson, a{" "}
            <RoughNotation type="highlight" color="#9644bb" show animationDelay={1000} animationDuration={1500} strokeWidth={1}>
              developer
            </RoughNotation>{" "}
            from Gothenburg, Sweden.
          </h2>
          <RoughNotation type="box" color="#dae31c" show animationDelay={1500} animationDuration={3000}>
            <p>Currently studying .NET development expected to graduate 2027. I'm looking for LIA v.37-v.48 and v.4-v.23. Preferably in the same company both periods with focus on .NET.</p>
          </RoughNotation>
          <p>
            I'm a fullstack-developer looking for new opportunities. I'm proficient in <Highlight delay={1700}> Java </Highlight> , <Highlight delay={2000}> .NET </Highlight>
             and several front-end frameworks. <br/> I'm dedicated to <Highlight delay={2300}> delivering secure </Highlight>and <Highlight delay={2500}>maintainable code</Highlight> that drives seamless user experiences. Eager to solve technical challenges and contribute to impactful projects within a dynamic development team.
          </p>
          <h2>
            I'm currently looking for a new role as a developer.{" "}
            <RoughNotation type="circle" color="#dae31c" show animationDelay={1000} animationDuration={1500}>
              Hire me?
            </RoughNotation>
          </h2>
          <div className="button-container">
            <button className="msgBtn" onClick={() => (window.location.href = "mailto:mikaeltobiasson@hotmail.com")}>
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
      
      <SkillsSection />

      <FeaturedProjects />
    </div>
  );
};

export default Homepage;
