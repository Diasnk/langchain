import Link from "next/link";
import { BiSolidGroup } from 'react-icons/bi'


export default function Header() {
	return (
		<div className="text-[#96a7bb] bg-black-1 lg:px-10 px-4 py-5 flex justify-between items-center">
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
					Sign In/Log In
				</Link>
			</div>
		</div>
	);
}