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
    <div className="group relative h-20 w-full bg-slate-300">
      <div className="absolute top-1/2 flex -translate-y-1/2 transform flex-col rounded p-3 text-slate-300 group-odd:right-2 group-odd:items-end group-even:left-2 group-even:items-start">
        <span className="flex items-baseline gap-1.5 text-nowrap">
          <span className="text-xs font-semibold text-purple-500 md:text-xl ">
            {course}
          </span>
          <span className="text-[0.6rem] md:text-sm">{duration}</span>
        </span>
        <span className="text-nowrap text-xs md:text-base">{institute}</span>
        <span className="text-nowrap text-xs md:text-base">{place}</span>
      </div>
    </div>
  );
}
