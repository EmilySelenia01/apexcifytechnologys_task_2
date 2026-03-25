import React, { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../assets/css/EducationExperience.css";

function EducationExperience() {
  const educationItems = useMemo(
    () => [
      {
        role: "Bachelor's Degree in Business Informatics",
        date: "2025",
        place: "University of Costa Rica, Pacific Campus",
        description:
          "Focused on information technology, business process analysis, and software development. Graduated in 2025."
      },
      {
        role: "Certificate in AI Development Initiation",
        date: "2026",
        place: "Big School Academy",
        description:
          "Introductory certification in AI development foundations, including core concepts, practical use cases, and applied tools for modern software solutions."
      },
      {
        role: "English for IT: Describing and Comparing",
        date: "2026",
        place: "Cisco",
        description:
          "Focused on technical English for IT environments, improving communication for describing systems, comparing solutions, and collaborating in global teams."
      },
      {
        role: "Microsoft Azure Fundamentals",
        date: "2026",
        place: "Udemy",
        description:
          "Certification covering cloud fundamentals, core Azure services, pricing, and governance best practices."
      },
      {
        role: "Object-Oriented Programming (OOP)",
        date: "2025",
        place: "Alura",
        description:
          "Comprehensive training in OOP principles, design practices, and maintainable software architecture."
      },
      {
        role: "Backend-Focused Programming",
        date: "2025",
        place: "Alura",
        description:
          "Specialization in backend systems, APIs, and development methodologies for production-ready services."
      }
    ],
    []
  );

  const experienceItems = useMemo(
    () => [
      {
        role: "Freelance - Full Stack Developer",
        date: "2026 - Present",
        place: "Remote",
        description:
          "Full stack development with TypeScript, delivering complete web solutions using the MERN stack, cloud deployment, and modular architecture patterns."
      },
      {
        role: "Internship - Backend Developer",
        date: "2025",
        place: "Zeytol Company | Remote",
        description:
          "Built REST APIs with Java and Spring Boot, collaborated on Google API integrations, modeled PostgreSQL data, and supported deployment workflows."
      }
    ],
    []
  );

  const [activeEducation, setActiveEducation] = useState(0);
  const totalEducation = educationItems.length;
  const activeEducationItem = educationItems[activeEducation];

  const goPrevEducation = () => {
    setActiveEducation((prev) => (prev - 1 + totalEducation) % totalEducation);
  };

  const goNextEducation = () => {
    setActiveEducation((prev) => (prev + 1) % totalEducation);
  };

  return (
    <section className="edu-exp-bg" id="education-experience">
      <h2 className="edu-exp-title">
        <span>EDUCATION</span> &amp; <span>EXPERIENCE</span>
      </h2>
      <div className="edu-exp-grid">
        <div className="edu-exp-column edu-exp-column-education">
          <h3 className="edu-exp-heading">Education</h3>
          <div className="edu-exp-panel">
            <div className="edu-exp-carousel-controls">
              <button
                type="button"
                className="edu-exp-carousel-btn"
                onClick={goPrevEducation}
                aria-label="Previous education item"
              >
                <FaChevronLeft />
              </button>
              <span className="edu-exp-carousel-count">
                {activeEducation + 1} / {totalEducation}
              </span>
              <button
                type="button"
                className="edu-exp-carousel-btn"
                onClick={goNextEducation}
                aria-label="Next education item"
              >
                <FaChevronRight />
              </button>
            </div>

            <article
              className="edu-exp-carousel-card"
              aria-live="polite"
              key={`${activeEducationItem.role}-${activeEducationItem.date}`}
            >
              <div className="edu-exp-role">
                {activeEducationItem.role}
                <span className="edu-exp-date"> | {activeEducationItem.date}</span>
              </div>
              <div className="edu-exp-place">{activeEducationItem.place}</div>
              <div className="edu-exp-desc">{activeEducationItem.description}</div>
            </article>

            <div className="edu-exp-carousel-dots">
              {educationItems.map((item, index) => (
                <button
                  type="button"
                  key={`${item.role}-dot`}
                  className={`edu-exp-dot-btn ${index === activeEducation ? "is-active" : ""}`}
                  onClick={() => setActiveEducation(index)}
                  aria-label={`Go to education item ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="edu-exp-column edu-exp-column-experience">
          <h3 className="edu-exp-heading">Experience</h3>
          <div className="edu-exp-experience-list">
            {experienceItems.map((item) => (
              <article className="edu-exp-item" key={`${item.role}-${item.date}`}>
                <div className="edu-exp-details">
                  <div className="edu-exp-role">
                    {item.role}
                    <span className="edu-exp-date"> | {item.date}</span>
                  </div>
                  <div className="edu-exp-place">{item.place}</div>
                  <div className="edu-exp-desc">{item.description}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationExperience;