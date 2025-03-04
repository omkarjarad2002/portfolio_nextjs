import Image from "next/image";
import Arrow from "./Arrow";
import Link from "next/link";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactSection from "./Collaboration";

export default function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="container" id="profile">
          <div className="info">
            <div className="name">
              <h1 className="text text-2xl">I`m</h1>
              <h2 className="text-name text-2xl text-purple-400 ">
                Omkar Jarad
              </h2>
            </div>
            <h2 className="text-name text-2xl text-purple-400 ">
              FULL STACK WEB DEVELOPER
            </h2>
            <h2 className="text-name text-2xl text-purple-400 ">PROGRAMMER</h2>
            <p className="text-intro_para ">
              I specialize in building scalable and user-friendly web appli-
              cations using React.js, Node.js, MongoDB, and SQL. With a strong
              foundation in Java, C++, Python, and JavaScript, I love solving
              complex problems through clean and efficient code.
            </p>
          </div>
          <div className="circle">
            <Image
              // className="image"
              id="profile_img"
              src="/profile_picture.jpg"
              alt=""
              width={600}
              height={1000}
            ></Image>
          </div>
        </div>
        {/* <Arrow /> */}
        <Skills />
        <div className="m-10 p-10 text-center justify-center" id="problemSol">
          <h1 className="text-purple-400 text-4xl md:text-5xl font-extrabold">
            Problem solving
          </h1>
          {/* <Arrow /> */}
          <div className="text-center justify-center">
            <Link href="https://leetcode.com/jaradomkar24/" target="_blank">
              <div className="leetcode_logo ">
                <Image
                  className="image_leetcode cursor-pointer"
                  src="/leetcode_logo.svg"
                  alt=""
                  width={100}
                  height={100}
                ></Image>
              </div>
            </Link>
          </div>
        </div>
        <Projects />
        <ContactSection />
        <Education />
        <Contact />

        <Footer />
      </div>
    </>
  );
}
