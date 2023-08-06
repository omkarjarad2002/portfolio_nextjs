import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHtml5 } from "@fortawesome/free-solid-svg-icons";

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
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="skills-container">
          <h1 className=" skills_heading font-sans font-bold text-center text-xl scroll-m-0.5">
            SKILLS
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
          </div>
        </div>
      </div>
    </>
  );
}
