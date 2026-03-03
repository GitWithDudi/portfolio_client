import { useEffect, useState } from "react";
import axios from "axios";
import { Iproject } from "../../Types/Interfaces";
import { BASE_URL } from "../../Config";
import "./DeleteProject.css";

export function DeleteProject(): React.JSX.Element {
  const [projects, setProjects] = useState<Iproject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [confirmId, setConfirmId] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/projects`)
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load projects");
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: number) => {
    setDeletingId(id);
    try {
      await axios.delete(`${BASE_URL}/project/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProjects((prev) => prev.filter((p) => p.id !== id));
      setConfirmId(null);
    } catch {
      setError("Failed to delete project");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="delete-project-page">
        <div className="delete-project-loading">
          <div className="loading-spinner"></div>
          <p className="delete-project-loading-text">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="delete-project-page">
        <div className="delete-project-error">
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="btn-primary">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="delete-project-page">
      <div className="delete-project-container">
        <div className="delete-project-content">
          <div className="delete-project-header">
            <h1 className="delete-project-title">Delete Project</h1>
            <p className="delete-project-subtitle">
              Select a project to remove it from your portfolio.
            </p>
          </div>

          {projects.length === 0 ? (
            <div className="delete-project-empty">
              <p>No projects found.</p>
            </div>
          ) : (
            <ul className="delete-project-list">
              {projects.map((project) => (
                <li key={project.id} className="delete-project-item">
                  <div className="delete-project-item-info">
                    <span className="delete-project-item-name">{project.project_name}</span>
                    <span className="delete-project-item-purpose">{project.purpose}</span>
                  </div>

                  {confirmId === project.id ? (
                    <div className="delete-project-confirm">
                      <span className="delete-project-confirm-text">Are you sure?</span>
                      <button
                        className="delete-project-confirm-yes"
                        onClick={() => handleDelete(project.id!)}
                        disabled={deletingId === project.id}
                      >
                        {deletingId === project.id ? "Deleting..." : "Yes, Delete"}
                      </button>
                      <button
                        className="delete-project-confirm-no"
                        onClick={() => setConfirmId(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      className="delete-project-btn"
                      onClick={() => setConfirmId(project.id!)}
                    >
                      Delete
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
