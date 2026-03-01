import { Link } from "react-router-dom";
import "./About.css";

export function About(): React.JSX.Element {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-content">
          {/* Header */}
          <div className="about-header">
            <h1 className="about-title">
              <span className="gradient-text">About Me</span>
            </h1>
          </div>

          {/* Bio Section */}
          <div className="about-bio">
            <p className="about-bio-text">
              I am a Full Stack Developer with a structured and detail-oriented approach to building stable, modular, and maintainable systems.
              I focus on understanding the broader architecture — from backend APIs to user experience — ensuring every component serves a clear purpose without adding unnecessary complexity.
            </p>
            <p className="about-bio-text">
              I believe good engineering is not about over-engineering, but about finding the right balance between simplicity, performance, and long-term maintainability.
            </p>
            <p className="about-bio-text">
              Through hands-on projects, I have developed strong backend capabilities, including API design, database architecture, security considerations, and performance optimization — while maintaining clear alignment with the frontend.
              I approach development not just as writing code, but as delivering solutions that address real technical and business needs, I view continuous learning as an essential and inseparable part of the profession.
            </p>
          </div>

          {/* Skills Section */}
          <div className="about-skills-section">
            <h3 className="about-skills-title gradient-text">Technologies & Tools</h3>

            {/* Frontend */}
            <div className="about-skills-category">
              <h4 className="about-skills-title">Frontend</h4>
              <ul className="about-skills-list">
                <li className="about-skills-item">React with TypeScript and Vite</li>
                <li className="about-skills-item">Tailwind CSS and Material UI for clean, modular components</li>
                <li className="about-skills-item">Axios and React Router for API communication and routing</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="about-skills-category">
              <h4 className="about-skills-title">Backend</h4>
              <ul className="about-skills-list">
                <li className="about-skills-item">Python and Flask for RESTful API development</li>
                <li className="about-skills-item">MySQL and PostgreSQL (Neon)</li>
                <li className="about-skills-item">JWT for authentication and secure API access</li>
                <li className="about-skills-item">Postman for API testing and documentation</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="about-skills-category">
              <h4 className="about-skills-title">Tools & Infrastructure</h4>
              <ul className="about-skills-list">
                <li className="about-skills-item">Git and GitHub for version control</li>
                <li className="about-skills-item">Docker for containerized development environments</li>
              </ul>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="about-philosophy">
            <h3 className="about-philosophy-title">My Philosophy</h3>
            <p className="about-philosophy-text">
              I aim to build clear, reliable, and maintainable systems that can scale and evolve over time.
            </p>
            <p className="about-philosophy-text">
              If you are looking for a developer with a system-level perspective, strong backend foundations, and a commitment to continuous growth — I would be glad to connect.
            </p>
          </div>

          {/* CTA */}
          <div className="about-cta">
            <Link to="/contact" className="about-cta-link">
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
