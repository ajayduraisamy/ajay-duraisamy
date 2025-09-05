"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Ajay<span className="text-gray-700 dark:text-gray-200">.</span>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400">Home</Link>
          <Link href="/projects" className="hover:text-blue-500 dark:hover:text-blue-400">Projects</Link>
          <Link href="/skills" className="hover:text-blue-500 dark:hover:text-blue-400">Skills</Link>
          <Link href="/contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</Link>

          {/* Dark/Light toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-800" />
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
