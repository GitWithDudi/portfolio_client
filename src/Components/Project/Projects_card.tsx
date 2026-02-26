import { Link } from "react-router-dom";
import { Iproject } from "../../Types/Interfaces";
import { BASE_URL } from "../../Config";
import "./Projects_card.css";

export function ProjectsCard({ project }: { project: Iproject }): React.JSX.Element {
  return (
    <Link to={`/project/${project.id}`} className="project-card group">
      {/* Image */}
      {project.image_filename && (
        <div className="project-card-image-wrapper">
          <img
            src={
              project.image_filename.startsWith("http")
                ? project.image_filename
                : `${BASE_URL}/static/images/${project.image_filename}`
            }
            alt={`${project.project_name} screenshot`}
            className="project-card-image"
          />
          <div className="project-card-image-overlay"></div>
        </div>
      )}

      {/* Content */}
      <div className="project-card-content">
        {/* Title */}
        <h3 className="project-card-title">{project.project_name}</h3>

        {/* Purpose */}
        <p className="project-card-purpose">
          <span className="project-card-purpose-label">Purpose: </span>
          {project.purpose}
        </p>

        {/* Technologies */}
        <div className="project-card-technologies">
          {project.technologies?.slice(0, 3).map((tech) => (
            <span key={tech} className="project-card-tech-badge">
              {tech}
            </span>
          ))}
          {project.technologies && project.technologies.length > 3 && (
            <span className="project-card-tech-more">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
