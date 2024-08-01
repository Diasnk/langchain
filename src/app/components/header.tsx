'use client'

import { SignedIn, SignedOut, SignOutButton, UserButton } from "@clerk/clerk-react";
import { SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'


export default function Header() {
	return (
		<div className="text-[#96a7bb] md:px-8 px-4 bg-black-1 lg:px-10 flex justify-between items-center">
			<div className="py-5" >
				<Link href="./" className="font-semibold max-md:text-xl  hover:underline transition-all">
					Home
				</Link>
			</div>
			<div className="md:hidden pr-2 pt-1">
				<Sheet>
                  <SheetTrigger>
                    {/* <div className='flex cursor-pointer items-center gap-1'>
                      <Image src="/icons/logo.svg" alt='logo' width={23} height={27}/>
                      <h1 className='text-2xl font-extrabold text-white-1'>Jeremy</h1>
                    </div> */}
                    <Image src="/icons/hamburger.svg" alt='logo' width={40} height={40}/>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle><div className='text-2xl font-bold p-5'>Where do you want to go?</div></SheetTitle>
                      <SheetDescription>
                        <Link href="/">
                          <div className='text-xl font-semibold p-5'>Home</div>
                        </Link>
                        <Link href="/my-essays">
                          <div className='text-xl font-semibold p-5'>My Essays</div>
                        </Link>
                        <Link href="/feedback">
                          <div className='text-xl font-semibold p-5'>Feedback</div>
                        </Link>
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
			</div>
			<div className="max-md:hidden flex items-center justify-center text-sm md:text-base gap-1 md:gap-8">
				<Link href="./my-essays" className="flex items-center font-semibold hover:underline transition-all">
					My Essays
				</Link>
				<Link href="./feedback" className="flex items-center font-semibold hover:underline transition-all">
					Feedback
				</Link>
				<Link href="./" className="flex items-center font-semibold hover:underline transition-all">
					<SignedIn>
						<div className="">
							<UserButton showName/>	
						</div>
					</SignedIn>
					<SignedOut>
						<SignUpButton></SignUpButton>
					</SignedOut>
				</Link>
			</div>
		</div>
	);
}