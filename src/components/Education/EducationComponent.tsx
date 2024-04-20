import * as React from "react";

export interface IEducationComponentProps {
  id: number;
  course: string;
  duration: string;
  institute: string;
  place: string;
}

export default function EducationComponent({
  id,
  course,
  duration,
  institute,
  place,
}: IEducationComponentProps) {
  return (
    <div className="group relative w-full h-20 bg-slate-300">
      <div className="text-slate-300 absolute top-1/2 flex -translate-y-1/2 transform flex-col rounded p-3 group-odd:right-5 group-odd:items-end group-even:left-5 group-even:items-start">
        <span className="text-nowrap flex items-baseline gap-1.5">
          <span className="text-sm md:text-xl font-semibold text-purple-500 ">{course}</span><span className="text-[0.7rem] md:text-sm">{duration}</span>
        </span>
        <span className="text-nowrap text-xs md:text-base">{institute}</span>
        <span className="text-nowrap text-xs md:text-base">{place}</span>
      </div>
    </div>
  );
}
