'use client'

import React, { useDebugValue, useEffect, useRef, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button2";
import { useChat } from 'ai/react';

const ModalWindow = ({ content, close, userInput }: { content: any, close: any, userInput: string }) => {
  
  const allStrengths: any[] = [];
  const allAreas: any[] = [];
  const overAll = content['Final Thoughts'].comment;
  useEffect(() => {
    content['Strengths'].forEach((strength: any) => {
      allStrengths.join(strength.description);
    });
    

    content['Areas for Improvement'].forEach((area: any) => {
      allAreas.join(area.description);
    });

  }, []);
  
  const nurbek = `This is the essay content: + ${userInput} + . This is your feedback:  + ${allStrengths} + ,  + ${allAreas} + ,  + ${overAll} + . Give a completed version based on your feedback. DO NOT SEND ANY EXTRA WORDS. JUST THE ESSAY ITSELF.`
  const { messages, handleSubmit } = useChat({
    api: '/api/final',
    onError: (e) => {
      console.log(e);
    },
    initialInput: nurbek
  });
  const score = parseInt(content['Final Thoughts'].score) || 0;
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    const animationDuration = 1000;
    const steps = 100;
    const increment = score / steps;
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= score) {
        setProgress(score);
        clearInterval(interval);
      } else {
        setProgress(currentProgress);
      }
    }, animationDuration / steps);

    return () => clearInterval(interval);
  }, [score]);

  const getColor = (score: number) => {
    if (score <= 20) return '#ff4d4d';
    if (score <= 45) return '#ffbb33';
    if (score <= 70) return '#ffeb3b';
    return '#4caf50';
  };

  const color = getColor(score);
  
  const [isOpen, setIsOpen] = useState(false);
  const [buttonOpen, setButtonOpen] = useState(true);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const showButton = () => {
    setButtonOpen(!buttonOpen);
  }


  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(e);
    toggleOpen();
    showButton()
  }

  const chatParent = useRef<HTMLUListElement>(null);

  
  return (
    <div className='md:w-3/5 w-5/6 min-h-fit bg-black-1 absolute rounded-lg p-5 z-10 md:top-20 md:-right-48 left-1/2 top-10 transform -translate-x-1/2'>
      <IoMdClose className='text-white-1 w-6 h-6 cursor-pointer absolute right-3 top-3' onClick={close} />
      {
        !isOpen && (
          <div className='md:flex'>
            <div className='md:w-1/2 text-center'>
              <div className='flex flex-col items-center font-thin text-white-1'>
                <div className='w-32 h-24 mt-8 font-semibold text-xl text-white-1'>
                  <CircularProgressbar
                    className='text-white-1'
                    value={progress}
                    text={`${Math.round(progress)}%`}
                    circleRatio={0.5}
                    styles={buildStyles({
                      rotation: 0.75,
                      textColor: '#fff',
                      pathColor: color,
                      trailColor: 'rgba(255, 255, 255, 0.2)',
                    })}
                  />
                </div>
              </div>
              <div className='text-white-1 w-fit pt-2'>
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
              <h2 className='font-semibold pt-4 pb-1 text-white-1'>Areas of Improvement</h2>
              <Accordion type='single' collapsible className='w-full text-white-1 '>
                {content['Areas for Improvement'].map((area: any, index: any) => (
                  <AccordionItem key={index} value={'index-' + index}>
                    <AccordionTrigger>
                      {area.reason}
                    </AccordionTrigger>
                    <AccordionContent>
                      {area.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
      )}
      <ul ref={chatParent}>
        {isOpen && messages.map(({ content, id, role }) => (
          role === 'user' ? (
            <div key={id}></div>
          ):(
          <div key={id} className='h-fit text-white-1 text-base font-normal'>
            <h1 className='text-slate-500 text-sm py-2'>Always remeber that AI will not write you the best essay. It will help YOU to write one!</h1>
            {content}
          </div>
          )))}
      </ul>
      {
        buttonOpen && (
          <div className='flex justify-center pt-2'>
            <Button variant='outline' onClick={handleFormSubmit}>Open Fixed Essay</Button>
          </div>
        )
      }
      {
        !buttonOpen && (
          <div className='flex flex-col justify-center pt-3 w-full'>
            <Button variant='outline' className='w-fit mx-auto ' onClick={toggleOpen}>
              Go Back
            </Button>
            <p className='text-thin text-xs text-slate-500 pt-2 mx-auto'>AI can make mistakes. We highly encourage to not just copy it.</p>
          </div>
        )
      }
      
      
    </div>
  )
};

export default ModalWindow;
