'use client'

import { SignedIn, SignedOut, SignOutButton, UserButton } from "@clerk/clerk-react";
import { SignUpButton } from "@clerk/nextjs";
import Link from "next/link";


export default function Header() {
	return (
		<div className="text-[#96a7bb] px-8 bg-black-1 lg:px-10 py-5 flex justify-between items-center">
			<div >
				<Link href="./" className="font-semibold  hover:underline transition-all">
					Home
				</Link>
			</div>
			<div className="flex items-center justify-center gap-5">
				<Link href="./feedback" className="flex items-center font-semibold hover:underline transition-all">
					Feedback
				</Link>
				<Link href="./" className="flex items-center font-semibold hover:underline transition-all">
					<SignedIn>
						<div className="text-white-1">
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