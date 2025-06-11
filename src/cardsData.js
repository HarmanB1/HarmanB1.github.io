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
    longD: `Developed a terminal-based text editor in C++ using the ncurses library, implementing core features like typing, scrolling, and mouse/keyboard navigation to support efficient text manipulation in constrained environments
  
  Integrated file I/O operations (load, save, create new), working directory settings, and .cfg file support to enable persistent user-specific sessions
  
  Added interactive menus and enhancements like mouse-based cursor placement, word wrap, clipboard-style cut/copy/paste, autosave, and theme configuration, resulting in a modern terminal UX tailored for speed and flexibility
  
  Structured code into modular components with clear separation between rendering, input handling, and file management, allowing for easier expansion and debugging during development`,
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
    longD: `Built a responsive React application delivering real-time fitness and clothing suggestions by integrating the OpenWeatherMap and Wger APIs, reducing user decision fatigue and improving engagement through contextual, weather-based recommendations
  
  Designed low- and high-fidelity prototypes in Figma, used MVS diagrams, and constructed user personas to align functionality with end-user needs
  
  Broke down goals into milestones using WBS planning and tracked progress with a Kanban board; coordinated work through Git, enabling smooth collaboration and quick task handoffs across the team
  
  Structured teamwork around Scrum practices, allowing our team to quickly adapt feedback and shift direction as needed while meeting deadlines`,
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
    longD: `Created a responsive personal website using HTML and CSS, focused on clean layout, accessibility, and mobile compatibility
  
  Rebuilt the static site as a React application with reusable components and better file organization, simplifying future updates and project additions
  
  Applied peer feedback to revise content and navigation, resulting in a more intuitive browsing experience across devices`,
  },
];
  