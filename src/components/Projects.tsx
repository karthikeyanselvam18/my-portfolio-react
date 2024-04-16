import * as React from "react";
import ProjectComponent from "./ProjectComponent";
import todo from "../assets/todo.jpeg";
import jokes from "../assets/jokes.jpg";
import popcornParadox from "../assets/popcorn-paradox.jpeg";
import weather from "../assets/weather.jpeg";
import t3 from "../assets/t3.jpeg";
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
      <div className=" grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <ProjectComponent img={todo} />
        <ProjectComponent img={popcornParadox} />
        <ProjectComponent img={weather} />
        <ProjectComponent img={t3} />
      </div>
    </div>
  );
}
