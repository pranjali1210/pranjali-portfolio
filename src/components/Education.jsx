import { portfolioData } from "../data/portfolioData";

const Education = () => {
  if (!portfolioData.education || portfolioData.education.length === 0) {
    return <p>No education data found</p>;
  }

  return (
    <div className="education-container">
      {portfolioData.education.map((edu, index) => (
        <div key={index} className="education-card">
          <h3 className="education-degree">{edu.degree}</h3>

          <p className="education-institution">
            {edu.institution}
          </p>

          <span className="education-duration">
            {edu.duration}
          </span>

          <p className="education-details">
            {edu.details}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Education;
