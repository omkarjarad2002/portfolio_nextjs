import Image from "next/image";
import Arrow from "./Arrow";
import Link from "next/link";
import Education from "./Education";
import Contact from "./Contact";
// import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
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
              <h1 className="text text-2xl">I'm</h1>
              <h2 className="text-name text-2xl">Omkar Jarad</h2>
            </div>
            <h2 className="text-name text-2xl">FULL STACK WEB DEVELOPER</h2>
            <h2 className="text-name text-2xl">PROGRAMMER</h2>
          </div>
        </div>
        <Arrow />
        <div className="skills-container">
          <h1 className=" skills_heading font-sans font-bold text-center text-3xl scroll-m-0.5">
            Skills
          </h1>
          <div className="logos">
            <div className="row1">
              <div className="html_logo ">
                <Image
                  className="image_html"
                  src="/html_logo.png"
                  alt=""
                  width={350}
                  height={350}
                ></Image>
              </div>
              <div className="css_logo">
                <Image
                  className="image_css"
                  src="/css_logo.png"
                  alt=""
                  width={350}
                  height={350}
                ></Image>
              </div>
              <div className="html_logo">
                <Image
                  className="image_css"
                  src="/js_logo.png"
                  alt=""
                  width={350}
                  height={350}
                ></Image>
              </div>
              <div className="html_logo">
                <Image
                  className="image_css"
                  src="/react_logo.png"
                  alt=""
                  width={350}
                  height={350}
                ></Image>
              </div>
            </div>
            <div className="row2">
              <div className="html_logo ">
                <Image
                  className="image_logo"
                  src="/nodejs_logo.png"
                  alt=""
                  width={350}
                  height={350}
                ></Image>
              </div>
              <div className="css_logo">
                <Image
                  className="image_css"
                  src="/mongodb_logo.png"
                  alt=""
                  width={350}
                  height={350}
                ></Image>
              </div>
              <div className="html_logo">
                <Image
                  className="image_css"
                  src="/mysql_logo.png"
                  alt=""
                  width={350}
                  height={350}
                ></Image>
              </div>
              <div className="html_logo">
                <Image
                  className="image_css"
                  src="/python_logo.png"
                  alt=""
                  width={350}
                  height={350}
                ></Image>
              </div>
            </div>
            <div className="row2">
              <div className="html_logo nexjs_logo ">
                <Image
                  className="image_logo nextjs_image_logo"
                  src="/nextjs_logo.png"
                  alt=""
                  width={350}
                  height={350}
                ></Image>
              </div>
              <div className="css_logo">
                <Image
                  className="image_css"
                  src="/ts_logo.png"
                  alt=""
                  width={350}
                  height={350}
                ></Image>
              </div>
              <div className="html_logo">
                <Image
                  className="image_css"
                  src="/cpp_logo.png"
                  alt=""
                  width={350}
                  height={350}
                ></Image>
              </div>
              <div className="html_logo">
                <Image
                  className="image_css"
                  src="/dart_logo.png"
                  alt=""
                  width={350}
                  height={350}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="temp">
          <h1 className=" skills_heading font-sans font-bold text-center text-3xl scroll-m-0.5">
            Problem solving
          </h1>
          <Arrow />
          <div className="leetcode_div">
            <Link href="https://leetcode.com/jaradomkar24/">
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
        <div className="projects_div">
          <h1 className=" skills_heading font-sans font-bold text-center text-3xl scroll-m-0.5">
            Projects
          </h1>
          <Arrow />
          <div className="projects">
            <div className="row1">
              <div className="project">
                <div className="project_image">
                  <Image
                    className="blog_image"
                    src="/blog_image.png"
                    alt=""
                    width={350}
                    height={350}
                  ></Image>
                </div>
                <div className="project_decs">
                  <h1 className="text-5xl tracking-wide my-4">OMKAR</h1>
                  <p className="text-xl my-10">
                    This project is related to blogs. Blog is much more
                    important. Blogs provides much more information.Blogs are
                    the most important part of every people as well as
                    buissness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Education />
        <Contact />
        {/* <Footer /> */}
      </div>
    </>
  );
}
