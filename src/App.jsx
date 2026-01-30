import { useState, useEffect } from "react";
import { Route, Routes, HashRouter, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { MainPage } from "./MainPage.jsx";
import { Projects } from "./projects.jsx"; 
import { ProjDetail } from "./projDetail.jsx";
import { NotFound } from "./error.jsx";

const WORKING_PROJECTS = [
  {
    id: 101,
    title: "WBS Break",
    descrip: "A work breakdown structure tool for project management and task organization.",
    tags: ["React", "Project Management", "UI/UX"],
    link: null,
    github: "https://github.com/HarmanB1/wbsBreak",
    status: "In Progress",
    progress: 30,
    thumbnail: null,
    featured: false,
    detailedDescription: "WBS Break is a modern project management tool designed to help teams break down complex projects into manageable tasks using the Work Breakdown Structure methodology.",
    features: [
      "Hierarchical task breakdown visualization",
      "Drag-and-drop task organization",
      "Progress tracking and analytics",
      "Export to multiple formats"
    ],
    learned: "Building this project taught me about hierarchical data structures, state management in complex UIs, and the importance of intuitive drag-and-drop interfaces for productivity tools."
  },
];

const FINISHED_PROJECTS = [
  {
    id: 301,
    title: "Terminal Text Editor",
    descrip: "A modern terminal-based text editor built in C++ with ncurses, featuring mouse support, autosave, word wrap, and theme customization.",
    tags: ["C++", "ncurses", "Terminal UI", "File I/O"],
    link: null,
    github: "https://github.com/HarmanB1/Editor",
    status: "Completed",
    progress: 100,
    thumbnail: null,
    featured: false,
    detailedDescription: "A fully-featured terminal text editor that brings modern text editing capabilities to the command line. Built from scratch using C++ and ncurses, it provides a responsive and intuitive editing experience without leaving the terminal.",
    features: [
      "Full mouse support for cursor positioning ",
      "Automatic saving with configurable intervals",
      "Text manipulation tools such as scrolling, and line operations such as copy, cut and paste.",
      "Word wrap for better readability",
      "User customization such as color schemes, line numbers and status bar options",
      "Customizable color themes",
      "Syntax highlighting support",
      "Multiple file buffer management"
    ],
    learned: "This project deepened my understanding of low-level terminal manipulation, efficient file I/O operations, and memory management in C++. I learned how to handle user input events, manage screen refresh cycles, and create responsive UI in a constrained environment."
  },
  {
    id: 302,
    title: "Workout Recommendation App",
    descrip: "A full-stack React app providing real-time workout and clothing suggestions using OpenWeatherMap and Wger APIs, built following Agile Scrum principles.",
    tags: ["React", "API Integration", "OpenWeatherMap", "Wger API", "Agile", "Scrum"],
    link: "https://www.gitfit.works/",
    github: "https://github.com/CMPT-276-SPRING-2025/final-project-17-sunsets",
    status: "Completed",
    progress: 100,
    thumbnail: null,
    featured: false,
    detailedDescription: "GitFit is a comprehensive fitness application that adapts workout recommendations based on current weather conditions. The app helps users stay active regardless of the weather by suggesting appropriate indoor or outdoor exercises and clothing.",
    features: [
      "Real-time weather-based workout recommendations",
      "Clothing suggestions based on temperature and conditions",
      "Integration with Wger exercise database",
      "User preference customization",
      "Responsive design for mobile and desktop",
    ],
    learned: "Developed strong API integration skills and learned to handle asynchronous data fetching effectively. Gained hands-on experience with Agile methodologies including daily standups, sprint planning, and iterative development. Improved my ability to work in a team setting and manage project timelines."
  },
  {
    id: 303,
    title: "Personal Portfolio Website",
    descrip: "A clean, responsive React portfolio site with smooth UI/UX design and dynamic project showcasing.",
    tags: ["React", "Tailwind CSS", "Responsive Design", "Portfolio", "Framer Motion"],
    link: "https://harmanb1.github.io/",
    github: "https://github.com/HarmanB1/HarmanB1.github.io",
    status: "Completed",
    progress: 100,
    thumbnail: null,
    featured: true,
    detailedDescription: "A modern, responsive portfolio website built to showcase my projects and technical skills. Features smooth animations, dark mode support, and an intuitive navigation experience.",
    features: [
      "Responsive design that works on all devices",
      "Dark mode support with smooth transitions",
      "Animated project cards and page transitions",
      "Dynamic routing for project details",
      "Clean, minimal aesthetic with focus on content",
      "Optimized performance and fast loading times"
    ],
    learned: "Mastered modern React patterns including hooks and component composition. Learned to create smooth animations with Framer Motion and implement a professional dark mode. Gained experience with React Router for client-side navigation and Tailwind CSS for rapid styling."
  },
  {
    id: 304,
    title: "C Group Chat Server (TCP)",
    descrip: "A C-based TCP group chat server simulation with multiple clients (fuzzers) and a two-phase commit protocol for graceful termination.",
    tags: ["C", "TCP Sockets", "Concurrency", "Fuzzing", "Two-Phase Commit"],
    link: null,
    github: "https://github.com/HarmanB1/TCP-group-chat",
    status: "Completed",
    progress: 100,
    thumbnail: null,
    featured: false,
    detailedDescription: "A robust multi-client chat server implemented in C using TCP sockets. The server handles concurrent connections, message broadcasting, and implements a two-phase commit protocol to ensure all clients gracefully disconnect.",
    features: [
      "Multi-threaded server supporting multiple concurrent clients",
      "TCP socket programming with proper error handling",
      "Message broadcasting to all connected clients",
      "Two-phase commit protocol for coordinated shutdown",
      "Fuzzer clients for stress testing and reliability",
      "Thread-safe message queue implementation"
    ],
    learned: "Gained deep understanding of network programming, socket APIs, and the TCP protocol. Learned to manage concurrency with threads and mutexes, handle edge cases in network communication, and implement distributed consensus protocols. Improved debugging skills for multi-threaded applications."
  },
  {
    id: 305,
    title: "Student Course Builder (EduFind)",
    descrip: "A full-stack course planning MVP built using React, Express.js, and Supabase, featuring AI-driven personalized course recommendations. Winner of StormHacks 2025 for Best Use of SFU Courses API.",
    tags: ["React", "Express.js", "Supabase", "Tailwind CSS", "Deepseek AI", "SFU API", "REST API", "PROTOTYPING"],
    link: "https://project-course-builder.vercel.app/",
    github: "https://github.com/StormHacks-2025/ProjectCourseBuilder",
    status: "Completed",
    progress: 100,
    thumbnail: null,
    featured: true,
    detailedDescription: "EduFind is an intelligent course planning application that helps students at SFU create personalized course schedules. The app reads student transcripts, provides AI-powered recommendations, and allows interactive schedule customization. Built in 24 hours during StormHacks 2025, where it won Best Use of SFU Courses API.",
    features: [
      "AI-powered course recommendations using Deepseek API",
      "Transcript parsing and analysis for personalized suggestions",
      "Interactive schedule builder with drag-and-drop",
      "Integration with SFU Courses API for real-time course data",
      "Prerequisite checking and validation",
      "Responsive design optimized for student workflows",
      "Interactive AI chat feature, to allow users to ask the AI backend for courses"
    ],
    learned: "Built a full-stack application under tight time constraints, learning to prioritize features and make quick technical decisions. Gained experience integrating multiple APIs (SFU Courses API and Deepseek AI) and handling complex data relationships. Designed a backend to handle user frontned requests making use of REST API skills. Learned to build effective database schemas with Supabase and create intuitive UIs for complex workflows. Developed skills in rapid prototyping and hackathon project execution."
  },
];

export { WORKING_PROJECTS, FINISHED_PROJECTS }; function App() {
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
