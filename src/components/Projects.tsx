import * as React from "react";
import ProjectComponent from "./ProjectComponent";
import data from "../json/projects.json";
export interface IProjectsProps {}

export default function Projects(props: IProjectsProps) {
  return (
    <div
      className="mb-5 flex scroll-m-14 flex-col items-start gap-3  p-3"
      id="projects"
    >
      <span className="relative">
        <span className="text-2xl font-bold text-purple-500">Projects</span>
        <span className="absolute left-1/2 top-[calc(100%+2px)] h-0.5 w-10/12 -translate-x-1/2 rounded-full bg-purple-400"></span>
      </span>
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
