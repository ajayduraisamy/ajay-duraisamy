"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaPhp } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiMysql, SiDocker, SiAmazon } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-600" /> },
  { name: "Docker", icon: <SiDocker className="text-sky-600" /> },
  { name: "AWS", icon: <SiAmazon className="text-orange-500" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-gray-100 dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
