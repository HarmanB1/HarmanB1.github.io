import React, { useState, useEffect } from "react";
import './projects.css';
import {Card} from './projCards.jsx';
import { Rotation } from "./Rotation.jsx";

const cards = [
  <Card
    key={1}
    title="Alpha"
    descrip="React project"
    image=""
    status="finished"
    link="https://example.com/alpha"
  />,
  <Card
    key={2}
    title="Beta"
    descrip="ML project"
    image=""
    status="working"
    link="https://example.com/beta"
  />,
  <Card
    key={3}
    title="Gamma"
    descrip="Flutter app"
    image=""
    status="finished"
    link="https://example.com/gamma"
  />,
];

export const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <Rotation cards={cards} />
    </div>
  );
  
  
};