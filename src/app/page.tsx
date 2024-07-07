"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"


export default function Home() {
    const router = useRouter()
    return(
        <>
			<div>
				<div className='w-full flex h-screen justify-between pr-12 pt-24'>
					<div>
						<h1 className='pt-32 pl-10 font-bold text-4xl text-slate-500'>Future AI Chat Bot <br></br> Is a Flexible Solution </h1>
						
						<h1 className='pl-10 font-bold text-4xl text-slate-700'>For your travel problems</h1>
						<Button 
						className='bg-gray-800 text-white hover:bg-gray-600 w-24 m-10 font-semibold'  
						onClick={() => {
							router.push("./counselor")
						}}>Open Chat</Button>
					</div>
					<img className='w-1/2 ' src='educator.svg'></img>
				</div>
			</div>
		</>
  )
}