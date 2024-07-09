import Link from "next/link";
import { BiSolidGroup } from 'react-icons/bi'


export default function Header() {
	return (
		<div className="fixed top-0 left-0 border-b border-black right-0 z-10 bg-white lg:px-10 px-4 py-5 flex justify-between items-center">
			<div >
				<Link href="./" className="font-semibold  hover:underline transition-all">
					Main Page
				</Link>
			</div>
			<div className="flex items-center justify-center gap-5">
				<Link href="./counselor" className="flex items-center font-semibold hover:underline transition-all">
					Counselor
				</Link>
				<Link href="./countries" className="flex items-center font-semibold hover:underline transition-all">
					Sign In/Log In
				</Link>
			</div>
		</div>
	);
}