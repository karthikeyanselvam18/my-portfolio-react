import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div
      className="mb-5 mt-14 flex h-[calc(100dvh-3.5rem)] scroll-m-14 flex-col-reverse justify-center gap-5 text-gray-800"
      id="home"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold">
          Hello, I'm <span className="text-purple-500">Karthikeyan</span>
        </h1>
        <p className="text-lg">
          Passionate Web Developer Crafting digital wonders with code. Let's
          build something extraordinary together!
        </p>
        <div className="flex gap-5">
          <a
            href="#"
            className="grid size-12 transform place-items-center rounded-lg text-purple-500 shadow-md shadow-slate-400 transition-transform duration-300 hover:-translate-y-1"
          >
            <FontAwesomeIcon size="2x" icon={faEnvelope} />
          </a>
          <a
            href="#"
            className="grid size-12 transform place-items-center rounded-lg text-purple-500 shadow-md shadow-slate-400 transition-transform duration-300 hover:-translate-y-1"
          >
            <FontAwesomeIcon size="2x" icon={faLinkedinIn} />
          </a>
          <a
            href="#"
            className="grid size-12 transform place-items-center rounded-lg text-purple-500 shadow-md shadow-slate-400 transition-transform duration-300 hover:-translate-y-1"
          >
            <FontAwesomeIcon size="2x" icon={faGithub} />
          </a>
          <a
            href="#"
            className="grid size-12 transform place-items-center rounded-lg text-purple-500 shadow-md shadow-slate-400 transition-transform duration-300 hover:-translate-y-1"
          >
            <FontAwesomeIcon size="2x" icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <img src="/assets/hero.png" className="w-10/12 md:w-8/12" alt="" />
      </div>
    </div>
  );
}
