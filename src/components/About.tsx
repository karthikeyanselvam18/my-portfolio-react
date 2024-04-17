import * as React from "react";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  return (
    <div
      className="my-5 flex scroll-m-16 rounded gap-5 bg-gray-100 p-3 text-gray-800 shadow-md"
      id="about"
    >
      <div className="flex flex-col items-start gap-3">
        <span className="relative">
          <span className="text-2xl font-bold text-purple-500">About me</span>
          <span className="absolute left-1/2 top-[calc(100%+2px)] h-0.5 w-10/12 -translate-x-1/2 rounded-full bg-purple-400"></span>
        </span>
        <p>
          Hi, My name is Karthikeyan. I am a Full stack web developer. I build
          beautiful Websites with React.js , Sass CSS + Bootstrap.
          <br />
          <br />I am proficient in Frontend skills like HTML5, CSS3, Javascript,
          Sass, Bootstrap, jQuery, ReactJs many more.
          <br />
          <br />
          In backend I know Java, Spring Boot and MySql.
        </p>
      </div>
      <div className="hidden md:block w-1/4">
        <img className="h-full w-auto" src="/assets/about.png" alt="" />
      </div>
    </div>
  );
}
