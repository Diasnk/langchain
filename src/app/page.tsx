'use client'

import { useRouter } from "next/navigation"
import { Graph } from "./components/graph"
import Header from "./components/header"
import Footer from "./components/footer"


export default function Landing() {
    const router = useRouter()
    return(
        <div>
            <Header/>
            <div className="bg-black-1 text-white-1">
                <div className="w-full h-screen grid grid-cols-1">
                    <div className="rounded-full z-10 top-2/5 left-1/2 bg-[#96a7bb] lg:w-96 w-64 h-16 blur-3xl lg:h-56 absolute -translate-x-1/2 -translate-y-full"></div>
                
                    <div className="justify-self-center text-[#96a7bb] text-center self-center pt-2 lg:pt-20">
                        <h1 className="mx-10 font-bold text-2xl lg:text-5xl ">Unlock Your Full Writing Potential With</h1>
                        <h1 className="font-bold text-xl lg:text-5xl">AI-Powered Essay Assistance</h1>
                        <h2>A.K.A Jeremy</h2>
    
                        <p className="lg:mx-64 mx-10 mt-10 text-white-1">Tired of writing college essays? Take the stress out of essay writing and embrace the future of academic support. Join countless students who have already transformed their writing with our AI-powered tool.</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <button className="relative h-fit inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white-1 hover:text-black rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 focus:ring-2 focus:outline-none focus:ring-green-200" 
                            onClick={() => {
                                router.push("./feedback")
                            }}>
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black-1 rounded-md group-hover:bg-opacity-0">
                                    Message
                                </span>
                        </button>
                        

                    {/* <button className="w-24 h-10 rounded-xl border">Message</button> */}
                    </div>

                </div>
            </div>
            <Footer/>
        </div>    
    )
}