import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowRight, FiGithub, FiExternalLink, FiStar, FiSearch } from 'react-icons/fi';

const getInitials = (title = "") => {
  const words = title.split(" ").filter(Boolean);
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return (words[0][0] + words[1][0]).toUpperCase();
};

const getYoutubeThumbnail = (link) => {
  if (!link) return null;
  try {
    const url = new URL(link);
    if (url.hostname !== "www.youtube.com" && url.hostname !== "youtube.com" && url.hostname !== "youtu.be") {
      return null;
    }

    let videoId = "";
    if (url.hostname === "youtu.be") {
      const parts = url.pathname.split("/").filter(Boolean);
      videoId = parts[0] || "";
    } else {
      videoId = url.searchParams.get("v") || "";
    }

    if (!videoId) return null;
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  } catch {
    return null;
  }
};

const getGithubThumbnail = (github) => {
  if (!github) return null;
  try {
    const url = new URL(github);
    if (url.hostname !== "github.com") return null;
    const [owner, repo] = url.pathname.split("/").filter(Boolean);
    if (!owner || !repo) return null;
    return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
  } catch {
    return null;
  }
};

const getWebsiteThumbnail = (link) => {
  if (!link) return null;
  try {
    const url = new URL(link);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    const encoded = encodeURIComponent(link);
    return `https://image.thum.io/get/width/1200/crop/675/noanimate/${encoded}`;
  } catch {
    return null;
  }
};

const Card = ({ id, title, descrip, tags, link, github, darkMode, thumbnail, featured, category, award }) => {
  const navigate = useNavigate();
  const [imageFailed, setImageFailed] = useState(false);
  const derivedThumbnail =
    thumbnail ||
    getYoutubeThumbnail(link) ||
    getWebsiteThumbnail(link) ||
    getGithubThumbnail(github);
  const showImage = derivedThumbnail && !imageFailed;

  const handleCardClick = () => {
    navigate(`/projects/${id}`);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="relative bg-white dark:bg-zinc-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden cursor-pointer"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      {award && (
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-flex items-center rounded-full bg-amber-500/90 text-white px-3 py-1 text-[11px] font-semibold tracking-wide shadow-sm">
            WINNER
          </span>
        </div>
      )}

      {showImage ? (
        <div className="w-full h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
          <img
            src={derivedThumbnail}
            alt={title}
            className="w-full h-full object-cover"
            onError={() => setImageFailed(true)}
          />
        </div>
      ) : (
        <div className="w-full h-40 bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center">
          {github ? (
            <FiGithub className="text-zinc-100 dark:text-zinc-900" size={40} />
          ) : (
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white text-sm font-semibold border border-white/20">
              {getInitials(title)}
            </span>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2 gap-3">
          <div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              {title}
            </h3>
            {award && (
              <p className="mt-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                {award}
              </p>
            )}
          </div>
          {!thumbnail && !featured && category && (
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-300">
              {category}
            </span>
          )}
        </div>

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
          <div className="inline-flex items-center gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            View details <FiArrowRight size={14} className="ml-1" />
          </div>

          <div className="flex gap-2" onClick={stopPropagation}>
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
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    document.title = "HB | Projects";
  }, []);

  const baseData =
    activeTab === "working"
      ? workingProjects
      : finishedProjects;

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredByCategory =
    activeFilter === "All"
      ? baseData
      : baseData.filter((proj) => (proj.category || "Uncategorized") === activeFilter);

  const displayData = normalizedQuery
    ? filteredByCategory.filter((proj) => {
        const inTitle = proj.title.toLowerCase().includes(normalizedQuery);
        const inDesc = proj.descrip.toLowerCase().includes(normalizedQuery);
        const inTags = (proj.tags || []).some((tag) =>
          tag.toLowerCase().includes(normalizedQuery)
        );
        const inCategory = (proj.category || "").toLowerCase().includes(normalizedQuery);
        return inTitle || inDesc || inTags || inCategory;
      })
    : filteredByCategory;

  const categoryOptions = [
    "All",
    ...Array.from(
      new Set(
        baseData
          .map((proj) => proj.category || "Uncategorized")
      )
    ).filter((cat) => cat && cat !== "All"),
  ];

  const hackathonWinners =
    activeTab === "finished"
      ? displayData.filter((proj) => proj.award)
      : [];

  const flagshipProjects =
    activeTab === "finished"
      ? displayData.filter((proj) => proj.featured)
      : [];

  const otherProjects =
    activeTab === "finished"
      ? displayData.filter((proj) => !proj.featured && !proj.award)
      : displayData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full min-h-[60vh]"
    >
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-3 text-zinc-900 dark:text-white">Projects</h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
          A curated stack of what I&apos;m building and shipping — from hackathon winners to long-term experiments.
        </p>
      </header>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex p-1 bg-zinc-100 dark:bg-zinc-900 rounded-lg w-fit">
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

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="hidden md:flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 rounded-full px-2 py-1">
            {categoryOptions.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                  activeFilter === cat
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100"
                    : "bg-transparent text-zinc-600 dark:text-zinc-300 border-transparent hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech, tag, or project..."
              className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-zinc-50/10"
            />
          </div>
        </div>
      </div>

      <div className="space-y-10">
        {activeTab === "finished" && hackathonWinners.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Hackathon Winners
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {hackathonWinners.map((proj) => (
                  <Card key={proj.id} {...proj} darkMode={darkMode} />
                ))}
              </AnimatePresence>
            </div>
          </section>
        )}

        {activeTab === "finished" && flagshipProjects.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Flagship Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {flagshipProjects.map((proj) => (
                  <Card key={proj.id} {...proj} darkMode={darkMode} />
                ))}
              </AnimatePresence>
            </div>
          </section>
        )}

        {otherProjects.length > 0 && (
          <section>
            {activeTab === "finished" && (
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  More Builds
                </h2>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {otherProjects.map((proj) => (
                  <Card key={proj.id} {...proj} darkMode={darkMode} />
                ))}
              </AnimatePresence>
            </div>
          </section>
        )}
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
