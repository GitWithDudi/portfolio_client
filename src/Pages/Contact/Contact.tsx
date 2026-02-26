import { LinkedInIcon, EmailIcon } from "../../Components/Icons/Icons";
import "./Contact.css";

export function Contact(): React.JSX.Element {
  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Heading */}
        <div className="contact-header">
          <h1 className="contact-title">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="contact-subtitle">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Drop me a message and let's create something amazing together!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="contact-cards" style={{ animationDelay: '200ms' }}>
          {/* Email Card */}
          <a href="mailto:dudi_cohen@davidev.app" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-card-icon contact-card-icon-email">
              <EmailIcon size={32} />
            </div>
            <div className="contact-card-content">
              <h3 className="contact-card-title">Email Me</h3>
              <p className="contact-card-text-email">dudi_cohen@davidev.app</p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/david-cohen-0979582a4"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon contact-card-icon-linkedin">
              <LinkedInIcon size={32} />
            </div>
            <div className="contact-card-content">
              <h3 className="contact-card-title">LinkedIn</h3>
              <p className="contact-card-text-linkedin">Connect with me</p>
            </div>
          </a>
        </div>

        {/* Additional Info */}
        <div className="contact-info" style={{ animationDelay: '400ms' }}>
          <h3 className="contact-info-title">Open to Opportunities</h3>
          <p className="contact-info-text">
            I'm currently available for freelance projects, full-time positions, and interesting collaborations.
            Whether you need a full-stack developer, a consultant, or just want to discuss tech - let's talk!
          </p>
        </div>
      </div>
    </div>
  );
}
