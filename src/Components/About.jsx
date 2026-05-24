import React from "react";
import "../Components/About.css";
import abt from "../images/abt.jpg";
import img1 from "../images/bk.jpg";
import le from "../images/le.png";
import hk from "../images/hk.png";

const education = [
  {
    title: "B.Tech",
    place: "Modern Institute of Technology and Research Center",
    meta: "8.0 CGPA",
  },
  {
    title: "Senior Secondary",
    place: "Achiever's Academy",
    meta: "76.4%",
  },
  {
    title: "Secondary",
    place: "Achiever's Academy",
    meta: "74%",
  },
];

const highlights = [
  "Full-stack developer focused on React interfaces and practical backend flows.",
  "Comfortable turning rough ideas into clean, responsive, working products.",
  "Strong debugging mindset with consistent DSA and problem-solving practice.",
];

const About = () => {
  return (
    <section name="About" id="About" className="about-section">
      <div className="about-shell">
        <div className="about-visual">
          <div className="about-image-card">
            <img src={abt} alt="Prayansh portrait" />
            <div className="about-status">
              <span></span>
              Available for projects
            </div>
          </div>
          <div className="about-stat about-stat-one">
            <strong>150+</strong>
            <span>Problems solved</span>
          </div>
          <div className="about-stat about-stat-two">
            <strong>8.0</strong>
            <span>B.Tech CGPA</span>
          </div>
        </div>

        <div className="about-content">
          <span className="about-kicker">About me</span>
          <h2>I build smooth web experiences with clean logic behind them.</h2>
          <p>
            I am Prayansh, a full-stack developer who enjoys building interfaces
            that feel polished and systems that stay understandable. My work sits
            between design detail, React development, backend APIs, and steady
            problem solving.
          </p>

          <div className="about-highlights">
            {highlights.map((item) => (
              <div className="about-highlight" key={item}>
                <i className="fa-solid fa-check"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-lower">
        <article className="about-panel education-panel">
          <div className="panel-heading">
            <span>Learning path</span>
            <h3>Education</h3>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <div className="education-item" key={item.title}>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.place}</p>
                </div>
                <strong>{item.meta}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="about-panel achievement-panel">
          <div className="panel-heading">
            <span>Proof of work</span>
            <h3>Achievements</h3>
          </div>
          <div className="achievement-list">
            <div className="achievement-item">
              <img src={le} alt="" />
              <p>
                Solved 150+ problems on <strong>LeetCode</strong>.
              </p>
            </div>
            <div className="achievement-item">
              <img src={hk} alt="" />
              <p>
                Practiced programming challenges on <strong>HackerRank</strong>.
              </p>
            </div>
          </div>
          <div className="certificate-strip">
            <div>
              <img src={img1} alt="" />
              <span>HackerRank</span>
            </div>
            <div>
              <img src={img1} alt="" />
              <span>Oasis Infobyte</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
