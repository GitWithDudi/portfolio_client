import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

export function NavBar(): React.JSX.Element {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/recommendations", label: "Recommendations" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo group">
            <div className="navbar-logo-image-wrapper">
              <img
                src="/images/logo_1.webp"
                alt="Logo"
                className="navbar-logo-image"
              />
              <div className="navbar-logo-overlay"></div>
            </div>
            <span className="navbar-logo-text">David Cohen</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar-link group ${
                  isActive(link.path) ? "navbar-link-active" : "navbar-link-inactive"
                }`}
              >
                {link.label}

                {/* Active indicator */}
                {isActive(link.path) && <span className="navbar-link-indicator"></span>}

                {/* Hover effect */}
                <span className="navbar-link-hover-bg"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="navbar-mobile-button"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="navbar-mobile-nav">
          <div className="navbar-mobile-nav-inner">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`navbar-mobile-link ${
                  isActive(link.path)
                    ? "navbar-mobile-link-active"
                    : "navbar-mobile-link-inactive"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// Menu Icon
const MenuIcon = () => (
  <svg className="navbar-menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

// X Icon
const XIcon = () => (
  <svg className="navbar-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
