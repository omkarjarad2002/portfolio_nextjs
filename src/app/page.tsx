import Image from "next/image";
import Arrow from "./Arrow";
import Link from "next/link";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="container" id="profile">
          <div className="circle">
            <Image
              className="image"
              src="/profile_pic.jpg"
              alt=""
              width={350}
              height={350}
            ></Image>
          </div>
          <div className="info">
            <div className="name">
              <h1 className="text text-2xl">I`m</h1>
              <h2 className="text-name text-2xl">Omkar Jarad</h2>
            </div>
            <h2 className="text-name text-2xl">FULL STACK WEB DEVELOPER</h2>
            <h2 className="text-name text-2xl">PROGRAMMER</h2>
          </div>
        </div>
        <Arrow />
        <Skills />
        <div className="temp" id="problemSol">
          <h1 className=" skills_heading font-sans font-bold text-center text-3xl scroll-m-0.5">
            Problem solving
          </h1>
          <Arrow />
          <div className="leetcode_div">
            <Link href="https://leetcode.com/jaradomkar24/" target="_blank">
              <div className="leetcode_logo ">
                <Image
                  className="image_leetcode"
                  src="/leetcode_logo.svg"
                  alt=""
                  width={350}
                  height={350}
                ></Image>
              </div>
            </Link>
          </div>
        </div>
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
