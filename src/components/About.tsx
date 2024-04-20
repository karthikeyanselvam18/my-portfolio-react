import * as React from "react";
import SectionTitle from "./SectionTitle";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  return (
    <div
      className="my-5 flex scroll-m-16 gap-5 rounded bg-gray-100 p-3 text-gray-800 shadow-md"
      id="about"
    >
      <div className="flex flex-col items-start gap-3">
        <SectionTitle title="About me" />
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
      <div className="hidden w-1/4 md:block">
        <img className="h-full w-auto" src="/assets/about.png" alt="" />
      </div>
    </div>
  );
}
