'use client'

import { useRouter } from "next/navigation"


export default function Landing() {
    const router = useRouter()
    return(
      <div className="bg-black text-white">
            <div className="w-full h-screen grid grid-cols-1">
                <div className="rounded-full z-10 top-1/3 left-1/2 bg-[#96a7bb] w-80 blur-3xl h-56 absolute -translate-x-1/2 -translate-y-full"></div>
              
                <div className="justify-self-center text-[#96a7bb] text-center self-center pt-20">
                    <h1 className="font-bold text-5xl">Unlock Your Full Writing Potential With</h1>
                    <h1 className="font-bold text-5xl">AI-Powered Essay Assistance</h1>
                    <h2>A.K.A Jeremy</h2>
  
                    <p className="mx-64 mt-10 text-white">Tired of writing college essays? Take the stress out of essay writing and embrace the future of academic support. Join countless students who have already transformed their writing with our AI-powered tool.</p>
                </div>
                <div className="w-full flex justify-center">
                    <button className="relative h-fit inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white hover:text-black rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 focus:ring-2 focus:outline-none focus:ring-green-200" 
                        onClick={() => {
				            router.push("./counselor")
						}}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
                                Message
                            </span>
                    </button>
                  {/* <button className="w-24 h-10 rounded-xl border">Message</button> */}
              </div>
          </div>
      </div>
    )
  }