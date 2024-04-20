import * as React from "react";
import Tilt from "react-parallax-tilt";

export interface IProjectComponentProps {
  img: string;
  name: string;
  github: string;
  live: string;
}

export default function ProjectComponent({
  img,
  name,
  github,
  live,
}: IProjectComponentProps) {
  return (
    <Tilt>
      <div className="group relative aspect-square w-full overflow-hidden rounded shadow-md shadow-slate-700 ">
        <img
          src={img}
          alt=""
          className="h-full w-full object-cover object-left-top"
        />
        <div className="absolute left-0 top-0 h-full w-full  bg-black opacity-0 md:opacity-60 transition-opacity duration-300 md:group-hover:opacity-20"></div>
        <div className="absolute bottom-0 left-0 flex h-2/4 w-full  flex-col items-center justify-end gap-2 bg-gradient-to-t from-purple-500  to-transparent pb-4">
          <span className="rounded bg-opacity-90 px-2 py-1.5 text-xl font-semibold text-white">
            {name}
          </span>
          <div className="flex w-full justify-evenly">
            <a
              href={github}
              target="_blank"
              className="w-1/3 text-center text-white underline md:no-underline md:hover:underline"
            >
              Github
            </a>
            <a
              href={live}
              target="_blank"
              className="w-1/3 text-center text-white underline md:no-underline md:hover:underline"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
