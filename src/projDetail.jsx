import React from "react";
import { useParams } from "react-router-dom";

export const ProjDetail = ({ workingProjects, finishedProjects, darkMode }) => {
  const { id } = useParams();

  const project =
    workingProjects.find((p) => p.id === id) ||
    finishedProjects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={`project-detail ${darkMode ? "dark" : ""}`}>
      <h1 className="project-title">{project.title}</h1>
      {project.image && (
        <img
          className="project-image"
          src={project.image}
          alt={project.title}
        />
      )}
      <p className="project-description">{project.longD || project.descrip}</p>
      <a
        className="project-link"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Project
      </a>
      <p className="project-status">Status: {project.status}</p>
    </div>
  );
};
