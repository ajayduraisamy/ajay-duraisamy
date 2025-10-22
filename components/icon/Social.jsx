import {
  FaGithub,
  FaInstagram,
  FaLinkedin,

  FaWhatsapp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const socialIcons = [
  {
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/ajay-d-5b2003273",
    label: "Linkedin",
  },
  { Icon: FaGithub, link: "https://github.com/ajayduraisamy", label: "Github" },
  { Icon: FaWhatsapp, link: "https://wa.me/+917373327552", label: "Whatsapp" },

  {
    Icon: FaInstagram,
    link: "https://www.instagram.com/ajeyy_d_07/",
    label: "Instagram",
  },

  {
    Icon: MdEmail,
    link: "https://mail.google.com/mail/?view=cm&to=ajayduraisamy@gmail.com",
    label: "Mail",
  },
];

export default socialIcons;
