import React, { useEffect } from "react";
import "./Op.css";
import mcp from "../images/mcp.jpg";
import ecom from "../images/ecom.jpg";
import chatapp from "../images/chatapp.jpg";
import g1 from "../images/g1.png";

const projects = [
  {
    eyebrow: "Protocol tooling",
    title: "MCP Tool Server",
    text: "A custom Model Context Protocol server that exposes structured tools for Claude Desktop with typed schemas, request routing, response formatting, and error recovery.",
    image: mcp,
    accent: "#6ee7b7",
    tags: ["Node.js", "MCP SDK", "Tool schemas", "Claude Desktop"],
    stats: ["Tool registration", "Typed I/O", "Error recovery"],
  },
  {
    eyebrow: "Realtime system",
    title: "Real-Time User Matcher",
    text: "An anonymous chat matching backend using WebSockets and Redis queue management, with dropped-connection recovery and deployment on AWS EC2 behind Nginx.",
    image: chatapp,
    accent: "#93c5fd",
    tags: ["Node.js", "Socket.io", "Redis", "Nginx", "AWS EC2"],
    stats: ["Live matching", "Queue recovery", "PM2 deployment"],
  },
  {
    eyebrow: "Java backend",
    title: "E-Commerce Backend",
    text: "A Spring Boot REST backend with user management, product catalog, cart, orders, JWT authentication, role-based access, validation, pagination, and exception handling.",
    image: ecom,
    accent: "#f9a8d4",
    tags: ["Java", "Spring Boot", "JPA", "MySQL", "JWT"],
    stats: ["15+ REST APIs", "RBAC auth", "Layered architecture"],
  },
  
  // {
  //   eyebrow: "Production workflow",
  //   title: "Document Versioning",
  //   text: "Backend workflows for document view tracking, history, version restore, inventory ledger audit trails, and aggregation-heavy activity endpoints.",
  //   image: three,
  //   accent: "#fde68a",
  //   tags: ["APIs", "Aggregations", "Versioning", "Audit logs"],
  //   stats: ["View tracking", "History restore", "Inventory ledger"],
  // },
];

const Op = () => {
  useEffect(() => {
    const section = document.querySelector(".project-parallax");
    if (!section) return;

    const handleMove = (event) => {
      const rect = section.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3);
      const y = ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3);
      section.style.setProperty("--mx", x);
      section.style.setProperty("--my", y);
    };

    section.addEventListener("pointermove", handleMove);
    return () => section.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <section id="Project" name="Project" className="project-parallax">
      <div className="project-bg-word">PROJECTS</div>
      <div className="project-intro">
        <span>Selected work</span>
        <h2>Backend projects built around scale, reliability, and integrations.</h2>
        <p>
          A focused showcase of API systems, protocol tooling, real-time
          infrastructure, and database-heavy workflows from my resume.
        </p>
      </div>

      <div className="project-stack">
        {projects.map((project, index) => (
          <article
            className="project-panel"
            key={project.title}
            style={{ "--accent": project.accent, "--i": index }}
          >
            <div className="project-copy">
              <span>{project.eyebrow}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <small key={tag}>{tag}</small>
                ))}
              </div>
              <div className="project-actions">
                <a href="https://github.com/prayansh2" target="_blank" rel="noreferrer">
                  <img src={g1} alt="" />
                  Github
                </a>
                <button type="button">
                  Preview
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <div className="project-visual">
              <div className="project-orbit project-orbit-one"></div>
              <div className="project-orbit project-orbit-two"></div>
              <img src={project.image} alt={`${project.title} preview`} />
              <ul className="project-stats">
                {project.stats.map((stat) => (
                  <li key={stat}>{stat}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Op;
