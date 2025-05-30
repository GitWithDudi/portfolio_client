import { JSX } from 'react';
import { Iproject } from '../../Types/Interfaces';

export function ProjectsCard(project: Iproject): JSX.Element {
  return (
    <div className="project-card">
      <h2>{project.name}</h2>
      <p><strong>Purpose:</strong> {project.purpose}</p>
      <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
      <p>{project.description}</p>
      {project.image && <img src={project.image} alt={`${project.name} screenshot`} />}
    </div>
  );
}