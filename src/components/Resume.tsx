import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export interface IResumeProps {
}

export default function Resume (props: IResumeProps) {
  return (
    <div
    className="mb-5 w-full flex scroll-m-16 flex-col items-start gap-3 p-3"
    id="resume"
  >
    <span className="relative">
      <span className="text-2xl font-bold text-purple-500">Resume</span>
      <span className="absolute left-1/2 top-[calc(100%+2px)] h-0.5 w-10/12 -translate-x-1/2 rounded-full bg-purple-400"></span>
    </span>
    <div className='flex md:flex-row flex-col justify-center items-center gap-10'>
        <div className='w-3/5 md:w-1/5 border overflow-hidden aspect-square shadow bg-blue-600 flex justify-center items-center'>
            <img className='h-full object-cover' src="assets/resume.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-4 items-center">
        <p className='text-1xl'>Click the button to download my resume</p>
        <a href="/assets/KARTHIKEYAN_BCA_2023_Resume.pdf" download className="border-2 font-semibold bg-transparent rounded text-purple-500 border-purple-500 px-4 py-2 hover:bg-purple-500 hover:text-slate-100 transition-colors duration-300"><FontAwesomeIcon icon={faFileArrowDown}/> Download</a>
        </div>
    </div>
  </div>
  );
}
