import { Link } from "react-router-dom";
import { Iproject } from "../../Types/Interfaces";

export function ProjectsCard({
  project,
}: {
  project: Iproject;
}): React.JSX.Element {
  return (
<Link to={`/project/${project.id}`}>
<h2>{project.project_name}</h2>
      <p>
        <strong>Purpose:</strong> {project.purpose}
      </p>
      <p>
        <strong>Technologies:</strong> {project.technologies.join(", ")}
      </p>
      {project.image_filename && (
       <img 
       src={`http://localhost:5000/static/images/${project.image_filename}`} 
       alt={`${project.project_name} screenshot`} 
     />
     
      )}
    </Link>
  );
}
