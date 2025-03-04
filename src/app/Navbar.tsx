// "use client";
// import { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { RxCross1 } from "react-icons/rx";
// import "./Navbar.css";

// const Navbar = () => {
//   const [showMobileMedia, setShowMobileMedia] = useState(false);
//   return (
//     <div>
//       <nav className="desktop_nav">
//         <div className={showMobileMedia ? " mobile_media" : "div_ul"}>
//           <ul>
//             <li>
//               <a href="#profile" className="text-xl">
//                 OMKAR J.
//               </a>
//             </li>
//           </ul>
//           <ul>
//             <li>
//               <a href="#skills">Skills</a>
//             </li>
//           </ul>

//           <ul>
//             <li>
//               <a href="#problemSol">Problem Solving</a>
//             </li>
//           </ul>
//           <ul>
//             <li>
//               <a href="#projects">Projects</a>
//             </li>
//           </ul>
//           <ul>
//             <li>
//               <a href="#education">Education</a>
//             </li>
//           </ul>
//           <ul>
//             <li>
//               <a href="#contact">Reach Us</a>
//             </li>
//           </ul>
//         </div>
//         <div className="hamburger-menu">
//           {showMobileMedia ? (
//             <a
//               href="#"
//               onClick={() => {
//                 setShowMobileMedia(!showMobileMedia);
//               }}
//             >
//               <RxCross1 className="" />
//             </a>
//           ) : (
//             <a
//               href="#"
//               onClick={() => {
//                 setShowMobileMedia(!showMobileMedia);
//               }}
//             >
//               <RxHamburgerMenu />
//             </a>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icon Library

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/60 backdrop-blur-lg shadow-lg" : "bg-black"
      }`}
    >
      <div className=" mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-white text-3xl font-bold flex items-center">
          <span className="text-purple-400">OMKAR</span> JARAD
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white text-sm">
          <li>
            <Link href="/" className="hover:text-purple-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-purple-400">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-purple-400">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#problemSol" className="hover:text-purple-400">
              Problem Solving
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-purple-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#education" className="hover:text-purple-400">
              Education
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-purple-400">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white text-xl transition-transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setMenuOpen(false)}
        >
          <X size={32} />
        </button>
        <Link href="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link href="/team" onClick={() => setMenuOpen(false)}>
          Skills
        </Link>
        <Link href="/portfolio" onClick={() => setMenuOpen(false)}>
          Problem Solving
        </Link>
        <Link href="/work" onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
        <Link href="/work" onClick={() => setMenuOpen(false)}>
          Education
        </Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
