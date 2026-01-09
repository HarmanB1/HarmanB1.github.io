import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";

export const ProjDetail = ({ projects, darkMode }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (!project) {
      navigate("/projects");
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl mx-auto"
    >
      {/* Back Button */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-zinc-500 hover:text-black dark:hover:text-white mb-8 transition-colors"
      >
        <FiArrowLeft /> Back to Projects
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white transition-colors"
                title="View Source"
              >
                <FiGithub size={20} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white transition-colors"
                title="Live Demo"
              >
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
        <p className="text-lg leading-relaxed mb-6">
          {project.descrip}
        </p>

        <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-100 dark:border-zinc-800 mt-8">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Project Status</h3>
          <p className="mb-4">
            This project is currently <strong>{project.status}</strong>.
          </p>
          {project.progress !== undefined && (
            <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2.5">
              <div
                className="bg-zinc-900 dark:bg-white h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
