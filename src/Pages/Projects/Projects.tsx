import { useEffect, useState } from "react";
import axios from "axios";
import { Iproject } from "../../Types/Interfaces";
import { ProjectsCard } from "../../Components/Project/Projects_card";

export function Projects(): React.JSX.Element {
  const [projects, setProjects] = useState<Iproject[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/projects")
      .then((response) => {
        console.log("Projects fetched successfully:", response.data);
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project) => (
        <ProjectsCard key={project.id} project={project} />
      ))}
    </div>
  );
}
