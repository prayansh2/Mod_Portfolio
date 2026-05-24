import React from "react";
import { Link } from "react-scroll";
import img1 from "../images/1.png";
import hero from "../images/hero.png";
import "../Components/Hero.css";
import Button from "../Small/Button";
import res from "../Small/prayansh11.pdf";

const Hero = () => {
  const fp = () => {
    const anchor = document.createElement("a");
    anchor.href = res;
    anchor.setAttribute("download", "Prayansh_Resume.pdf");
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const openlink = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <section id="Home" name="Home" className="main hero-section">
      <div className="hero-shell">
        <div className="stext-section hero-copy">
          <span className="hero-kicker">Full stack developer</span>
          <h1>Prayansh builds modern web products.</h1>
          <p>
            I turn ideas into polished React interfaces, practical backend
            flows, and responsive experiences that feel clean from first click.
          </p>

          <div className="hero-meta">
            <div>
              <strong>React</strong>
              <span>Frontend</span>
            </div>
            <div>
              <strong>Node</strong>
              <span>Backend</span>
            </div>
            <div>
              <strong>150+</strong>
              <span>Problems</span>
            </div>
          </div>

          <div className="socials">
            <i className="fa-brands fa-github" onClick={() => openlink("https://github.com/prayansh2")}></i>
            <i className="fa-brands fa-linkedin-in" onClick={() => openlink("https://linkedin.com/in/priyanshu-saini135")}></i>
          </div>

          <div className="button hero-actions">
            <Button icon="fa-solid fa-arrow-down" text="Resume" fun={fp}></Button>
            <Link to="Contact" duration={500} smooth={true}>
              <Button icon="fa-solid fa-paper-plane" text="Contact"></Button>
            </Link>
          </div>
        </div>

        <div className="img-section hero-visual">
          <div className="hero-orbit hero-orbit-one"></div>
          <div className="hero-orbit hero-orbit-two"></div>
          <img src={hero} alt="Prayansh character holding a cupcake" />
          <div className="hero-card hero-card-top">
            <span>Available</span>
            <strong>For new builds</strong>
          </div>
          <div className="hero-card hero-card-bottom">
            <span>Focus</span>
            <strong>Design + code</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
