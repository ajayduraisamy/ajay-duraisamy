"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 pt-20">
      <div className="max-w-4xl text-center px-6">
        {/* Intro Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white"
        >
          Hi, I’m <span className="text-blue-600 dark:text-blue-400">Ajay</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300"
        >
          A <span className="font-semibold">Full-Stack Developer</span> with 2 years of experience in building
          scalable web applications, AI-powered tools, and modern digital solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Link
            href="/projects"
            className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-2xl border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-200 font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
