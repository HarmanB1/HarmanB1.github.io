import React from "react";
import "./Home.css";
import { Rotation } from "./Rotation";
import { Card } from "./projCards";

const cards = [
  <Card
    key={1}
    title="Alpha"
    descrip="React project"
    image=""
    status="working"
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
];

export const Home = () => {
  return (
    <section id="overview">
      <h1>About Me</h1>
      <p>
        Hi, I’m <strong>Harman Bhogal</strong>, a second-year Computer Science
        student at Simon Fraser University (SFU). I love combining
        problem-solving with creativity, especially through projects that
        challenge the boundaries of user interaction and smart technology.
      </p>
      <p>
        I’m fluent in multiple programming languages including C++, Python, and
        JavaScript—with C++ being my go-to for algorithmic problem solving. I’m
        always curious about how different technologies can be combined to
        create meaningful and innovative solutions.
      </p>

      <p>
        Outside of academics, I work as a <strong>math tutor</strong>, helping
        younger students build confidence in their foundational skills. Tutoring
        keeps me grounded, sharpens my communication skills, and gives back to
        the community that shaped me.
      </p>

      <p>
        In my free time, I enjoy going to the <strong>gym</strong>, playing
        video games, and watching films. I'm also a big fan of{" "}
        <strong>chess</strong> and enjoy challenging myself with strategic
        thinking.
      </p>

      <h2>What I'm Currently Working On</h2>
      <div className="Rotation">
        <Rotation cards={cards}/>
      </div>

      <h2>Interests</h2>
      <p>
        <strong>Movies:</strong> Check out my taste on
        <a
          href="https://boxd.it/2xOqX"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Letterboxd
        </a>
      </p>
      <p>
        <strong>Chess:</strong>
        <a
          href="https://www.chess.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Chess.com
        </a>
      </p>
    </section>
  );
};
