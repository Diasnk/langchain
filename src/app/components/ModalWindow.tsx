'use client'

import React, { useEffect, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { IoMdClose } from "react-icons/io";
import { Progress } from '@/components/ui/progress';
const ModalWindow = ({ content, close }: { content: any, close: any }) => {

  const percentage = content['Final Thoughts'].score;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const animationDuration = 1000; // 1 second
    const increment = percentage / (animationDuration / 10);

    const interval = setInterval(() => {
      setProgress((prev: any) => {
        if (prev >= percentage) {
          clearInterval(interval);
          return percentage;
        }
        return prev + increment;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [percentage]);

  const getColor = (percentage: any) => {
    if (percentage <= 20) return '#ff4d4d'; // Red
    if (percentage <= 50) return '#ffbb33'; // Orange
    if (percentage <= 75) return '#ffeb3b'; // Yellow
    return '#4caf50'; // Green
  };

  const color = getColor(percentage);
  
  return (
    <div className='md:w-3/5 w-5/6 min-h-fit bg-black-1 absolute rounded-lg p-5 z-10 md:top-20 md:-right-48 left-1/2 top-48 transform -translate-x-1/2'>
      <IoMdClose className='text-white-1 w-6 h-6 cursor-pointer absolute right-3 top-3' onClick={close} />
      <div className='md:flex'>
        <div className='md:w-1/2 text-center'>
          <div className='flex flex-col items-center font-thin text-white-1'>
            <div className='w-20 h-20 mt-8 font-semibold text-xl'>
            <CircularProgressbar
              value={percentage}
              text={percentage}
              circleRatio={0.5}
              styles={buildStyles({
                rotation: 0.75,
                textColor: '#000',
                pathColor: color,
                trailColor: '#d6d6d6',
              })}
            />
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
          <h2 className='font-semibold pt-4 pb-1 text-white-1'>Areas of Improvement</h2>
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
};

export default ModalWindow;
