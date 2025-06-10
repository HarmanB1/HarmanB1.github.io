import React, { useEffect } from "react";
import './projects.css';
import {Card} from './projCards.jsx';
import { Rotation } from "./Rotation.jsx";
import { finishedProjects } from "./cardsData.js";


export const Projects = ({ darkMode }) => {
  useEffect(() => {
    document.title = "HB | Projects";
  }, []);
  return (
    <div>
      <h1>My Projects</h1>
      <Rotation
        cards={finishedProjects.map((proj) => (
          <Card
            key={proj.id}
            id={proj.id}
            title={proj.title}
            descrip={proj.descrip}
            status={proj.status}
            link={proj.link}
            image={proj.image}
            darkMode={darkMode}
          />
        ))}
        darkMode={darkMode}
      />
    </div>
  );
};