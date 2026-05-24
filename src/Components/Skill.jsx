import React from "react";
import "./Skill.css";
import html from "../images/3.png";
import css from "../images/4.png";
import js from "../images/5.png";
import react from "../images/6.png";
import node from "../images/7.png";
import mongo from "../images/8.png";
import git from "../images/9.png";
import sk from "../images/sk.png";

const skills = [
  {
    title: "Frontend",
    detail: "Responsive React interfaces with clean components, animation, and strong visual hierarchy.",
    tools: ["React", "JavaScript", "CSS", "Framer Motion"],
    score: "92%",
  },
  {
    title: "Backend",
    detail: "API design, authentication flows, database models, and practical full-stack integration.",
    tools: ["Node.js", "Express", "REST", "Auth"],
    score: "84%",
  },
  {
    title: "Database",
    detail: "Schema planning, CRUD logic, query structure, and data-driven application features.",
    tools: ["MongoDB", "Mongoose", "Models", "Data"],
    score: "80%",
  },
  {
    title: "Problem Solving",
    detail: "Algorithm practice and debugging habits that keep builds stable under pressure.",
    tools: ["DSA", "LeetCode", "Debugging", "Git"],
    score: "88%",
  },
];

const marquee = [
  { label: "HTML", icon: "fa-brands fa-html5" },
  { label: "CSS", icon: "fa-brands fa-css3-alt" },
  { label: "JavaScript", icon: "fa-brands fa-js" },
  { label: "React", icon: "fa-brands fa-react" },
  { label: "Node", icon: "fa-brands fa-node-js" },
  { label: "MongoDB", icon: "fa-solid fa-database" },
  { label: "Git", icon: "fa-brands fa-git-alt" },
];

const Skill = () => {
  return (
    <section id="skill" className="skills-showcase">
      <div className="skills-heading">
        <span>My specialisations</span>
        <h2>Skills that turn ideas into working products.</h2>
      </div>

      <div className="skills-stage">
        <div className="skills-portrait">
          <div className="skill-ring skill-ring-one"></div>
          <div className="skill-ring skill-ring-two"></div>
          <img src={sk} alt="Developer working on a laptop" />
          <div className="skill-badge">
            <strong>150+</strong>
            <span>problems solved</span>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.title}>
              <div>
                <span>{skill.title}</span>
                <strong>{skill.score}</strong>
              </div>
              <p>{skill.detail}</p>
              <ul>
                {skill.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="skills-marquee" aria-label="Technology stack">
        <div className="skills-track">
          {[...marquee, ...marquee].map((item, index) => (
            <div className="skills-logo" key={`${item.label}-${index}`}>
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
