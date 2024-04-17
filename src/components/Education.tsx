import data from "../json/education.json";
import EducationComponent from "./EducationComponent";

export interface IEducationProps {}

export default function Education(props: IEducationProps) {
  return (
    <div className="mb-5 flex scroll-m-14 flex-col items-start gap-3 p-3">
      <span className="relative">
        <span className="text-2xl font-bold text-purple-500">My Journey</span>
        <span className="absolute left-1/2 top-[calc(100%+2px)] h-0.5 w-10/12 -translate-x-1/2 rounded-full bg-purple-400"></span>
      </span>
      <div className="flex w-full justify-center">
        <span className="flex w-2 flex-col items-center justify-evenly gap-16 rounded-full bg-gray-700 py-16">
          {data.data.map((education) => (
            <EducationComponent key={education.id} {...education} />
          ))}
        </span>
      </div>
    </div>
  );
}
