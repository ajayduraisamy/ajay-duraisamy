import { BiLogoPostgresql } from "react-icons/bi";
import { CgPerformance } from "react-icons/cg";
import {
  FaBootstrap,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { FaGit } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiAmazonaws,
  SiDocker,
  SiFlask,
  SiLighthouse,
  SiMicrosoftsqlserver,
  SiMysql,
  SiNestjs,
  SiPagespeedinsights,
  SiPostman,
  SiPython,
  SiPytorch,
  SiTailwindcss,
  SiTensorflow,
  SiVercel
} from "react-icons/si";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";

const expertise = [
  {
    id: 1,
    title: "Frontend Development",
    icons: [FaHtml5, FaCss3, IoLogoJavascript, FaReact, TbBrandNextjs, FaBootstrap, SiTailwindcss],
    description:
      "I specialize in building dynamic and scalable user interfaces using ReactJS and Next.js. With expertise in HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS, I create seamless and interactive digital experiences.",
  },
  {
    id: 2,
    title: "Backend Development",
    icons: [SiNestjs, SiPython, SiFlask, FaPhp, SiMicrosoftsqlserver, SiMysql, BiLogoPostgresql],
    description:
      "I develop robust backend solutions using Node.js (Express/NestJS), Python (Flask), and PHP. I am experienced with databases including MySQL, PostgreSQL, and SQL Server, enabling scalable and efficient server-side architectures.",
  },
  {
    id: 3,
    title: "Machine Learning & AI",
    icons: [SiPython, SiTensorflow, SiPytorch],
    description:
      "I have hands-on experience building ML/DL models and AI integrations using Python, TensorFlow, and PyTorch. I apply AI techniques to solve real-world problems and enhance application intelligence.",
  },
  {
    id: 4,
    title: "Performance Optimization & DevOps",
    icons: [CgPerformance, SiPagespeedinsights, SiDocker, SiAmazonaws],
    description:
      "I optimize application performance and efficiency through best coding practices, caching, lazy loading, and cloud solutions. I also use Docker and AWS for deployment, scaling, and CI/CD pipelines.",
  },
  {
    id: 5,
    title: "Tools & Version Control",
    icons: [SiPostman, TbBrandVscode, FaGit, FaGithub, SiLighthouse, SiVercel],
    description:
      "Proficient in development and collaboration tools like VS Code, Postman, Git, GitHub, Lighthouse, and Vercel for version control, testing, and deployment.",
  },
];

export default expertise;
