'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import {doSocialLogin, doLogOut} from '@/app/actions/index';
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs';



const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // const {data: session} = useSession();

  return (
    <>
      <SignedOut>
        <div className='mt-4 mr-8 relative pt-5'>
          <Image
            onClick={toggleOpen}
            className='cursor-pointer'
            src='/icons/hamburger.svg'
            alt='menu'
            height={40}
            width={40}
          />
          {isOpen && (
            <div className='absolute right-8 top-12 w-44 md:h-56  md:w-52 bg-black-5 text-white-1 rounded-lg shadow-lg z-20'>
              <div className='p-4 h-full flex flex-col justify-between'>
                <div className='w-full p-2 mb-2 text-left hover:bg-gray-700 rounded cursor-pointer'>
                  <SignInButton>
                    <div>
                      <Image
                        src='/icons/profile.svg'
                        alt='pen'
                        height={20}
                        width={20}
                        className='inline-block mx-2'
                      />
                      Sing In
                    </div>
                  </SignInButton>
                </div>
                <div className='w-full p-2 mb-2 text-left hover:bg-gray-700 rounded cursor-pointer'>
                  <SignUpButton>
                    <div>
                      <Image
                        src='/icons/profile.svg'
                        alt='pen'
                        height={20}
                        width={20}
                        className='inline-block mx-2'
                      />
                      Sing Up
                    </div>
                  </SignUpButton>
                </div>
                <Link href='./essays'>
                  <button className='w-full p-2 mb-2 text-left hover:bg-gray-700 rounded'>
                    <Image
                      src='/icons/upload-image.svg'
                      alt='pen'
                      height={20}
                      width={20}
                      className='inline-block mx-2'
                      />
                      My essays
                  </button>
                </Link>
                <Link href='./notes'>
                  <button className='w-full p-2 mb-2 text-left hover:bg-gray-700 rounded'>
                    Create a draft
                  </button>
                </Link>
                <Link href='./tutorial'>
                  <button className='md:hidden w-full p-2 mb-2 text-left hover:bg-gray-700 rounded'>
                    View Tutorial
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </SignedOut>
      <SignedIn>
        <div className='mt-4 mr-8 relative pt-5'>
          <Image
            onClick={toggleOpen}
            className='cursor-pointer'
            src='/icons/hamburger.svg'
            alt='menu'
            height={40}
            width={40}
          />
          {isOpen && (
            <div className='absolute right-8 top-12 w-44 md:h-48  md:w-52 bg-black-5 text-white-1 rounded-lg shadow-lg z-20'>
              <div className='p-4 h-full flex flex-col justify-between'>
                <div className='w-full p-2 mb-2 text-left hover:bg-gray-700 rounded'>
                <UserButton showName/>	
                </div>
                <Link href='./essays'>
                  <button className='w-full p-2 mb-2 text-left hover:bg-gray-700 rounded'>
                    <Image
                      src='/icons/upload-image.svg'
                      alt='pen'
                      height={20}
                      width={20}
                      className='inline-block mx-2'
                      />
                      My essays
                  </button>
                </Link>
                <Link href='./notes'>
                  <button className='w-full p-2 mb-2 text-left hover:bg-gray-700 rounded'>
                    Create a draft
                  </button>
                </Link>
                <Link href='./tutorial'>
                  <button className='md:hidden w-full p-2 mb-2 text-left hover:bg-gray-700 rounded'>
                    View Tutorial
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </SignedIn>
    </>
  );
};

export default RightSidebar;
