"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import "./Navbar.css";

const Navbar = () => {
  const [showMobileMedia, setShowMobileMedia] = useState(false);
  return (
    <div>
      <nav className="desktop_nav">
        <div className={showMobileMedia ? " mobile_media" : "div_ul"}>
          <ul>
            <li>
              <a href="#profile" className="text-xl">
                OMKAR J.
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#problemSol">Problem Solving</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#education">Education</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#contact">Reach Us</a>
            </li>
          </ul>
        </div>
        <div className="hamburger-menu">
          {showMobileMedia ? (
            <a
              href="#"
              onClick={() => {
                setShowMobileMedia(!showMobileMedia);
              }}
            >
              <RxCross1 className="" />
            </a>
          ) : (
            <a
              href="#"
              onClick={() => {
                setShowMobileMedia(!showMobileMedia);
              }}
            >
              <RxHamburgerMenu />
            </a>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
