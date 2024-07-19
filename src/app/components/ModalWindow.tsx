import React, { forwardRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { IoMdClose } from "react-icons/io"

const ModalWindow = forwardRef<HTMLDivElement, { content: any, onClose: () => void }>(({ content, onClose }, ref) => {
  const progressValue = content['Final Thoughts'].score;

  return (
    <div ref={ref} className='w-3/5 min-h-fit bg-black-1 rounded-lg p-5 relative z-30'>
      <IoMdClose className='text-white-1 w-6 h-6 cursor-pointer absolute right-3 top-3' onClick={onClose} />
      <div className='md:flex'>
        <div className='md:w-1/2 text-center'>
          <div className='flex flex-col items-center font-thin text-white-1'>
            <div className='w-20 h-20 mt-8'>
              <CircularProgressbar value={progressValue} text={`${progressValue}%`} />
            </div>
          </div>
          <div className='text-white-1 w-fit pt-6'>
            <p>{content['Final Thoughts'].score}</p>
            <p className='pt-4 font-normal text-[15px] mr-5 text-start'>{content['Final Thoughts'].comment}</p>
          </div>
        </div>
        <div className='md:w-1/2'>
          <Accordion type="single" collapsible className="w-full text-white-1 pt-4">
            <h2 className='font-semibold'>Strengths</h2>
            {content['Strengths'].map((strength: any, index: any) => (
              <AccordionItem key={index} value={'index-' + index}>
                <AccordionTrigger>
                  {strength.reason}
                </AccordionTrigger>
                <AccordionContent>
                  {strength.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type='single' collapsible className='w-full text-white-1 '>
            {content['Areas for Improvement'].map((strength: any, index: any) => (
              <AccordionItem key={index} value={'index-' + index}>
                <AccordionTrigger>
                  {strength.reason}
                </AccordionTrigger>
                <AccordionContent>
                  {strength.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
});

export default ModalWindow;
