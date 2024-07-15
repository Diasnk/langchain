import Link from "next/link";
import { BiSolidGroup } from 'react-icons/bi'


export default function Header() {
	return (
		<div className="text-[#96a7bb] bg-black lg:px-10 px-4 py-5 flex justify-between items-center">
			<div >
				<Link href="./" className="font-semibold  hover:underline transition-all">
					Jeremy
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