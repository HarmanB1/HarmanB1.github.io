import React, { useState, useEffect } from "react";
import './projects.css'

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A cool React app that does X.",
    link: "https://example.com/project-alpha",
  },
  {
    id: 2,
    title: "Project Beta",
    description: "Machine learning project for Y.",
    link: "https://example.com/project-beta",
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "Mobile app built with Flutter.",
    link: "https://example.com/project-gamma",
  },
  // Add more projects here
];

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000); // Rotate every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="carousel-container">
      <button
        className="nav-btn"
        onClick={prevProject}
        aria-label="Previous Project"
      >
        &#8592;
      </button>

      <div
        className="project-card"
        onClick={() => window.open(currentProject.link, "_blank")}
        tabIndex={0}
        role="button"
        aria-pressed="false"
      >
        <div
          className="project-image"
          aria-label={`Image placeholder for ${currentProject.title}`}
        >
          {/* Empty clickable image box */}
        </div>
        <div className="project-info">
          <h3>{currentProject.title}</h3>
          <p>{currentProject.description}</p>
        </div>
      </div>

      <button
        className="nav-btn"
        onClick={nextProject}
        aria-label="Next Project"
      >
        &#8594;
      </button>
    </div>
  );
};