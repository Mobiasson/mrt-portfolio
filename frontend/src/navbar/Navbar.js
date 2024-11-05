import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LinkedinLogo } from '../assets/images/linkedin-logo.svg';
import { ReactComponent as GithubLogo } from '../assets/images/github-logo.svg';
import { motion } from 'framer-motion';
import './Navbar.css';


const Navbar = () => {

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
        >
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} className="navbar-logo">
                <NavLink to="/homepage" activeClassName="active">
                    MRT</NavLink>

            </motion.div>
            <ul className="navbar-links">
                <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <NavLink to="/homepage" activeClassName="active">
                        .home()
                    </NavLink>
                </motion.li>

                <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <NavLink to="/about-me" activeClassName="active">
                        .aboutMe()
                    </NavLink>
                </motion.li>

                <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <a href="https://www.linkedin.com/in/mikael-ros-tobiasson-3b632a243/" title='LinkedIn' target='_blank' rel="noopener noreferrer">
                        <LinkedinLogo className="linkedinLogo" />
                    </a>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <a href="https://github.com/Mobiasson" title='GitHub' target='_blank' rel="noopener noreferrer">
                        <GithubLogo className="githubLogo" />
                    </a>
                </motion.li>
            </ul>
        </motion.nav>
    );
}

export default Navbar;
