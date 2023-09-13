import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socialIcons">
        <Link
          href="https://github.com/omkarjarad2002"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </Link>
        <Link
          href="https://www.instagram.com/invites/contact/?i=1s3wxahocymmi&utm_content=g84xyju"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </Link>
        <Link
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </Link>
      </div>
      <p>&copy; {new Date().getFullYear()} OMKAR JARAD. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
