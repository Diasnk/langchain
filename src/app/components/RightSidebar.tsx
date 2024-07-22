'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='mt-4 mr-8 relative'>
      <Image
        onClick={toggleOpen}
        className='cursor-pointer'
        src='/icons/hamburger.svg'
        alt='menu'
        height={40}
        width={40}
      />
      {isOpen && (
        <div className='fixed right-8 top-16 w-52 bg-black-5 text-white-1 rounded-lg shadow-lg z-20'>
          <div className='p-4'>
            <Link className='w-full tex' href='./logIn'>
              <button className='w-full p-2 mb-2 text-left hover:bg-gray-700 rounded'>
                Log In
                <Image
                  src='/icons/profile.svg'
                  alt='pen'
                  height={20}
                  width={20}
                  className='inline-block mx-2'
                />
              </button>
            </Link>
            <Link href='./essays'>
              <button className='w-full p-2 mb-2 text-left hover:bg-gray-700 rounded'>
                My essays
                <Image
                  src='/icons/emptyState.svg'
                  alt='pen'
                  height={30}
                  width={30}
                  className='inline-block mx-2'
                />
              </button>
            </Link>
            <Link href='./notes'>
              <button className='w-full p-2 mb-2 text-left hover:bg-gray-700 rounded'>
                Create a draft
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSidebar;
