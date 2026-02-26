import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Iproject } from "../../Types/Interfaces";
import { BASE_URL } from "../../Config";
import "./Project_details.css";

export function ProjectDetails(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Iproject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/project/${id}`)
      .then((response) => {
        setProject(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching project details");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="project-details-page">
        <p className="project-details-loading">Loading project...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="project-details-page">
        <p className="project-details-error">{error}</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-details-page">
        <p className="project-details-not-found">Project not found</p>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      <div className="project-details-container">
        <div className="project-details-content">
          {/* Header */}
          <div className="project-details-header">
            <h1 className="project-details-title">{project.project_name}</h1>
          </div>

          {/* Info Card */}
          <div className="project-details-info">
            <p className="project-details-row">
              <span className="project-details-label">Purpose: </span>
              <span className="project-details-text">{project.purpose}</span>
            </p>

            <p className="project-details-row">
              <span className="project-details-label">Description: </span>
              <span className="project-details-text">{project.description}</span>
            </p>

            {project.github_link && (
              <p className="project-details-row">
                <span className="project-details-label">GitHub: </span>
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-details-link"
                >
                  {project.github_link}
                </a>
              </p>
            )}

            {project.docker_link && (
              <p className="project-details-row">
                <span className="project-details-label">Docker: </span>
                <a
                  href={project.docker_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-details-link"
                >
                  {project.docker_link}
                </a>
              </p>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <div className="project-details-row">
                <span className="project-details-label">Technologies: </span>
                <div className="project-details-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-details-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.link && (
              <p className="project-details-row">
                <span className="project-details-label">Live Link: </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-details-link"
                >
                  {project.link}
                </a>
              </p>
            )}
          </div>

          {/* Image */}
          {project.image_filename && (
            <div className="project-details-image-wrapper">
              <img
                src={
                  project.image_filename.startsWith("http")
                    ? project.image_filename
                    : `${BASE_URL}/static/images/${project.image_filename}`
                }
                alt={`${project.project_name} screenshot`}
                className="project-details-image"
              />
            </div>
          )}

          {/* Back Button */}
          <Link to="/projects" className="project-details-back">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
