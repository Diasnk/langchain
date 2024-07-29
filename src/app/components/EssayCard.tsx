import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const EssayCard = ({ essay }: { essay: any }) => {
    console.log(essay)

  return (
    <div className='w-56 h-72 bg-white-1 rounded-md shadow-lg overflow-hidden flex flex-col m-2'>
      <div className='p-2'>
        <h1 className='text-black-1 font-bold text-lg border-b border-black-1 pb-2 truncate'>{essay.title}</h1>
      </div>
      <div className='px-2 flex-1 overflow-hidden'>
        <p className='text-black-1 text-justify overflow-hidden text-ellipsis'>{essay.text}</p>
      </div>
      <Link className='flex justify-end' href={`/my-essays/${essay.title}`}>
        <Button className='m-2.5' >Read More</Button>
      </Link>
    </div>
  );
};

export default EssayCard;
