import { portfolioData } from "../data/portfolioData";

const Projects = () => {
  return (
    <div className="projects-container">
      {portfolioData.projects.map((project) => (
        <div key={project.name} className="project-card">

          <div className="project-header">
            <span className="project-logo">{project.logo}</span>
            <h3 className="project-name">{project.name}</h3>
          </div>

          <p className="project-description">
            {project.description}
          </p>

          {project.technologies && (
            <div className="tech-stack">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          )}

        </div>
      ))}
    </div>
  );
};

export default Projects;
