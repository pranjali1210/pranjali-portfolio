import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <main className="app">
      <Header />

      <div className="main-area">
        {/* LEFT CARD */}
        <div className="nav-card">
          {["about", "skills", "projects", "education", "certifications"].map(
            (section) => (
              <button
                key={section}
                className={activeSection === section ? "active" : ""}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            )
          )}
        </div>

        {/* RIGHT CARD */}
        <div className="content-card">
          {activeSection === "about" && <About />}
          {activeSection === "skills" && <Skills />}
          {activeSection === "projects" && <Projects />}
          {activeSection === "education" && <Education />}
          {activeSection === "certifications" && <Certifications />}
        </div>
      </div>

      <SocialLinks />
    </main>
  );
}

export default App;
