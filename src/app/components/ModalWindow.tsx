import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Image from 'next/image'
import { IoMdClose } from "react-icons/io"


const ModalWindow = () => {
  return (
    <div className='w-3/5 min-h-fit bg-black-1 top-20 absolute z-10 rounded-lg'>
        <div className='p-3 w-full md:flex'>
            <div className='md:w-1/2 text-center'>
                <div className='flex font-thin text-white-1'>
                    <Image className='ml-3 mt-8' src='icons/logo.svg' width={80} height={80} alt='progress'/>
                    <div className='h-fit w-fit m-3 '>This is your overall progress!</div>
                </div>
                
            </div>
            <div className='md:w-1/2'>
                <div>
                    <IoMdClose className='text-white-1 w-6 h-6 cursor-pointer absolute right-3'/>
                </div>
                <Accordion type="single" collapsible className="w-full text-white-1 pt-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <AccordionItem key={index} value={"index-" + index}>
                            <AccordionTrigger>
                                This is the start of something new
                            </AccordionTrigger>
                            <AccordionContent>
                                Managing a small business today is already tough. Avoid further
                                complications by ditching outdated, tedious trade methods. Our
                                goal is to streamline SMB trade, making it easier and faster
                                than ever.
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    </div>
  )
}

export default ModalWindow