import { FaPhoneSquareAlt, FaGithub, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const contactDetails = [
  {
    id: 1,
    type: "Email",
    value: "ajayduraisamy@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&to=ajayduraisamy@gmail.com",
    icon: MdEmail,
  },
  {
    id: 2,
    type: "Phone",
    value: "+91 7373327552",
    link: "tel:+917373327552",
    icon: FaPhoneSquareAlt,
  },
  {
    id: 3,
    type: "GitHub",
    value: "ajayduraisamy",
    link: "https://github.com/ajayduraisamy",
    icon: FaGithub,
  },
  {
    id: 4,
    type: "Instagram",
    value: "Ajay_D_07",
    link: "https://www.instagram.com/ajeyy_d_07/",
    icon: FaInstagram,
  },
];

export default contactDetails;
