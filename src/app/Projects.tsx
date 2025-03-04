"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Arrow from "./Arrow";
import axios from "axios";
import projectData from "./ProjectData";

function Projects() {
  const [projects, setProjects] = useState([]);
  // const [file, setFile] = useState("");

  // const getProjects = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:4000/getallprojects");

  //     console.log(res.data[0].file);
  //     setFile(res.data[0].file);
  //     setProjects(res.data);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  // const myloader = () => {
  //   return `http://localhost:4000/uploads/${file}`;
  // };

  // useEffect(() => {
  //   getProjects();
  // }, []);

  return (
    // <div className="projects_div" id="projects">
    //   <h1 className=" skills_heading font-sans font-bold text-center text-3xl scroll-m-0.5">
    //     Projects
    //   </h1>
    //   <Arrow />
    //   {projectData.map((project) => (
    //     <React.Fragment key={project.title}>
    //       <div className="projects">
    //         <div className="row1">
    //           <div className="project">
    //             <div className="project_image">
    //               <Image
    //                 // loader={myloader}
    //                 // src={`http://localhost:4000/uploads/${project.file}`}
    //                 src={project.image}
    //                 className="blog_image"
    //                 alt="..."
    //                 width={400}
    //                 height={350}
    //               ></Image>
    //             </div>
    //             <div className="project_decs">
    //               <h1 className="text-5xl tracking-wide my-4">
    //                 {project.title}
    //               </h1>
    //               <p className="text-xl text-sky-600 my-10">
    //                 {project.description}
    //               </p>
    //               <p className="text-green-600 underline py-4">
    //                 <a href={project.frontendurl}>Front-End</a>
    //               </p>
    //               <p className="text-green-600 underline py-4">
    //                 <a href={project.backendurl}>Back-End</a>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </React.Fragment>
    //   ))}
    // </div>

    <section
      className="bg-gradient-to-b from-black to-gray-900 text-white py-16 px-6 "
      id="projects"
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-extrabold mb-12 text-start">
          Explore Projects...
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer p-6 bg-gray-800 rounded-2xl shadow-xl flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:bg-gray-700 border border-purple-500"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={100}
                height={100}
                className="mb-4 object-contain drop-shadow-lg"
              />
              <h3 className="text-xl font-bold text-purple-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
