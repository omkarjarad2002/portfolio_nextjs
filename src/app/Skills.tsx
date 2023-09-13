import React from "react";
import Image from "next/image";

function Skills() {
  return (
    <div className="skills-container" id="skills">
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
  );
}

export default Skills;
