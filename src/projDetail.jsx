import React from "react";
import { useParams } from "react-router-dom";
import './projDetail.css'

export const ProjDetail = ({ workingProjects, finishedProjects, darkMode }) => {
  const { id } = useParams();

  const project =
    workingProjects.find((p) => p.id === id) ||
    finishedProjects.find((p) => p.id === id);

  if (!project) {
    return <div className="project-detail">Project not found</div>;
  }

  const longPoints = project.longD
    ? project.longD
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
    : [];

  return (
    <div className={`project-detail ${darkMode ? "dark" : ""}`}>
      <h1 className="project-title">{project.title}</h1>

      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="project-image"
        />
      )}

      {project.descrip && (
        <p className="project-short-description">{project.descrip}</p>
      )}

      {longPoints.length > 0 && (
        <ul className="project-description">
          {longPoints.map((point, idx) => (
            <React.Fragment key={idx}>
              <li>{point}</li>
              {idx !== longPoints.length - 1 && (
                <div style={{ height: "1rem" }} />
              )}
            </React.Fragment>
          ))}
        </ul>
      )}

      <div className="project-links">
        {project.site && (
          <a
            className="project-link"
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Live Site
          </a>
        )}
        {project.link && (
          <a
            className="project-link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        )}
      </div>

      <p className="project-status">Status: {project.status}</p>
    </div>
  );
};
