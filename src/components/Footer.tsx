"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left side */}
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Ajay. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">
            Projects
          </Link>
          <Link href="/skills" className="hover:text-blue-600 dark:hover:text-blue-400">
            Skills
          </Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
