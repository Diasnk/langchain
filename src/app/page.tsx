'use client'

import { useRouter } from "next/navigation"
import { Graph } from "./components/graph"
import Header from "./components/header"
import Footer from "./components/footer"
import { FaUserCircle } from "react-icons/fa";
import { SignInButton } from "@clerk/nextjs"



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
                        <button className="relative h-fit inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white-1 hover:text-black-1 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 focus:ring-2 focus:outline-none focus:ring-green-200" 
                            onClick={() => {
                                router.push("./feedback")
                            }}>
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black-1 rounded-md group-hover:bg-opacity-0">
                                    Get Your Feedback
                                </span>
                        </button>

                    </div> 
                </div>
                <section className="w-full py-10">
                    <div className="container space-y-12 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg text-black-1 bg-muted px-3 py-1 text-sm">Key Features</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Elevate Your College Essays</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Our essay review tool provides personalized feedback to help you craft the perfect college application
                                essay.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Personalized Feedback</h3>
                                <p className="text-sm text-muted-foreground">
                                Get detailed feedback on your essay&apos;s structure, content, and tone to help you make it shine.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Grammar and Spelling Checks</h3>
                                <p className="text-sm text-muted-foreground">
                                Our tool will catch any grammar or spelling errors to ensure your essay is polished and professional.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Essay Structure Tips</h3>
                                <p className="text-sm text-muted-foreground">
                                Learn how to craft a compelling introduction, body, and conclusion that will captivate admissions
                                officers.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Tone and Voice Guidance</h3>
                                <p className="text-sm text-muted-foreground">
                                Receive feedback on your essay&apos;s tone and voice to ensure it aligns with the college&apos;s desired style.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Unlimited Revisions</h3>
                                <p className="text-sm text-muted-foreground">
                                Don&apos;t worry about getting it perfect the first time - revise your essay as many times as needed.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Expert Recommendations</h3>
                                <p className="text-sm text-muted-foreground">
                                Our team of experienced essay coaches will provide personalized suggestions to take your essay to the
                                next level.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-black-3">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Users Say</h2>
                        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Hear from students who have used our essay review tool to craft the perfect college application.
                        </p>
                        </div>
                        <div className="mx-auto w-full max-w-4xl space-y-6">
                        <div className="grid gap-4 rounded-lg border bg-background p-6">
                            <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                                <FaUserCircle className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-lg text-black-3 font-bold">Sarah Johnson</h4>
                                <p className="text-sm text-muted-foreground">University of California, Berkeley</p>
                            </div>
                            </div>
                            <p className="text-muted-foreground">
                            &quot;The feedback I received from the essay review tool was invaluable. It helped me craft a compelling
                            and authentic essay that really showcased my strengths and passion. I&apos;m so grateful for this
                            resource!&quot;
                            </p>
                        </div>
                        <div className="grid gap-4 rounded-lg border bg-background p-6">
                            <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                                <FaUserCircle className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-black-3">Michael Lee</h4>
                                <p className="text-sm text-muted-foreground">University of Michigan</p>
                            </div>
                            </div>
                            <p className="text-muted-foreground">
                            &quot;I was really struggling to find my voice and stand out in my college essays, but the personalized
                            feedback from this tool helped me do just that. I&apos;m so glad I used it - it made all the difference in
                            my applications.&quot;
                            </p>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-black-1">Get Started</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Try Our Essay Review Tool Today</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Sign up for free to get personalized feedback on your college application essays.
                            </p>
                        </div>
                        <div className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            <SignInButton>
                                Get Started
                            </SignInButton>

                        </div>
                        
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>    
    )
}