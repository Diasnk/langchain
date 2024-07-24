'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Input } from "@/components/ui/input2"
import { Button } from "@/components/ui/button2"
import { useChat } from "ai/react"
import ModalWindow from "@/app/components/ModalWindow"
import ModalWindowLoading from '@/app/components/ModalWindowLoading'
import MobileNav from '@/app/components/MobileNav'

const Feedback = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: 'api/feedback',
    onError: (e) => {
      console.log('Error:', e.message);
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const chatParent = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (chatParent.current) {
      chatParent.current.scrollTop = chatParent.current.scrollHeight;
    }
  }, [messages]);

  // Function to parse JSON safely
  function parseJson(content: any) {
    try {
      return JSON.parse(content);
    } catch (error) {
      return null;
    }
  }

  // Extract the last message from the assistant
  useEffect(() => {
    const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null;
    const parsedFeedback = lastMessage ? parseJson(lastMessage.content) : null;
    setFeedback(parsedFeedback);
    if (parsedFeedback) {
      setIsOpen(true);
    }
  }, [messages]);

  return (
    <div>
      <div className="w-full flex flex-col justify-center px-4 mx-auto">
        <MobileNav />
        <h1 className="text-start mt-10 font-bold text-3xl text-white-1 py-3">
          Put Your Essay Here!
        </h1>
        <form onSubmit={handleSubmit} className="flex w-full mt-2 mx-auto items-center">
          <textarea
            className="w-full p-2 border-2 rounded-md border-black overflow-y-scroll h-10 max-h-40"
            placeholder={"Enter your essay here"}
            value={input}
            onChange={handleInputChange}
          ></textarea>
          <Button className="ml-2 bg-gray-800" type="submit">
            Get Feedback
          </Button>
        </form>
        
        <ul ref={chatParent} className="mt-6 w-full min-h-screen flex flex-col justify-center">
          {messages.map(({ content, id, role }) => (
            role === 'user' && (
              <div key={id} className='w-full h-fit grid grid-cols-8'>
                <div className="text-white-3 font-semibold text-xl col-span-8 w-full flex justify-center pb-4">
                    Your Essay
                </div>
                <div key={id} className="h-min mb-2 p-4 bg-black-1 text-white-1 rounded w-full col-span-6">
                  {content}
                </div>
                <div>
                  <button key={id} className='relative h-fit inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white-1 hover:text-black rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 focus:ring-2 focus:outline-none focus:ring-green-200 col-span-2 ml-4' onClick={toggleOpen}> 
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black-1 rounded-md group-hover:bg-opacity-0">
                      Open ModalWindow
                    </span>
                  </button>
                </div>
              </div>
            )
          ))}
        </ul>

        {isLoading && (
          <ModalWindowLoading />
        )}

        {isOpen && feedback && (
            <ModalWindow
                close={toggleOpen}
                content={feedback}
            />
        )}
      </div>
    </div>
  );
};

export default Feedback;
