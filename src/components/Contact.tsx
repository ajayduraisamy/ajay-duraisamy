
"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Interested in working together? Drop me a message or connect via socials.
        </p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          action="https://formspree.io/f/mayvlxyz" // 🔴 Replace with your Formspree/Web3Forms endpoint
          method="POST"
          className="grid gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12 text-2xl">
          <a
            href="https://github.com/ajay" // 🔴 Replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ajay" // 🔴 Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ajaydurausamy@gmail.com"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
