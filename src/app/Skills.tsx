import React from "react";
import Image from "next/image";

function Skills() {
  const features = [
    {
      id: 1,
      imgSrc: "/html_logo.png",
    },
    {
      id: 2,
      imgSrc: "/css_logo.png",
    },
    {
      id: 3,
      imgSrc: "/js_logo.png",
    },
    {
      id: 4,
      imgSrc: "/mongodb_logo.png",
    },
    {
      id: 5,
      imgSrc: "/mysql_logo.png",
    },
    {
      id: 6,
      imgSrc: "/nextjs_logo.png",
    },
    {
      id: 7,
      imgSrc: "/nodejs_logo.png",
    },
    {
      id: 8,
      imgSrc: "/python_logo.png",
    },
    {
      id: 9,
      imgSrc: "/react_logo.png",
    },
    {
      id: 10,
      imgSrc: "/ts_logo.png",
    },
  ];
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-black to-gray-900 text-white py-16"
    >
      <div className="max-w-screen-xl mx-auto text-center px-6">
        <div className="flex text-center justify-center mb-20 ">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Persistent Towards,
          </h2>
          <h2 className="text-purple-400 text-4xl md:text-5xl font-extrabold">
            Success...
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={feature.imgSrc}
                alt=""
                width={50}
                height={50}
                className="mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    // <div className="skills-container" id="skills">
    //   <h1 className=" skills_heading font-sans font-bold text-center text-3xl scroll-m-0.5">
    //     Skills
    //   </h1>
    //   <div className="logos">
    //     <div className="row1">
    //       <div className="html_logo ">
    //         <Image
    //           className="image_html"
    //           src="/html_logo.png"
    //           alt=""
    //           width={350}
    //           height={350}
    //         ></Image>
    //       </div>
    //       <div className="css_logo">
    //         <Image
    //           className="image_css"
    //           src="/css_logo.png"
    //           alt=""
    //           width={350}
    //           height={350}
    //         ></Image>
    //       </div>
    //       <div className="html_logo">
    //         <Image
    //           className="image_css"
    //           src="/js_logo.png"
    //           alt=""
    //           width={350}
    //           height={350}
    //         ></Image>
    //       </div>
    //       <div className="html_logo">
    //         <Image
    //           className="image_css"
    //           src="/react_logo.png"
    //           alt=""
    //           width={350}
    //           height={350}
    //         ></Image>
    //       </div>
    //     </div>
    //     <div className="row2">
    //       <div className="html_logo ">
    //         <Image
    //           className="image_logo"
    //           src="/nodejs_logo.png"
    //           alt=""
    //           width={350}
    //           height={350}
    //         ></Image>
    //       </div>
    //       <div className="css_logo">
    //         <Image
    //           className="image_css"
    //           src="/mongodb_logo.png"
    //           alt=""
    //           width={350}
    //           height={350}
    //         ></Image>
    //       </div>
    //       <div className="html_logo">
    //         <Image
    //           className="image_css"
    //           src="/mysql_logo.png"
    //           alt=""
    //           width={350}
    //           height={350}
    //         ></Image>
    //       </div>
    //       <div className="html_logo">
    //         <Image
    //           className="image_css"
    //           src="/python_logo.png"
    //           alt=""
    //           width={350}
    //           height={350}
    //         ></Image>
    //       </div>
    //     </div>
    //     <div className="row2">
    //       <div className="html_logo nexjs_logo ">
    //         <Image
    //           className="image_logo nextjs_image_logo"
    //           src="/nextjs_logo.png"
    //           alt=""
    //           width={350}
    //           height={350}
    //         ></Image>
    //       </div>
    //       <div className="css_logo">
    //         <Image
    //           className="image_css"
    //           src="/ts_logo.png"
    //           alt=""
    //           width={350}
    //           height={350}
    //         ></Image>
    //       </div>
    //       <div className="html_logo">
    //         <Image
    //           className="image_css"
    //           src="/cpp_logo.png"
    //           alt=""
    //           width={350}
    //           height={350}
    //         ></Image>
    //       </div>
    //       <div className="html_logo">
    //         <Image
    //           className="image_css"
    //           src="/dart_logo.png"
    //           alt=""
    //           width={350}
    //           height={350}
    //         ></Image>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Skills;
