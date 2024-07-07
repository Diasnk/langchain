import Link from "next/link";
import { BiSolidGroup } from 'react-icons/bi'


export default function Header() {
	return (
		<div className="fixed top-0 left-0 right-0 z-10 bg-[#FAFAF8] lg:px-10 px-4 py-5 flex justify-between items-center">
			<div >
				<Link href="./counselor">
					<h1 className="text-black font-semibold  hover:underline transition-all">Counselor</h1>
				</Link>
			</div>
			<div className="flex items-center justify-center gap-5">
				<Link href="./" className="flex items-center font-semibold text-black  hover:underline transition-all">
					Main Page
				</Link>
				<Link href="./countries" className="flex items-center font-semibold text-black  hover:underline transition-all">
					Sign In/Log In
				</Link>
			</div>
		</div>
	);
}