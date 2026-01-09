import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const Card = ({ id, title, descrip, tags, link, github, darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden"
    >
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">
          {title}
        </h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 flex-grow mb-4">
          {descrip}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-xs rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800">
          <Link
            to={`/projects/${id}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
          >
            View Details <FiArrowRight size={14} className="ml-1" />
          </Link>

          <div className="flex gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                title="GitHub Repo"
              >
                <FiGithub size={16} />
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                title="Live Demo"
              >
                <FiExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = ({
  darkMode,
  workingProjects = [],
  finishedProjects = [],
}) => {
  const [activeTab, setActiveTab] = useState("finished");

  useEffect(() => {
    document.title = "HB | Projects";
  }, []);

  const displayData =
    activeTab === "working"
      ? workingProjects
      : finishedProjects;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full min-h-[60vh]"
    >
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">Projects</h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-lg">
          A collection of my technical endeavors. Switch tabs to view what I'm currently building versus what I've shipped.
        </p>
      </header>

      <div className="flex p-1 mb-8 bg-zinc-100 dark:bg-zinc-900 rounded-lg w-fit">
        <TabButton
          isActive={activeTab === "finished"}
          onClick={() => setActiveTab("finished")}
          label="Finished"
        />
        <TabButton
          isActive={activeTab === "working"}
          onClick={() => setActiveTab("working")}
          label="In Progress"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {displayData.map((proj) => (
            <Card
              key={proj.id}
              {...proj}
              darkMode={darkMode}
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const TabButton = ({ isActive, onClick, label }) => (
  <button
    onClick={onClick}
    className={`relative px-6 py-2 text-sm font-medium rounded-md transition-colors z-10 ${isActive ? "text-black dark:text-white" : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
      }`}
  >
    {isActive && (
      <motion.div
        layoutId="activeTab"
        className="absolute inset-0 bg-white dark:bg-zinc-800 shadow-sm rounded-md -z-10 border border-zinc-200 dark:border-zinc-700"
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    )}
    {label}
  </button>
);
