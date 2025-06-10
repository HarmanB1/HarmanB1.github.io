
import {
  FaLaptopCode,
  FaChess,
  FaFilm,
  FaDumbbell,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaTools,
} from "react-icons/fa";
import { SiLetterboxd, SiChessdotcom } from "react-icons/si";
import { Rotation } from "./Rotation";
import { Card } from "./projCards";
import "./Home.css";
import { useEffect } from "react";

const cards = [
  <Card
    key={1}
    title="Wbs breakdown"
    descrip="React, Express, SQL stack, project for a web application where users submit projects and can have project broken down by ai into managable tasks, and applicaiton will also simulate scrum environment with ai scrum master, and kanban board"
    image=""
    status="working"
    link="https://github.com/HarmanB1/wbsBreak"
  />,
  <Card
    key={2}
    title="C++ RayTracer"
    descrip="C++ project that simulates ray tracing on sphere"
    image=""
    status="working"
    link="https://github.com/HarmanB1/Ray-Tracer"
  />,
];

export const Home = ({ darkMode }) => {

  useEffect(() => {
    document.title = "HB | Home";
  }, []);
   
  return (
    <div className="home-container" id="overview">
      {/* Hero Section */}
      <div className="glass-card hero-section">
        <h1>About Me</h1>
        <div className="intro-content">
          <p>
            Hi, I'm <strong>Harman Bhogal</strong>, a second-year Computer
            Science student at Simon Fraser University (SFU). I love combining
            problem-solving with creativity, especially through projects that
            challenge the boundaries of user interaction and smart technology.
          </p>
          <div className="icon-text">
            <FaGraduationCap className="section-icon" />
            <span>Second-year CS student at SFU</span>
          </div>
        </div>
      </div>

      <div className="glass-card projects-section">
        <h2>Currently Working On</h2>
        <p>To see finished projects, check projects tab</p>
        <div className="rotation-container">
          <Rotation cards={cards} />
        </div>
      </div>

      {/* Skills Section */}
      <div className="glass-card skills-section">
        <h2>
          <FaLaptopCode className="section-icon" /> Technical Skills
        </h2>

        {/* Programming Languages */}
        <h3>Programming Languages</h3>
        <div className="skills-highlight">
          <span className="skill-tag">C</span>
          <span className="skill-tag">C++</span>
          <span className="skill-tag">Python</span>
          <span className="skill-tag">HTML</span>
          <span className="skill-tag">CSS</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">SQL</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">CMake</span>
        </div>

        {/* Tools & Technologies */}
        <h3>
          <FaTools className="section-icon" /> Tools & Technologies
        </h3>
        <div className="skills-highlight">
          <span className="skill-tag">Git</span>
          <span className="skill-tag">npm</span>
          <span className="skill-tag">Markdown</span>
          <span className="skill-tag">CLI Commands</span>
          <span className="skill-tag">REST APIs</span>
          <span className="skill-tag">JSON</span>
          <span className="skill-tag">Microsoft Word</span>
          <span className="skill-tag">Microsoft Excel</span>
          <span className="skill-tag">Agile Frameworks</span>
        </div>
      </div>

      {/* Tutoring Section */}
      <div className="glass-card tutoring-section">
        <h2>
          <FaChalkboardTeacher className="section-icon" /> Tutoring Experience
        </h2>
        <p>
          Outside of academics, I work as a <strong>math tutor</strong>, helping
          younger students build confidence in their foundational skills.
          Tutoring keeps me grounded, sharpens my communication skills, and
          gives back to the community that shaped me.
        </p>
      </div>

      {/* Personal Interests */}
      <div className="glass-card interests-section">
        <h2>Personal Interests</h2>
        <div className="interest-item">
          <FaDumbbell className="interest-icon" />
          <span>Fitness & Gym</span>
        </div>
        <div className="interest-item">
          <FaChess className="interest-icon" />
          <span>
            Chess -{" "}
            <a
              href="https://www.chess.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <SiChessdotcom /> Chess.com
            </a>
          </span>
        </div>
        <div className="interest-item">
          <FaFilm className="interest-icon" />
          <span>
            Movies -{" "}
            <a
              href="https://boxd.it/2xOqX"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <SiLetterboxd /> Letterboxd
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
