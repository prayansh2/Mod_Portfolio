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
import { FaAws, FaDocker, FaJava, FaJs, FaNodeJs } from "react-icons/fa";
import { SiKubernetes, SiMongodb, SiMysql, SiNginx, SiRedis, SiSpringboot } from "react-icons/si";

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
  {
    title: "Redis",
    icon: SiRedis,
    color: "#DC382D",
  },
  {
    title: "Docker",
    icon: FaDocker,
    color: "#2496ED",
  },
  {
    title: "Kubernetes",
    icon: SiKubernetes,
    color: "#326CE5",
  },
  {
    title: "AWS",
    icon: FaAws,
    color: "#FF9900",
  },
  {
    title: "Node.js",
    icon: FaNodeJs,
    color: "#339933",
  },
  {
    title: "Nginx",
    icon: SiNginx,
    color: "#009639",
  },
  {
    title: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    title: "Spring Boot",
    icon: SiSpringboot,
    color: "#6DB33F",
  },
  {
    title: "Java",
    icon: FaJava,
    color: "#007396",
  },
  {
    title: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E",
  },
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
          {[...marquee, ...marquee].map((item, index) => {
             const Icon = item.icon;
            return (
              <div className="skills-logo" key={`${item.label}-${index}`}>
              <Icon size={40} style={{ color: item.color }} />
              <span>{item.title}</span>
            </div>
            )
})}
        </div>
      </div>
    </section>
  );
};

export default Skill;
