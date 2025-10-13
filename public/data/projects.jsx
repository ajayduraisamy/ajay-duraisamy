import { FaReact, FaNode, FaHtml5, FaCss3, FaLaravel } from "react-icons/fa";
import { SiMongodb, SiMysql, SiFlask, SiPython, SiDocker, SiTensorflow } from "react-icons/si";

const projects = [
  {
    id: 1,
    name: "Engineering Resource Management System",
    image: "https://res.cloudinary.com/diazxuntv/image/upload/v1760343387/eng_doufvw.jpg",
    description:
      "A full-stack MERN application with microservices to manage engineering resources, track project allocations, and monitor team capacities. Includes dashboards and AI tool integrations for task automation and analytics.",
    technologies: [FaReact, FaNode, SiMongodb, SiDocker, FaCss3, FaHtml5],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/ajayduraisamy/Engineering-Resource-Management-System",
      },
    ],
    liveDemoLinks: [],
  },
  {
    id: 2,
    name: "AI Job Agent",
    image: "https://res.cloudinary.com/diazxuntv/image/upload/v1760343388/ai-agent_vzocoi.jpg",
    description:
      "An AI-powered job application agent that customizes resumes based on job descriptions. Built with Python Flask backend, React frontend, MongoDB, and Selenium for automation.",
    technologies: [FaReact, SiFlask, SiPython, SiMongodb, SiDocker],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/ajayduraisamy/AI-Job-Agent",
      },
    ],
    liveDemoLinks: [],
  },
  {
    id: 3,
    name: "Attendance Management System",
    image: "https://res.cloudinary.com/diazxuntv/image/upload/v1760343388/attentance_aj2csl.jpg",
    description:
      "A face, fingerprint, and RFID-based attendance management system using Raspberry Pi and Python for secure and automated employee tracking.",
    technologies: [SiPython, SiFlask, FaNode, SiMongodb],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/ajayduraisamy/Attendance-Management-System-Face-Fingerprint-RFID-Raspberry-Pi",
      },
    ],
    liveDemoLinks: [],
  },
  {
    id: 4,
    name: "Laravel + React E-commerce Project",
    image: "https://res.cloudinary.com/diazxuntv/image/upload/v1760343387/e-com_yoy1pt.jpg",
    description:
      "A full-featured E-commerce platform built with Laravel and React, enabling secure product management, payments, and user interaction with modern UI/UX.",
    technologies: [FaLaravel, FaReact, SiMysql, FaCss3, FaHtml5],
    githubLinks: [],
    liveDemoLinks: [],
  },
  {
    id: 5,
    name: "Block-chain Powered Cyber Risk Prediction",
    image: "https://res.cloudinary.com/diazxuntv/image/upload/v1760343387/block-chain_zu75nz.jpg",
    description:
      "A blockchain-based platform to predict cyber risks using secure and decentralized mechanisms. Built with modern web technologies for real-time risk assessment and reporting.",
    technologies: [FaReact, SiPython, SiMysql, SiDocker],
    githubLinks: [],
    liveDemoLinks: [],
  },
  {
    id: 6,
    name: "Resume Screening – NLP / AI Recruiter",
    image: "https://res.cloudinary.com/diazxuntv/image/upload/v1760343387/ai-requir_b3u82r.jpg",
    description:
      "An AI-powered recruitment system that screens resumes using NLP techniques to identify the best candidates. Built with Python, Flask, and AI/ML models for intelligent candidate matching.",
    technologies: [SiPython, SiFlask, SiTensorflow, FaReact, SiMongodb],
    githubLinks: [],
    liveDemoLinks: [],
  },
];

export default projects;
