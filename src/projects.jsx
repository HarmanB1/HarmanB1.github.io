import React, { useState, useEffect } from "react";
import './projects.css';
import {Card} from './projCards.jsx';
import { Rotation } from "./Rotation.jsx";

const cards = [
  <Card
    key={1}
    title="Terminal Editor"
    descrip="A terminal-based text editor built in C++ with ncurses, featuring mouse support, file operations, and customizable themes."
    image="./src/imgs/Screenshot 2025-06-03 at 7.32.48 PM.png"
    status="finished"
    link="https://github.com/HarmanB1/Editor"
  />,
  <Card
    key={2}
    title="Workout Recommendation Website"
    descrip="Responsive React web app offering personalized workouts, weather-based clothing suggestions, and real-time integration with weather and exercise APIs."
    image="./src/imgs/Screenshot 2025-06-09 at 10.24.50 PM.png"
    status="finished"
    link="https://gitfit.works/"
  />,
  <Card
    key={3}
    title="Personal Website"
    descrip="Clean, responsive personal portfolio website developed initally using HTML and CSS then rebuilt in React, focusing on usability, maintainability, and modern design."
    image="./src/imgs/Screenshot 2025-06-09 at 10.24.29 PM.png"
    status="finished"
    link="https://harmanb1.github.io"
  />,
];

export const Projects = ({ darkMode }) => {
  return (
    <div>
      <h1>My Projects</h1>
      <Rotation cards={cards} />
    </div>
  );
};