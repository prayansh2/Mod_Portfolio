import React, { useEffect } from "react";
import "./Op.css";
import bk from "../images/bk.jpg";
import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";
import g1 from "../images/g1.png";

const projects = [
  {
    eyebrow: "Full stack build",
    title: "Blog Application",
    text: "A publishing experience with authentication, post workflows, clean reading pages, and a dashboard made for quick content management.",
    image: bk,
    accent: "#6ee7b7",
    tags: ["React", "Node", "MongoDB", "Auth"],
    stats: ["Admin panel", "CRUD posts", "Responsive UI"],
  },
  {
    eyebrow: "Social interface",
    title: "Reel Profile UI",
    text: "A polished mobile-first social layout focused on profile discovery, media cards, and high-contrast interaction states.",
    image: one,
    accent: "#f9a8d4",
    tags: ["React", "CSS", "Animation", "UI"],
    stats: ["Mobile flow", "Media grid", "Micro motion"],
  },
  {
    eyebrow: "Messaging flow",
    title: "Chat Experience",
    text: "A conversation interface with layered message states, contact actions, and compact UI patterns designed for repeated use.",
    image: two,
    accent: "#93c5fd",
    tags: ["React", "State", "Components", "UX"],
    stats: ["Chat shell", "Reusable parts", "Clean spacing"],
  },
  {
    eyebrow: "Creative product",
    title: "Story Editor",
    text: "A full-screen media editing concept with tool controls, strong framing, and app-like visual hierarchy.",
    image: three,
    accent: "#fde68a",
    tags: ["Frontend", "Motion", "Design", "Prototype"],
    stats: ["Immersive view", "Tool rail", "Touch-first"],
  },
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
        <h2>Where the stack becomes real products.</h2>
        <p>
          A sharper showcase for the work: each card stays focused, uses layered
          movement, and gives recruiters quick signals about the build.
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
