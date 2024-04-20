import SectionTitle from "../SectionTitle/SectionTitle";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  return (
    <div
      className="my-5 flex scroll-m-16 gap-5 rounded bg-gray-100 p-3 text-gray-800 shadow-md"
      id="about"
    >
      <div className="flex flex-col items-start gap-3 md:w-3/4">
        <SectionTitle title="About me" />
        <div className="flex flex-col gap-2">
          <p>
            Hi, My name is Karthikeyan. I am a Full stack web developer. I build
            beautiful Websites with React.js and Tailwind CSS.
          </p>
          <p>
            In frontend development, I excel in HTML5, CSS3, and utilize
            frameworks like Tailwind CSS, Bootstrap, and Sass to create
            responsive and visually appealing designs. My JavaScript skills
            include proficiency in vanilla JavaScript, jQuery, and React.js,
            among others.
          </p>
          <p>
            For backend development, I specialize in Node.js with the Express.js
            framework. Additionally, I have experience working with Java to
            build robust and scalable backend systems.
          </p>
        </div>
      </div>
      <div className="hidden items-center w-1/4 md:flex">
        <img className="h-auto w-full" src="/assets/about.png" alt="" />
      </div>
    </div>
  );
}
