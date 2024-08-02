'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  } from "@/components/ui/sheet"

import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';



const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // const {data: session} = useSession();

  return (
    <div className='absolute right-5 top-5'>
      <SignedOut>
        <div className='text-white-1 border border-white-1 px-2.5 py-1 rounded-md hover:bg-slate-800'>
          <SignUpButton/>
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton showName/>
      </SignedIn>
    </div>
  );
};

export default RightSidebar;
