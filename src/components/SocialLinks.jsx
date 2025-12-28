import { portfolioData } from "../data/portfolioData";

const SocialLinks = () => {
  return (
    <section className="social-section">
      <h2>Connect With Me</h2>

      <div className="social-links">
        <a
          href={portfolioData.socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          🔗 LinkedIn
        </a>

        <a
          href={portfolioData.socialLinks.github}
          target="_blank"
          rel="noreferrer"
        >
          💻 GitHub
        </a>

        <a
          href={portfolioData.socialLinks.leetcode}
          target="_blank"
          rel="noreferrer"
        >
          🧠 LeetCode
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;
