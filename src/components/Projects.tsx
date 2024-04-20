import * as React from "react";
import ProjectComponent from "./ProjectComponent";
import data from "../json/projects.json";
import SectionTitle from "./SectionTitle";
export interface IProjectsProps {}

export default function Projects(props: IProjectsProps) {
  return (
    <div
      className="mb-5 flex scroll-m-16 flex-col items-start gap-3 p-3"
      id="projects"
    >
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.data.map((project) => (
          <ProjectComponent
            key={project.id}
            name={project.name}
            img={project.path}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </div>
  );
}
