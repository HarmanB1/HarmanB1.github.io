import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import './about.css'

export const About = () => {
  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "auto" }}>
      <h2>About</h2>
      <p>This section is about me.</p>

      {/* Skills touchable tiles */}
      <section>
        <h3>Skills</h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {/* Replace these with actual skill tiles */}
          <button style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
            React
          </button>
          <button style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
            JavaScript
          </button>
          <button style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
            C++
          </button>
          {/* Add more skills as needed */}
        </div>
      </section>

      {/* GitHub commit history */}
      <section style={{ marginTop: "2rem" }}>
        <section style={{ marginTop: "2rem" }}>
          <h3>GitHub Contribution Calendar</h3>
          <GitHubCalendar
            username="HarmanB1"
            year = "2025"
            colorScheme="light"
            blockSize={15}
            fontSize={16}
          />
        </section>
      </section>

      {/* Education tile */}
      <section style={{ marginTop: "2rem" }}>
        <h3>Education</h3>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
          }}
        >
          <h4>University Name</h4>
          <p>Bachelor of Science in Computer Science</p>
          <p>2017 - 2021</p>
        </div>
      </section>

      {/* Career tile */}
      <section style={{ marginTop: "2rem" }}>
        <h3>Career</h3>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
          }}
        >
          <h4>Software Developer at Company XYZ</h4>
          <p>June 2021 - Present</p>
          <p>Working on frontend and backend web development.</p>
        </div>
      </section>
    </div>
  );
};
