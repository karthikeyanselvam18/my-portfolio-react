import * as React from 'react';
export interface IProjectComponentProps {
  img: string
}

export default function ProjectComponent ({img}: IProjectComponentProps) {
  return (
    <div className='w-full aspect-square overflow-hidden rounded-lg bg-black'>
      <img src={img} alt="" className='object-cover h-full object-left-top w-full' />
    </div>
  );
}
