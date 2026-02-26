import { Link } from "react-router-dom";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "../../Icons/Icons";
import "./Footer.css";

export function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <img
                src="/images/logo_1.webp"
                alt="Logo"
                className="footer-brand-image"
              />
              <span className="footer-brand-name">David Cohen</span>
            </div>
            <p className="footer-brand-description">
              Full Stack Developer building modern, scalable web applications with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-links-title">Quick Links</h3>
            <nav className="footer-links-nav">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/projects" className="footer-link">Projects</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h3 className="footer-social-title">Connect</h3>
            <div className="footer-social-icons">
              <a
                href="https://github.com/GitWithDudi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/david-cohen-0979582a4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="mailto:dudi_cohen@davidev.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="Email"
              >
                <EmailIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              © {currentYear} David Cohen. All rights reserved.
            </p>
            <p className="footer-tech">
              Built with{" "}
              <span className="footer-tech-highlight">React</span>,{" "}
              <span className="footer-tech-highlight">TypeScript</span> &{" "}
              <span className="footer-tech-highlight">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
