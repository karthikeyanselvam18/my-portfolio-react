import * as React from 'react';

export interface IFooterProps {
}

export default function Footer (props: IFooterProps) {
  return (
    <div id='footer' className='py-1 flex justify-center bg-gray-800 absolute w-full left-0'>
      <span className='text-slate-300'>Created by <a className='hover:underline' href="https://github.com/karthikeyanselvam18">@KarthikeyanSelvam18</a></span>
    </div>
  );
}
