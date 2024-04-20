import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionTitle from "../SectionTitle/SectionTitle";
export interface IResumeProps {}

export default function Resume(props: IResumeProps) {
  return (
    <div
      className="mb-5 flex w-full scroll-m-16 flex-col items-start gap-3 p-3 md:w-1/2"
      id="resume"
    >
      <SectionTitle title="Resume" />
      <div className="flex flex-col items-center">
        <div className="flex aspect-square w-[45%] items-center justify-center overflow-hidden border bg-blue-600 shadow">
          <img className="h-full object-cover" src="assets/resume.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-1xl">Click the button to download my resume</p>
          <a
            href="/assets/KARTHIKEYAN_BCA_2023_Resume.pdf"
            download
            className="rounded border-2 border-purple-500 bg-transparent px-4 py-2 font-semibold text-purple-500 transition-colors duration-300 hover:bg-purple-500 hover:text-slate-100"
          >
            <FontAwesomeIcon icon={faFileArrowDown} /> Download
          </a>
        </div>
      </div>
    </div>
  );
}
