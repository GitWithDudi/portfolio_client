import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Iproject } from "../../Types/Interfaces";


export function ProjectDetails(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Iproject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/project/${id}`)
      .then((response) => {
        setProject(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching project details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading project...</p>;
  if (error) return <p>{error}</p>;
  if (!project) return <p>Project not found</p>;

  return (
    <div style={{ padding: "40px", maxWidth: "800px", paddingBottom: "80px"}}>
      
      <h1>{project.project_name}</h1>
      <p><strong>Purpose:</strong> {project.purpose}</p>
      <p><strong>Description:</strong> {project.description}</p>
      
      {project.github_link && (
        <p>
          <strong>GitHub:</strong>{" "}
          <a href={project.github_link} target="_blank" rel="noopener noreferrer">
            {project.github_link}
          </a>
        </p>
      )}

      {project.docker_link && (
        <p>
          <strong>Docker:</strong>{" "}
          <a href={project.docker_link} target="_blank" rel="noopener noreferrer">
            {project.docker_link}
          </a>
        </p>
      )}

      {project.technologies && project.technologies.length > 0 && (
        <p>
          <strong>Technologies:</strong> {project.technologies.join(", ")}
        </p>
      )}

      {project.link && (
        <p>
          <strong>Live Link:</strong>{" "}
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.link}
          </a>
        </p>
      )}

      {project.image_filename && (
        <img
          src={`http://localhost:5000/static/images/${project.image_filename}`}
          alt={`${project.project_name} screenshot`}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}
    </div>
  );
}
