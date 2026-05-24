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
  "Backend-focused developer working with Node.js, Java, Spring Boot, REST APIs, and integrations.",
  "Comfortable building document workflows, ERP connectors, inventory ledgers, and real-time services.",
  "Strong debugging mindset with database, API reliability, and deployment-focused problem solving.",
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
            <strong>2</strong>
            <span>Internships</span>
          </div>
        </div>

        <div className="about-content">
          <span className="about-kicker">About me</span>
          <h2>I build backend systems that stay reliable as products grow.</h2>
          <p>
            I am Priyanshu Saini, a backend-focused developer with internship
            experience in document management systems, ERP integrations,
            inventory workflows, API connectors, authentication, webhooks, and
            real-time matching services.
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
