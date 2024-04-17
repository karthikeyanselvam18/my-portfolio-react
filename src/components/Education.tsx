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
        <div className="w-full flex justify-center bg-gray-800">
          <div className="flex w-2 flex-col items-center justify-evenly gap-12 rounded-ful py-8">
            {data.data.map((education) => (
              <EducationComponent key={education.id} {...education} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
