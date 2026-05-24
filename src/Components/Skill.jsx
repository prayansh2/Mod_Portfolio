import React from "react";
import "./Skill.css";
import sk from "../images/sk.png";
import { FaAws, FaDocker, FaJava, FaJs, FaNodeJs } from "react-icons/fa";
import { SiKubernetes, SiMongodb, SiMysql, SiNginx, SiRedis, SiSpringboot } from "react-icons/si";

const skills = [
  {
    title: "Backend APIs",
    detail: "REST services, API connectors, request routing, validation, authentication, and clean service layers.",
    tools: ["Node.js", "Express", "Spring Boot", "REST"],
    score: "92%",
  },
  {
    title: "Integrations",
    detail: "Third-party sync workflows with OAuth, webhooks, retries, and failure handling for reliable systems.",
    tools: ["NetSuite", "Xero", "OAuth", "Webhooks"],
    score: "88%",
  },
  {
    title: "Databases",
    detail: "Schema design, aggregation queries, version tracking, ledgers, and high-volume activity handling.",
    tools: ["MySQL", "MongoDB", "Redis", "JPA"],
    score: "86%",
  },
  {
    title: "DevOps Basics",
    detail: "Deploying backend services with reverse proxy setup, process management, containers, and cloud hosting.",
    tools: ["Docker", "Nginx", "AWS EC2", "PM2"],
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
        <span>Backend toolkit</span>
        <h2>Skills for APIs, integrations, databases, and deployments.</h2>
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
              <div className="skills-logo" key={`${item.title}-${index}`}>
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
