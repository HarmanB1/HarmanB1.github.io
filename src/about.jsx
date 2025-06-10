import React from "react";
import GitHubCalendar from "react-github-calendar";
import {
  FaCode,
  FaTools,
  FaLanguage,
  FaUserTie,
  FaGraduationCap,
  FaBriefcase,
  FaChalkboardTeacher,
  FaShoppingBag,
  FaTerminal,
  FaDatabase,
  FaFileAlt,
  FaFileWord,
  FaFileExcel,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  DiJavascript,
  DiPython,
  DiHtml5,
  DiCss3,
  DiReact,
  DiGit,
  DiNpm,
} from "react-icons/di";
import { SiCplusplus, SiC, SiJson, SiMarkdown, SiCmake , } from "react-icons/si";
import "./about.css";

export const About = ( darkMode ) => {
  return (
    <div className="about-container">
      <div className="glass-card profile-header">
        <h2>About Me</h2>
        <p className="about-description">
          Passionate Computing Science student with experience in tutoring and
          customer service. Skilled in multiple programming languages and tools,
          with strong organizational abilities and multilingual proficiency.
        </p>
      </div>

      {/* Skills Section */}
      <div className="glass-card">
        <h3>
          <FaCode className="section-icon" /> Skills
        </h3>

        {/* Programming Languages */}
        <div className="skills-group">
          <h4>
            <FaCode style={{ color: "#4f46e5" }} /> Programming Languages
          </h4>
          <div className="skills-grid">
            <div className="skill-item" style={{ backgroundColor: "#eef2ff" }}>
              <SiC size={24} color="#4f46e5" />
              <span>C</span>
            </div>
            <div className="skill-item" style={{ backgroundColor: "#eef2ff" }}>
              <SiCplusplus size={24} color="#4f46e5" />
              <span>C++</span>
            </div>
            <div className="skill-item" style={{ backgroundColor: "#f0fdf4" }}>
              <DiPython size={24} color="#16a34a" />
              <span>Python</span>
            </div>
            <div className="skill-item" style={{ backgroundColor: "#fef2f2" }}>
              <DiHtml5 size={24} color="#dc2626" />
              <span>HTML</span>
            </div>
            <div className="skill-item" style={{ backgroundColor: "#f0f9ff" }}>
              <DiCss3 size={24} color="#0369a1" />
              <span>CSS</span>
            </div>
            <div className="skill-item" style={{ backgroundColor: "#fef3c7" }}>
              <DiJavascript size={24} color="#d97706" />
              <span>JavaScript</span>
            </div>
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="skills-group">
          <h4>
            <FaTools style={{ color: "#9333ea" }} /> Frameworks & Libraries
          </h4>
          <div className="skills-grid">
            <div className="skill-item" style={{ backgroundColor: "#f5f3ff" }}>
              <DiReact size={24} color="#9333ea" />
              <span>React</span>
            </div>
            <div className="skill-item" style={{ backgroundColor: "#f5f3ff" }}>
              <SiCmake size={24} color="#9333ea" />
              <span>CMake</span>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="skills-group">
          <h4>
            <FaDatabase style={{ color: "#2563eb" }} /> Databases
          </h4>
          <div className="skills-grid">
            <div className="skill-item" style={{ backgroundColor: "#dbeafe" }}>
              <FaDatabase size={24} color="#2563eb" />
              <span>SQL</span>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="skills-group">
          <h4>
            <FaTools style={{ color: "#ea580c" }} /> Tools & Technologies
          </h4>
          <div className="skills-grid">
            <div className="skill-item" style={{ backgroundColor: "#ffedd5" }}>
              <DiGit size={24} color="#ea580c" />
              <span>Git</span>
            </div>
            <div className="skill-item" style={{ backgroundColor: "#ffedd5" }}>
              <DiNpm size={24} color="#ea580c" />
              <span>npm</span>
            </div>
            <div className="skill-item" style={{ backgroundColor: "#ffedd5" }}>
              <SiMarkdown size={24} color="#ea580c" />
              <span>Markdown</span>
            </div>
            <div className="skill-item" style={{ backgroundColor: "#fce7f3" }}>
              <SiJson size={24} color="#db2777" />
              <span>JSON</span>
            </div>
            <div className="skill-item" style={{ backgroundColor: "#ecfdf5" }}>
              <FaTerminal size={24} color="#059669" />
              <span>CLI</span>
            </div>
          </div>
        </div>

        {/* Office & Productivity */}
        <div className="skills-group">
          <h4>
            <FaFileAlt style={{ color: "#7c3aed" }} /> Office & Productivity
          </h4>
          <div className="skills-grid">
            <div className="skill-item" style={{ backgroundColor: "#f3e8ff" }}>
              <FaFileWord size={24} color="#7c3aed" />
              <span>Word</span>
            </div>
            <div className="skill-item" style={{ backgroundColor: "#f3e8ff" }}>
              <FaFileExcel size={24} color="#7c3aed" />
              <span>Excel</span>
            </div>
            <div className="skill-item" style={{ backgroundColor: "#f3e8ff" }}>
              <FaProjectDiagram size={24} color="#7c3aed" />
              <span>Agile</span>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="skills-group">
          <h4>
            <FaLanguage style={{ color: "#c026d3" }} /> Languages
          </h4>
          <div className="languages-list">
            <div
              className="language-item"
              style={{ backgroundColor: "#fae8ff" }}
            >
              <span className="language-name">English</span>
              <span className="language-level">Fluent</span>
            </div>
            <div
              className="language-item"
              style={{ backgroundColor: "#fae8ff" }}
            >
              <span className="language-name">Punjabi/Hindi</span>
              <span className="language-level">Oral Communication</span>
            </div>
            <div
              className="language-item"
              style={{ backgroundColor: "#fae8ff" }}
            >
              <span className="language-name">French</span>
              <span className="language-level">Basic</span>
            </div>
          </div>
        </div>

        {/* Personal Attributes */}
        <div className="skills-group">
          <h4>
            <FaUserTie style={{ color: "#0d9488" }} /> Personal Attributes
          </h4>
          <ul className="attributes-list">
            <li>Excellent time management</li>
            <li>Strong organizational skills</li>
            <li>Capable of working independently</li>
            <li>Agile methodology experience</li>
          </ul>
        </div>
      </div>

      {/* GitHub Contributions */}
      <div className="glass-card">
        <h3>
          <FaCode className="section-icon" /> GitHub Contributions
        </h3>
        <div className="calendar-container">
          <GitHubCalendar
            username="HarmanB1"
            year={2025}
            blockSize={14}
            blockMargin={4}
            fontSize={14}
            colorScheme="light"
          />
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="glass-card">
        <h3>
          <FaBriefcase className="section-icon" /> Work Experience
        </h3>

        <article className="work-experience">
          <div className="experience-header">
            <FaChalkboardTeacher className="experience-icon" />
            <div>
              <h4>Tutor</h4>
              <div className="experience-meta">
                <span className="company">Math4Me</span>
                <span className="location">Surrey, BC</span>
                <span className="date">Sep 2024 - Present</span>
              </div>
            </div>
          </div>
          <ul className="experience-details">
            <li>
              Simplified complex coding and math problems into small steps,
              enabling students to grasp material more easily
            </li>
            <li>
              Communicated with team members to share and adapt teaching
              techniques, leading to improved lesson quality
            </li>
            <li>
              Organized lesson plans for individual students generating an
              increase in efficiency and focus of learning sessions
            </li>
          </ul>
        </article>

        <article className="work-experience">
          <div className="experience-header">
            <FaShoppingBag className="experience-icon" />
            <div>
              <h4>Sales Associate</h4>
              <div className="experience-meta">
                <span className="company">Mark's</span>
                <span className="location">Surrey, BC</span>
                <span className="date">Aug 2023 - Jul 2024</span>
              </div>
            </div>
          </div>
          <ul className="experience-details">
            <li>
              Resolved customer concerns by actively listening to needs,
              analyzing issues, and implementing appropriate solutions resulting
              in improved customer retention and satisfaction
            </li>
            <li>
              Translated technical product details into actionable advice,
              speeding up purchasing decisions.
            </li>
            <li>
              Collaborated closely with fellow sales team members to organize
              daily tasks, ensuring smooth store operations
            </li>
          </ul>
        </article>
      </div>

      {/* Education Section */}
      <div className="glass-card">
        <h3>
          <FaGraduationCap className="section-icon" /> Education
        </h3>

        <article className="education">
          <div className="education-header">
            <FaGraduationCap className="education-icon" />
            <div>
              <h4>Bachelor of Science (Computing Science)</h4>
              <div className="education-meta">
                <span className="institution">Simon Fraser University</span>
                <span className="location">Burnaby, BC</span>
                <span className="date">Ongoing</span>
              </div>
            </div>
          </div>
        </article>

        <article className="education">
          <div className="education-header">
            <FaGraduationCap className="education-icon" />
            <div>
              <h4>High School Diploma</h4>
              <div className="education-meta">
                <span className="institution">Tamanawis Secondary School</span>
                <span className="location">Surrey, BC</span>
                <span className="date">2023</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
