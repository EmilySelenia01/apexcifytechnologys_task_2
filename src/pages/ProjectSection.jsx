import React, { useEffect, useState } from "react";
import {
  SiReact,
  SiDotnet,
  SiDjango
} from "react-icons/si";
import { FaGithub, FaExternalLinkAlt, FaDatabase, FaJava } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "../assets/css/ProjectsSection.css";

const projects = [
  {
    logo: SiReact,
    logoClass: "project-logo-cyan",
    title: "Apexcify Showcase Website (Task 1)",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Corporate-style Apexcify website focused on responsive layout, interactive navigation, and polished transitions.",
    github: "https://github.com/EmilySelenia01/ApexcifyTechnologys_Task_1",
    practiceNote:
      "Practice Project for Apexcify Technologies - focused on applying core HTML, CSS, and JavaScript interaction patterns.",
    detailsSummary:
      "Landing experience built for Apexcify with a clean multi-section structure and interactive behavior for a modern brand presence.",
    highlights: [
      "Responsive layout adapted for desktop, tablet, and mobile.",
      "JavaScript-powered interactions such as navigation controls and lightbox flow.",
      "Hover and transition effects to improve perceived quality."
    ]
  },
  {
    logo: SiReact,
    logoClass: "project-logo-violet",
    title: "Personal Portfolio Pro (Task 2)",
    tech: ["React", "JavaScript", "CSS"],
    description:
      "Portfolio web app to showcase skills, projects, resume, and contact details with a responsive and modern UI.",
    github: "https://github.com/EmilySelenia01/apexcifytechnologys_task_2",
    practiceNote:
      "Practice Project for Apexcify Technologies - developed to demonstrate portfolio structure, UI quality, and responsive implementation.",
    detailsSummary:
      "Portfolio developed with React to present professional profile, project highlights, and contact channels in a structured, elegant interface.",
    highlights: [
      "Section-based architecture for About, Skills, Projects, and Experience.",
      "Smooth scrolling and animated interactions for better UX.",
      "Performance-conscious responsive design across breakpoints."
    ]
  },
  {
    logo: FaDatabase,
    logoClass: "project-logo-green",
    title: "Product Listing Explorer (Task 3)",
    tech: ["React", "JavaScript", "CSS"],
    description:
      "Interactive product listing interface with navigation controls, product details, and scalable UI components.",
    github: "https://github.com/EmilySelenia01/ApexcifyTechnologys_Task_3",
    practiceNote:
      "Practice Project for Apexcify Technologies - centered on building dynamic product navigation and reusable UI blocks with React.",
    detailsSummary:
      "Product catalog experience built with reusable React components, focusing on clear item presentation and smooth interaction flows.",
    highlights: [
      "Dynamic product card rendering with title, owner, and price details.",
      "Next/previous product navigation behavior using JavaScript logic.",
      "Prepared structure for filters and animation enhancements."
    ]
  },
  {
    logo: SiReact,
    logoClass: "project-logo-cyan",
    title: "Online Library Management System",
    tech: ["React", "PHP", "Cloud Database"],
    description: "Developed a web platform for managing an online library...",
    github: null,
    detailsSummary:
      "Web platform for book cataloging, member registration, and online lending workflows with clear admin controls.",
    highlights: [
      "Role-based modules for administrators and users.",
      "Centralized catalog and lending lifecycle management.",
      "Clean dashboard-focused UI for daily operations."
    ]
  },
  {
    logo: SiReact,
    logoClass: "project-logo-cyan",
    title: "Art Studio – Web Gallery",
    tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    description: "Interactive web app simulating a digital art gallery...",
    github: "https://github.com/EmilySelenia/Galery_Multi",
    detailsSummary:
      "Interactive digital gallery where visitors can browse artworks, navigate exhibits, and explore a polished visual experience.",
    highlights: [
      "Responsive layouts with emphasis on visual hierarchy.",
      "Animated interactions for a gallery-like feeling.",
      "Modular front-end structure with reusable sections."
    ]
  },
  {
    logo: SiDotnet,
    logoClass: "project-logo-violet",
    title: "FreeConnect – IT Freelance Platform",
    tech: ["Vue.js", ".NET", "SQL Server", "Figma"],
    description: "Built as part of the No Country community, FreeConnect is a web platform connecting IT freelancers...",
    github: "https://github.com/No-Country-simulation/s19-08-n-webapp",
    detailsSummary:
      "Collaborative platform focused on connecting IT freelancers with opportunities through profiles, projects, and matching flows.",
    highlights: [
      "Developed in a multidisciplinary team environment.",
      "Backed by SQL Server with robust data modeling.",
      "End-to-end product flow from design to implementation."
    ]
  },
  {
    logo: SiDjango,
    logoClass: "project-logo-green",
    title: "Pet Adoption System – No Country Community",
    tech: ["React", "Next.js", "Tailwind CSS", "Django", "Python", "MySQL"],
    description: "Developed a web application for managing pet adoption in the No Country community...",
    github: "https://github.com/No-Country-simulation/c21-32-n-python-react",
    detailsSummary:
      "Adoption-focused platform to manage pets, applications, and communication between shelters and adopters.",
    highlights: [
      "Full stack architecture with Django and modern React tools.",
      "Structured workflow for registration and pet follow-up.",
      "Scalable module structure for community growth."
    ]
  },
  {
    logo: FaDatabase,
    logoClass: "project-logo-cyan",
    title: "SQL Server Database Replication",
    tech: ["SQL Server", "Database", "Replication"],
    description: "Implemented database replication using SQL Server, involving a primary and a secondary database...",
    github: null,
    detailsSummary:
      "Replication setup between primary and secondary SQL Server instances to improve data availability and continuity.",
    highlights: [
      "Configured replication topology and synchronization jobs.",
      "Validated consistency with test scenarios.",
      "Documented operational considerations for failover readiness."
    ]
  },
  {
    logo: FaJava,
    logoClass: "project-logo-violet",
    title: "Chess Desktop Application",
    tech: ["Java", "Swing", "OOP"],
    description: "A desktop chess game developed entirely in Java using Swing for GUI...",
    github: null,
    detailsSummary:
      "Desktop chess game implementing core rules, turn management, and a classic interface using Java Swing.",
    highlights: [
      "Object-oriented structure for pieces and movement rules.",
      "Interactive board and game-state updates.",
      "Clean logic separation for maintainability."
    ]
  }
];

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  return (
    <section className="projects-bg" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div className="project-card glass" key={proj.title}>
            <div className="project-logo-wrap" aria-hidden="true">
              <proj.logo className={`project-logo ${proj.logoClass}`} />
            </div>
            <div className="project-body">
              <h5 className="project-name">{proj.title}</h5>
              <div className="badge-row">
                {proj.tech.map((t, i) => (
                  <span className="badge" key={i}>{t}</span>
                ))}
              </div>
              <p className="desc">{proj.description}</p>
              <div className="project-actions">
                {proj.github ? (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-github"
                  >
                    <FaGithub /> GitHub
                  </a>
                ) : (
                  <button className="project-btn project-btn-github" disabled>
                    <FaGithub /> GitHub
                  </button>
                )}

                <button
                  className="project-btn project-btn-details"
                  type="button"
                  onClick={() => setSelectedProject(proj)}
                >
                  <FaExternalLinkAlt /> More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="project-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              <IoClose />
            </button>

            <div className="project-modal-header">
              <span className="project-modal-logo-wrap" aria-hidden="true">
                <selectedProject.logo
                  className={`project-logo ${selectedProject.logoClass}`}
                />
              </span>
              <h3 id="project-modal-title" className="project-modal-title">
                {selectedProject.title}
              </h3>
            </div>

            <div className="project-modal-tech">
              {selectedProject.tech.map((tech) => (
                <span className="badge" key={`${selectedProject.title}-${tech}`}>
                  {tech}
                </span>
              ))}
            </div>

            {selectedProject.practiceNote && (
              <p className="project-modal-practice-note">{selectedProject.practiceNote}</p>
            )}

            <p className="project-modal-description">{selectedProject.detailsSummary}</p>

            <ul className="project-modal-list">
              {selectedProject.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="project-modal-actions">
              {selectedProject.github ? (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn project-btn-github"
                >
                  <FaGithub /> GitHub
                </a>
              ) : (
                <button className="project-btn project-btn-github" disabled>
                  <FaGithub /> GitHub
                </button>
              )}
              <button
                type="button"
                className="project-btn project-btn-details"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;