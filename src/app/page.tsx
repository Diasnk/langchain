"use client"

import { Button } from "@/components/ui/button2"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useRouter } from "next/navigation"


export default function Home() {
    const data = [
        {
            id: 1,
            content: "Get personalized recommendations on how to improve your essay's structure, clarity, and impact.",
            header: "Expert Advice"
        },
        {
            id: 2,
            content: "Receive detailed feedback on your essay’s strengths and areas for improvement.",
            header: "Comprehensive Reviews"
        },
        {
            id: 3,
            content: "Let our AI handle the nitty-gritty details of grammar, punctuation, and style, ensuring your essay is error-free.",
            header: "Accurate Corrections"
        },
        {
            id: 4,
            content: "Enjoy a seamless and intuitive interface that makes essay assistance accessible to everyone.",
            header: "Easy to Use"
        },
        {
            id: 5,
            content: "Access top-notch essay assistance anytime, anywhere. Whether you're burning the midnight oil or working on a last-minute submission, our AI counselor is always ready to help.",
            header: "24/7 Availability"
        },
        {
            id: 6,
            content: "Get expert essay guidance at a fraction of the cost of traditional college counselors.",
            header: "Affordable"
        },
        {
            id: 7,
            content: "Utilize the AI's iterative feedback to progressively enhance your essay drafts, ensuring each version is better than the last and perfectly polished for submission.",
            header: "Continuous Improvement"
        },

    ]


    const router = useRouter()
    return(
        <>
			<div>
				<div className='w-full flex h-screen justify-between pr-12 pt-12'>
					<div>
						<h1 className='pt-32 pl-10 font-bold text-4xl text-slate-500'>Unlock Your Writing <br></br>Potential With </h1>
						
						<h1 className='pl-10 font-bold text-4xl text-slate-700'>AI-Powered Essay Assistance</h1>
						<Button 
						className='bg-gray-800 text-white hover:bg-gray-600 mt-10 ml-10 font-semibold'  
						onClick={() => {
							router.push("./counselor")
						}}>Open Chat With Counselor</Button>
                        
                        <p className="pl-10 text-md pt-8">
                            Tired of writing college essays? Take the stress out of essay writing and embrace the future of academic support. Join countless students who have already transformed their writing with our AI-powered tool.
                        </p>
					</div>
					<img className='w-1/2 ' src='educator.svg'></img>
				</div>

                <div className="w-full flex justify-center">
                <Carousel className="w-2/3">
                    <CarouselContent className="-ml-1">
                        {data.map((card, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex flex-col items-center pt-4 min-h-64">
                                        <h1 className="text-lg font-semibold">{card.header}</h1>
                                        <span className="text-sm font-normal">{card.content}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>
                </div>


                <div className='w-full flex h-screen justify-between pr-12 pt-10'>
                    <img className='w-1/2 pl-10' src='online.svg'></img>
					<div>
						<h1 className='pt-32 font-bold text-4xl text-slate-500'>Future AI Chat Bot <br></br> Is a Flexible Solution </h1>
						
						<h1 className='pl-10 font-bold text-4xl text-slate-700'>For your travel problems</h1>
						<p>

                        </p>
					</div>
				</div>
			</div>
		</>
  )
}