import React from "react";
import "devicon/devicon.min.css";
import "../assets/css/SkillsCards.css";

function SkillsCards() {
  const skillGroups = [
    {
      title: "Frontend Languages",
      accent: "cyan",
      items: [
        { name: "HTML5", iconClass: "devicon-html5-plain colored" },
        { name: "CSS3", iconClass: "devicon-css3-plain colored" },
        { name: "JavaScript (ES6+)", iconClass: "devicon-javascript-plain colored" },
        { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
        { name: "React", iconClass: "devicon-react-original colored" },
        { name: "React Native", iconClass: "devicon-react-original colored" },
        { name: "Next.js", iconClass: "devicon-nextjs-original" },
        { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original colored" },
        { name: "Sass", iconClass: "devicon-sass-original colored" }
      ]
    },
    {
      title: "Backend Languages",
      accent: "green",
      items: [
        { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
        { name: "Express.js", iconClass: "devicon-express-original" },
        { name: "Java", iconClass: "devicon-java-plain colored" },
        { name: "Spring Boot", iconClass: "devicon-spring-original colored" },
        { name: "Quarkus", iconClass: "devicon-quarkus-plain colored" },
        { name: "Python", iconClass: "devicon-python-plain colored" },
        { name: "Django", iconClass: "devicon-django-plain" },
        { name: ".NET", iconClass: "devicon-dotnetcore-plain colored" },
        { name: "C#", iconClass: "devicon-csharp-plain colored" },
        { name: "ASP.NET Core", iconClass: "devicon-dotnetcore-plain colored" }
      ]
    },
    {
      title: "Databases",
      accent: "violet",
      items: [
        { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
        { name: "MySQL", iconClass: "devicon-mysql-original colored" },
        { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
        { name: "SQLite3", iconClass: "devicon-sqlite-plain colored" },
        { name: "Oracle", iconClass: "devicon-oracle-original colored" },
        { name: "SQL Server", iconClass: "devicon-microsoftsqlserver-plain colored" }
      ]
    },
    {
      title: "Tools & Environment",
      accent: "cyan",
      items: [
        { name: "Git & GitHub", iconClass: "devicon-git-plain colored" },
        { name: "VS Code", iconClass: "devicon-vscode-plain colored" },
        { name: "Postman", iconClass: "devicon-postman-plain colored" },
        { name: "Docker", iconClass: "devicon-docker-plain colored" },
        { name: "Vercel", iconClass: "devicon-vercel-original" },
        { name: "Figma", iconClass: "devicon-figma-plain colored" },
        { name: "Azure Fundamentals", iconClass: "devicon-azure-plain colored" }
      ]
    }
  ];

  return (
    <section className="skills-bg" id="skills">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-subtitle">
        A practical and polished stack across frontend, backend, data, and delivery tools.
      </p>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className={`skills-category-card skills-accent-${group.accent}`}
          >
            <h3>{group.title}</h3>
            <ul className="skills-tech-list">
              {group.items.map((item) => (
                <li key={item.name} className="skills-tech-item">
                  <span className="skills-tech-icon" aria-hidden="true">
                    <i className={item.iconClass} />
                  </span>
                  <span className="skills-tech-name">{item.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsCards;