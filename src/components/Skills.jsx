import { portfolioData } from "../data/portfolioData";

const Skills = () => {
  return (
    <div className="card-grid">
      {portfolioData.skills.map((skill) => (
        <div key={skill.name} className="skill-card">
          <div className="skill-logo">{skill.logo}</div>
          <div className="skill-name">{skill.name}</div>
          {skill.image && (
            <img
              src={skill.image}
              alt={skill.name}
              className="skill-image"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Skills;
