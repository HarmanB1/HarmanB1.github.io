import React from "react";
import "./Home.css";

const currentlyWorkingOn = [
  {
    title: "Java Mobile Apps",
    description:
      "Building mobile applications with Java and Android Studio to explore cross-platform UI, lifecycle handling, and REST APIs.",
  },
  {
    title: "C# Windows Apps",
    description:
      "Learning C# and .NET to build desktop utilities with native Windows integration, using WPF and WinForms.",
  },
  {
    title: "AI and Camera Tracking",
    description:
      "Using Python libraries like OpenCV, MediaPipe, and TensorFlow to create gesture-based authentication systems.",
  },
  {
    title: "Gesture Unlock App",
    description:
      "My end goal is to create a cross-platform app that unlocks laptops using unique user gestures captured via webcam.",
  },
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
      <div className="carousel-wrapper">
        {currentlyWorkingOn.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
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
