import { useState, useEffect } from "react";
import { Route, Routes, Link, HashRouter, NavLink } from "react-router-dom";
import "./App.css";
import { Home } from "./home.jsx";
import { Contact } from "./contact.jsx";
import { About } from "./about.jsx";
import { Projects } from "./projects.jsx";
import { FiSun, FiMoon } from "react-icons/fi";

function App() {
  const [darkMode, setDarkMode] = useState(false);

    

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme class to document
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <HashRouter>
      <div className={`app-container ${darkMode ? "dark" : ""}`}>
        <nav>
          <div className="navCont">
            <div className="logo">
              <span className="logo-text">HB</span>
            </div>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} darkMode={darkMode} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route
              path="/projects"
              element={<Projects darkMode={darkMode} />}
            />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
