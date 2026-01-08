import { useState, useEffect } from "react";
import { Route, Routes, HashRouter, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { MainPage } from "./MainPage.jsx";
import { Projects } from "./Projects.jsx";
import { ProjDetail } from "./projDetail.jsx";
import { NotFound } from "./error.jsx";

const WORKING_PROJECTS = [
  {
    id: 101,
    title: "Project Alpha (Temp)",
    descrip: "Currently building a full-stack e-commerce platform using Next.js and Stripe for payments.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
    github: "#",
    status: "In Progress",
    progress: 75,
  },
];

const FINISHED_PROJECTS = [
  {
    id: 301,
    title: "Terminal Text Editor",
    descrip: "C++ terminal-based editor with full mouse support, autosave, theming, and interactive menus.",
    tags: ["C++", "ncurses", "Terminal UI", "File I/O"],
    link: null,
    github: "YOUR_TERMINAL_EDITOR_GITHUB_LINK",
    status: "Completed",
    progress: 100,
  },
  {
    id: 302,
    title: "Workout Recommendation Website",
    descrip: "React app offering tailored workouts and clothing suggestions based on live weather.",
    tags: ["React", "API Integration", "OpenWeatherMap", "Wger API", "Figma", "Scrum"],
    link: "YOUR_WORKOUT_LIVE_SITE_LINK",
    github: "YOUR_WORKOUT_GITHUB_LINK",
    status: "Completed",
    progress: 100,
  },
  {
    id: 303,
    title: "Personal Portfolio Website",
    descrip: "Sleek and responsive developer portfolio built from scratch with HTML, CSS, and React.",
    tags: ["React", "HTML", "CSS", "Responsive Design", "Portfolio"],
    link: "YOUR_PORTFOLIO_LIVE_SITE_LINK",
    github: "YOUR_PORTFOLIO_GITHUB_LINK",
    status: "Completed",
    progress: 100,
  },
];


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Main Content Area */}
        <main className="grow pt-24 px-4 sm:px-8 max-w-5xl mx-auto w-full">
          <AnimatedRoutes
            darkMode={darkMode}
            workingProjects={WORKING_PROJECTS}
            finishedProjects={FINISHED_PROJECTS}
          />
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

// Extracted Navbar
const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="logo font-bold text-xl tracking-tight text-zinc-900 dark:text-white">
          HB
        </div>

        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors ${isActive ? "text-black dark:text-white" : "text-zinc-500"}`
                }
              >
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors ${isActive ? "text-black dark:text-white" : "text-zinc-500"}`
                }
              >
                Projects
              </NavLink>
            </li>
          </ul>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

// Extracted Routes
const AnimatedRoutes = ({ darkMode, workingProjects, finishedProjects }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage darkMode={darkMode} />} />

        <Route
          path="/projects"
          element={
            <Projects
              darkMode={darkMode}
              workingProjects={workingProjects}
              finishedProjects={finishedProjects}
            />
          }
        />

        <Route
          path="/projects/:id"
          element={
            <ProjDetail
              projects={[...workingProjects, ...finishedProjects]}
              darkMode={darkMode}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const Footer = () => (
  <footer className="py-8 text-center text-zinc-400 text-sm">
    © {new Date().getFullYear()} Harman Bhogal. Built with React & Tailwind.
  </footer>
);

export default App;
