"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Job Portal (MERN)",
    description: "A job application platform with authentication, job listings, and admin management.",
    image: "/projects/jobportal.png", // put your project images inside /public/projects
    link: "https://github.com/ajay/job-portal", // replace with your repo/demo
  },
  {
    title: "LogiTrack (MERN)",
    description: "GPS-based logistics app for driver tracking, trip management, and cost calculation.",
    image: "/projects/logitrack.png",
    link: "https://github.com/ajay/logitrack",
  },
  {
    title: "Engineering Resource Manager",
    description: "MERN + AI-powered tool for resource allocation and team capacity tracking.",
    image: "/projects/erm.png",
    link: "https://github.com/ajay/erm",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  className="mt-4 inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
