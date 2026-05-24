import React from "react";
import "./Experience.css";

const experiences = [
  {
    company: "Scrum Labs Pvt Ltd",
    role: "Software Developer Intern",
    location: "Remote",
    duration: "Jun 2025 - Nov 2025",
    stack: ["Backend APIs", "Document systems", "Inventory ledger", "Aggregation"],
    points: [
      "Developed a scalable document view tracking system to monitor per-user and total document views across high-traffic endpoints.",
      "Optimized database aggregation queries to improve response efficiency for large-scale document activity.",
      "Built document history and version control workflows that let users compare, restore, and manage previous versions.",
      "Designed an inventory ledger module with version-based tracking for accurate stock audit trails and transactional changes.",
      "Contributed to production-grade backend architecture focused on scalability, maintainability, and reliable data consistency.",
    ],
  },
  {
    company: "Nuvanta Software Solutions",
    role: "Backend Developer Intern",
    location: "Onsite",
    duration: "Dec 2024 - Apr 2025",
    stack: ["Node.js", "Java", "OAuth", "Webhooks", "ERP"],
    points: [
      "Integrated NetSuite ERP and Xero Accounting platforms to sync invoices, payments, and financial records.",
      "Developed RESTful API connectors for secure third-party communication and automated business workflows.",
      "Implemented OAuth authentication flows and webhook-based event handling for reliable external integrations.",
      "Built retry and failure-handling mechanisms to reduce integration failures during API communication.",
      "Worked in agile sprints on backend feature development, debugging, and peer code reviews.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="Experience" name="Experience" className="experience-section">
      <div className="experience-heading">
        <span>Work experience</span>
        <h2>Backend-heavy internships with real production problems.</h2>
        <p>
          I have worked on document management, ERP integrations, inventory
          ledgers, versioning, and scalable backend workflows in agile teams.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <article className="experience-card" key={experience.company}>
            <div className="experience-index">0{index + 1}</div>
            <div className="experience-main">
              <div className="experience-topline">
                <div>
                  <span>{experience.duration}</span>
                  <h3>{experience.company}</h3>
                  <p>{experience.role}</p>
                </div>
                <strong>{experience.location}</strong>
              </div>

              <div className="experience-stack">
                {experience.stack.map((item) => (
                  <small key={item}>{item}</small>
                ))}
              </div>

              <ul>
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
