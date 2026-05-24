import React from "react";
import { Link } from "react-scroll";
// import img1 from "../images/1.png";
import hero from "../images/hero.png";
import "../Components/Hero.css";
import Button from "../Small/Button";
import res from "../Small/Priyanshu_updated_cv.pdf";

const Hero = () => {
  const fp = () => {
    const anchor = document.createElement("a");
    anchor.href = res;
    anchor.setAttribute("download", "Priyanshu_Saini_Resume.pdf");
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
          <span className="hero-kicker">Backend developer</span>
          <h1>Priyanshu builds scalable backend systems.</h1>
          <p>
            I focus on reliable APIs, integrations, real-time systems, and
            production-ready backend workflows using Node.js, Java, Spring Boot,
            Redis, Docker, and AWS.
          </p>

          <div className="hero-meta">
            <div>
              <strong>Java</strong>
              <span>Spring Boot</span>
            </div>
            <div>
              <strong>Node</strong>
              <span>APIs</span>
            </div>
            <div>
              <strong>AWS</strong>
              <span>Deploy</span>
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
            <strong>Backend + scale</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
