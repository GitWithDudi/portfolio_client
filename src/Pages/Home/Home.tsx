import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GitHubIcon, LinkedInIcon, ArrowRightIcon, CodeIcon, RocketIcon } from "../../Components/Icons/Icons";
import "./Home.css";

export function Home(): React.JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    "Docker", "TypeScript", "React", "Python", "Flask",
    "PostgreSQL", "MySQL", "Neon", "Firebase", "GitHub",
    "Postman", "Tailwind CSS", "Vite", "REST API"
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="section-container">
        <div className="home-hero">
          {/* Left Content */}
          <div className={`home-content ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {/* Greeting Badge */}
            <div className="home-badge">
              <SparklesIcon />
              <span className="home-badge-text">Available for new projects</span>
            </div>

            {/* Main Heading */}
            <div className="home-heading-wrapper">
              <h1 className="home-title">
                Hello.
              </h1>
              <p className="home-subtitle">
                I'm <span className="gradient-text home-name">David</span>
              </p>
              <h2 className="home-role">
                <span className="home-role-text">Full Stack</span>{" "}
                <span className="gradient-text">Developer</span>
              </h2>
            </div>

            {/* Description */}
            <p className="home-description">
              Building modern, scalable web applications with a focus on clean architecture,
              user experience, and maintainable code. Bridging frontend and backend seamlessly.
            </p>

            {/* CTA Buttons */}
            <div className="home-cta-wrapper">
              <Link to="/contact" className="home-cta-primary">
                <RocketIcon size={20} />
                Got a project?
                <ArrowRightIcon size={18} className="home-cta-icon-hover" />
              </Link>

              <Link to="/projects" className="home-cta-secondary">
                <CodeIcon size={20} />
                View My Work
              </Link>
            </div>

            {/* Social Links */}
            <div className="home-social-wrapper">
              <a
                href="https://github.com/GitWithDudi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/david-cohen-0979582a4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Logo */}
          <div className={`home-logo-wrapper ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
               style={{ animationDelay: '200ms' }}>
            <div className="home-logo-container group">
              {/* Glow effect background */}
              <div className="home-logo-glow"></div>

              {/* Logo */}
              <div className="home-logo-inner">
                <img
                  src="/images/logo_1.webp"
                  alt="David's Portfolio Logo"
                  className="home-logo-image"
                />

                {/* Decorative elements */}
                <div className="home-logo-decoration-top"></div>
                <div className="home-logo-decoration-bottom" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="home-tech-section">
        <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
             style={{ animationDelay: '400ms' }}>
          <h3 className="home-tech-title">
            Tech Stack & Tools
          </h3>

          <div className="home-tech-grid">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="home-tech-badge"
                style={{ animationDelay: `${500 + index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Background Elements */}
      <div className="home-bg-decorations">
        <div className="home-bg-decoration-1"></div>
        <div className="home-bg-decoration-2"></div>
      </div>
    </div>
  );
}

// Sparkles Icon Component
const SparklesIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={`sparkles-icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
  </svg>
);
