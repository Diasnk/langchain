'use client'

import { useState } from 'react';
import Image from 'next/image'

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='mt-4 mr-8 flex flex-col '>
      <Image onClick={toggleOpen} className='cursor-pointer max-w-[40px] max-h-[40px]' src='/icons/hamburger.svg' alt='menu' height={40} width={40}/>
      {isOpen ? 
      <div className='text-white-1  transition-all' onClick={toggleOpen}>
        <div className='w-40 h-64 p-4 bg-black-5 text-white-1 right-8 rounded-lg absolute z-10'>
          <p>qweqe</p>
          <p>wqeq</p>
          <p>wqeqeq</p>
        </div>
      </div>
      :
      ''
      }
    </div>
  )
}

export default RightSidebar