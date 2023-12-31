import React from "react";
import Image from "next/image";
import Arrow from "./Arrow";
import projects from "./ProjectData";

function Projects() {
  return (
    <div className="projects_div" id="projects">
      <h1 className=" skills_heading font-sans font-bold text-center text-3xl scroll-m-0.5">
        Projects
      </h1>
      <Arrow />
      {projects.map((project) => (
        <React.Fragment key={project.id}>
          <div className="projects">
            <div className="row1">
              <div className="project">
                <div className="project_image">
                  <Image
                    className="blog_image"
                    src={project.image}
                    alt=""
                    width={350}
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
