import { portfolioData } from "../data/portfolioData";

const Header = () => {
  return (
    <header className="hero-card">
      <h1>{portfolioData.name}</h1>
      <p className="tech-stack">{portfolioData.title}</p>
      <p className="hero-description">
        Software Engineer focused on building scalable Java applications,
        cloud-native solutions on AWS, and automated CI/CD pipelines.
      </p>
    </header>
  );
};

export default Header;
