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
    <div className="group relative aspect-square w-11/12 rounded-full bg-purple-500">
      <div className="absolute top-1/2 flex -translate-y-1/2 transform flex-col rounded p-3 group-odd:right-3 group-odd:items-end group-even:left-3 group-even:items-start">
        <span className="text-nowrap text-sm font-semibold">
          {course} <span className="text-xs">{duration}</span>
        </span>
        <span className="text-nowrap text-sm">{institute}</span>
        <span className="text-nowrap text-sm">{place}</span>
      </div>
    </div>
  );
}
