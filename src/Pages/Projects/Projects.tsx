import { useEffect, useState } from "react";
import axios from "axios";
import { Iproject } from "../../Types/Interfaces";
import { ProjectsCard } from "../../Components/Project/Projects_card";
import { BASE_URL } from "../../Config";
import "./Projects.css";

export function Projects(): React.JSX.Element {
  const [projects, setProjects] = useState<Iproject[]>([]);
  const [selectedTech, setSelectedTech] = useState("All");
  const [allTechnologies, setAllTechnologies] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/projects`)
      .then((response) => {
        setProjects(response.data);
        setLoading(false);

        const techs = Array.from(
          new Set(
            response.data.flatMap((project: Iproject) => project.technologies || []) as string[]
          )
        );
        setAllTechnologies(techs);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects");
        setLoading(false);
      });
  }, []);

  const handleTechChange = (tech: string) => {
    setSelectedTech(tech);

    const url =
      tech === "All"
        ? `${BASE_URL}/projects`
        : `${BASE_URL}/projects/tech/${tech}`;

    axios
      .get(url)
      .then((response) => setProjects(response.data))
      .catch((error) => {
        console.error("Error fetching filtered projects:", error);
        setError("Failed to filter projects");
      });
  };

  if (loading) {
    return (
      <div className="projects-loading">
        <div className="projects-loading-content">
          <div className="loading-spinner"></div>
          <p className="projects-loading-text">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects-error">
        <div className="error-container">
          <div className="projects-error-icon">⚠️</div>
          <h2 className="projects-error-title">Oops!</h2>
          <p className="projects-error-text">{error}</p>
          <button onClick={() => window.location.reload()} className="btn-primary">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-page">
      <div className="section-container">
        {/* Header */}
        <div className="projects-header">
          <h1 className="projects-title">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="projects-subtitle">
            Explore my portfolio of web applications, showcasing full-stack development
            with modern technologies and best practices.
          </p>
        </div>

        {/* Filter Section */}
        <div className="projects-filter" style={{ animationDelay: '200ms' }}>
          <div className="projects-filter-wrapper">
            <label htmlFor="tech-select" className="projects-filter-label">
              Filter by Technology:
            </label>
            <select
              id="tech-select"
              value={selectedTech}
              onChange={(e) => handleTechChange(e.target.value)}
              className="projects-filter-select"
            >
              <option value="All">All Technologies</option>
              {allTechnologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>

            {selectedTech !== "All" && (
              <button onClick={() => handleTechChange("All")} className="projects-filter-clear">
                Clear Filter ✕
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="projects-empty">
            <div className="projects-empty-icon">🔍</div>
            <h3 className="projects-empty-title">No Projects Found</h3>
            <p className="projects-empty-text">
              {selectedTech !== "All"
                ? `No projects found using ${selectedTech}. Try selecting a different technology.`
                : "No projects available at the moment."}
            </p>
          </div>
        ) : (
          <div className="projects-grid" style={{ animationDelay: '400ms' }}>
            {projects.map((project: Iproject) => (
              <ProjectsCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Project Count */}
        <div className="projects-count">
          Showing {projects.length} {projects.length === 1 ? 'project' : 'projects'}
          {selectedTech !== "All" && ` with ${selectedTech}`}
        </div>
      </div>
    </div>
  );
}
