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
  FaFileExcel,
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
import {
  SiCplusplus,
  SiC,
  SiJson,
  SiMarkdown,
  
} from "react-icons/si";
import "./about.css";

export const About = () => {
  return (
    <div className="about-container">
      <div className="glass-card profile-header">
        <h2>About Me</h2>
        <p className="about-description">
          Passionate Computing Science student with experience in tutoring and
          customer service. Skilled in multiple programming languages and tools,
          with strong organizational abilities.
        </p>
      </div>

      {/* Skills Section */}
      <div className="glass-card">
        <h3>
          <FaCode className="section-icon" /> Skills
        </h3>

        <div className="skills-group">
          <h4>
            <FaCode /> Programming Languages & Tools
          </h4>
          <div className="skills-grid">
            <div className="skill-item">
              <SiC size={24} />
              <span>C</span>
            </div>
            <div className="skill-item">
              <SiCplusplus size={24} />
              <span>C++</span>
            </div>
            <div className="skill-item">
              <DiPython size={24} />
              <span>Python</span>
            </div>
            <div className="skill-item">
              <DiHtml5 size={24} />
              <span>HTML</span>
            </div>
            <div className="skill-item">
              <DiCss3 size={24} />
              <span>CSS</span>
            </div>
            <div className="skill-item">
              <DiJavascript size={24} />
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <DiReact size={24} />
              <span>React</span>
            </div>
          </div>
        </div>

        <div className="skills-group">
          <h4>
            <FaTools /> Tools & Technologies
          </h4>
          <div className="skills-grid">
            <div className="skill-item">
              <DiGit size={24} />
              <span>Git</span>
            </div>
            <div className="skill-item">
              <DiNpm size={24} />
              <span>npm</span>
            </div>
            <div className="skill-item">
              <SiMarkdown size={24} />
              <span>Markdown</span>
            </div>
            <div className="skill-item">
              <SiJson size={24} />
              <span>JSON</span>
            </div>
            <div className="skill-item">
             
              <span>Word</span>
            </div>
            <div className="skill-item">
              <FaFileExcel size={24} />
              <span>Excel</span>
            </div>
          </div>
        </div>

        <div className="skills-group">
          <h4>
            <FaLanguage /> Languages
          </h4>
          <div className="languages-list">
            <div className="language-item">
              <span className="language-name">English</span>
              <span className="language-level">Fluent</span>
            </div>
            <div className="language-item">
              <span className="language-name">Punjabi/Hindi</span>
              <span className="language-level">Oral Communication</span>
            </div>
            <div className="language-item">
              <span className="language-name">French</span>
              <span className="language-level">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills-group">
          <h4>
            <FaUserTie /> Personal Attributes
          </h4>
          <ul className="attributes-list">
            <li>Excellent time management</li>
            <li>Strong organizational skills</li>
            <li>Capable of working independently</li>
          </ul>
        </div>
      </div>

      {/* GitHub Contribution Calendar */}
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
              Help students in Math, English, and Coding from grades 1 to 12
            </li>
            <li>
              Communicate with team members to improve teaching techniques
            </li>
            <li>
              Develop personalized student goals by assessing needs and progress
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
              Provided customer service assisting customers in person and by
              phone
            </li>
            <li>
              Promoted products using in-depth knowledge and engaging
              presentations
            </li>
            <li>
              Collaborated with sales team to coordinate efforts and maintain
              store organization
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
