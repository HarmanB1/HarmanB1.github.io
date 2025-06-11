import TerminalEditorImg from "./imgs/Screenshot 2025-06-03 at 7.32.48 PM.png";
import WorkoutSiteImg from "./imgs/Screenshot 2025-06-09 at 10.24.50 PM.png";
import PersonalWebsiteImg from "./imgs/Screenshot 2025-06-09 at 10.24.29 PM.png";
export const workingProjects = [
  {
    id: "wbsBreak",
    title: "WBS Breakdown",
    descrip:
      "AI-based project planner that breaks goals into actionable tasks using a full-stack web stack.",
    status: "working",
    link: "https://github.com/HarmanB1/wbsBreak",
    image: "",
    site: "",
    longD: `In progress`,
  },
  {
    id: "C++Raytracer",
    title: "C++ RayTracer",
    descrip: "Ray tracing simulator for spheres in C++.",
    status: "working",
    link: "https://github.com/HarmanB1/Ray-Tracer",
    image: "",
    site: "",
    longD: ` In progress`,
  },
];

export const finishedProjects = [
  {
    id: "TerminalEditor",
    title: "Terminal Text Editor",
    descrip:
      "C++ terminal-based editor with full mouse support, autosave, theming, and interactive menus.",
    status: "finished",
    link: "https://github.com/HarmanB1/Editor",
    site: "",
    image: TerminalEditorImg,
    longD: `Developed a terminal text editor in C++ using ncurses library with mouse input support
Implemented core editing features: typing, text navigation, deletion, and scrolling
Added file operations: loading, saving, creating files, and directory management
 Integrated advanced features: copy/paste, word wrap, autosave, and customizable themes
Designed interactive menus for efficient terminal-based workflow
 Optimized performance for power users in terminal environments`,
  },
  {
    id: "WorkoutSite",
    title: "Workout Recommendation Website",
    descrip:
      "React app offering tailored workouts and clothing suggestions based on live weather.",
    status: "finished",
    link: "https://github.com/CMPT-276-SPRING-2025/final-project-17-sunsets",
    site: "https://gitfit.works/",
    image: WorkoutSiteImg,
    longD: ` Designed and developed a responsive web app using React and CSS
   Integrated OpenWeatherMap and Wger APIs for real-time workout and clothing suggestions
   Created prototypes in Figma and developed MVS diagrams for efficient planning
   Utilized Git, Scrum framework, and Kanban board for project management
   Implemented user personas and stakeholder-aligned features to reduce development time
   Delivered a personalized fitness app with weather-aware recommendations`,
  },
  {
    id: "PersonalWebsite",
    title: "Personal Portfolio Website",
    descrip:
      "Sleek and responsive developer portfolio built from scratch with HTML, CSS, and React.",
    status: "finished",
    link: "https://github.com/HarmanB1/HarmanB1.github.io",
    site: "https://harmanb1.github.io",
    image: PersonalWebsiteImg,
    longD: ` Implemented a responsive portfolio website using modern web technologies
   Applied clean design principles for optimal user experience and accessibility
   Wrote maintainable, well-structured code for future updates
   Incorporated peer feedback to refine UI/UX elements
   Showcased projects and skills with clear, concise presentation
   Ensured cross-browser compatibility and mobile responsiveness`,
  },
];
