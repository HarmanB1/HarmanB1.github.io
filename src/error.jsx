import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  useEffect(() => {
    document.title = "HB | 404 Not Found";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center"
    >
      <h1 className="text-9xl font-extrabold text-zinc-300 dark:text-zinc-700 select-none">
        404
      </h1>
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-4 mb-3">
        Page Not Found
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black rounded-lg font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
      >
        Go Home
      </Link>
    </motion.div>
  );
};
