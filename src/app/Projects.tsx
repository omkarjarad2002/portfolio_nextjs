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
    <div className="projects_div" id="projects">
      <h1 className=" skills_heading font-sans font-bold text-center text-3xl scroll-m-0.5">
        Projects
      </h1>
      <Arrow />
      {projectData.map((project) => (
        <React.Fragment key={project.title}>
          <div className="projects">
            <div className="row1">
              <div className="project">
                <div className="project_image">
                  <Image
                    // loader={myloader}
                    // src={`http://localhost:4000/uploads/${project.file}`}
                    src={project.image}
                    className="blog_image"
                    alt="..."
                    width={400}
                    height={350}
                  ></Image>
                </div>
                <div className="project_decs">
                  <h1 className="text-5xl tracking-wide my-4">
                    {project.title}
                  </h1>
                  <p className="text-xl my-10">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Projects;
