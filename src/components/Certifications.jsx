import { portfolioData } from "../data/portfolioData";

const Certifications = () => {
  return (
    <div className="certifications-container">
      {portfolioData.certifications.map((cert, index) => (
        <div key={index} className="certification-card">
          {cert}
        </div>
      ))}
    </div>
  );
};

export default Certifications;
