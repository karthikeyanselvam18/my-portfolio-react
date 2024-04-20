import * as React from 'react';

export interface ISectionTitleProps {
    title:string
}

export default function SectionTitle ({title}: ISectionTitleProps) {
  return (
    <span className="relative">
        <span className="text-2xl font-bold text-purple-500">{title}</span>
        <span className="absolute left-0 top-[calc(100%+2px)] h-0.5 w-10/12 rounded-full bg-purple-400"></span>
      </span>
  );
}
