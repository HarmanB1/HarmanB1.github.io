import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiGithub, FiExternalLink, FiStar } from "react-icons/fi";

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
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-zinc-500 hover:text-black dark:hover:text-white mb-8 transition-colors"
      >
        <FiArrowLeft /> Back to Projects
      </Link>

      <header className="mb-8">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
                {project.title}
              </h1>
              {project.featured && (
                <FiStar className="text-yellow-500 fill-yellow-500" size={24} />
              )}
            </div>
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

      {project.thumbnail && (
        <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl mb-8 bg-zinc-100 dark:bg-zinc-800">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Overview</h2>
          <p className="text-lg leading-relaxed">
            {project.descrip}
          </p>
        </div>

        {project.detailedDescription && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">About</h2>
            <p className="leading-relaxed whitespace-pre-line">
              {project.detailedDescription}
            </p>
          </div>
        )}

        {project.features && project.features.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-zinc-900 dark:text-white mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.learned && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">What I Learned</h2>
            <p className="leading-relaxed whitespace-pre-line">
              {project.learned}
            </p>
          </div>
        )}

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
