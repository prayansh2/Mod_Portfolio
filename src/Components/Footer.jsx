import React from "react";
import "../Components/Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h2>Priyanshu Saini</h2>
        <p>Backend-focused developer building reliable APIs and integrations.</p>
      </div>
      <div className="items">
        <h3><Link to="Home" duration={500} smooth={true}>Home</Link></h3>
        <h3><Link to="About" duration={500} smooth={true}>About</Link></h3>
        <h3><Link to="Experience" duration={500} smooth={true}>Experience</Link></h3>
        <h3><Link to="Project" duration={500} smooth={true}>Project</Link></h3>
        <h3><Link to="Contact" duration={500} smooth={true}>Contact</Link></h3>
      </div>
      <span>(c) 2026 Priyanshu Saini. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
