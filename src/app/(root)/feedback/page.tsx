'use client'

import React, { useRef, useEffect, useState } from 'react'
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
  const [userEssay, setUserEssay] = useState('');

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const chatParent = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (chatParent.current) {
      chatParent.current.scrollTop = chatParent.current.scrollHeight;
    }
  }, [messages]);

  function parseJson(content: any) {
    try {
      return JSON.parse(content);
    } catch (error) {
      return null;
    }
  }

  useEffect(() => {
    const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null;
    const parsedFeedback = lastMessage ? parseJson(lastMessage.content) : null;
    setFeedback(parsedFeedback);
    if (parsedFeedback) {
      setIsOpen(true);
    }
  }, [messages]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserEssay(input);
    handleSubmit(e);
  };

  return (
    <div>
      <div className="w-full flex flex-col h-full justify-center pl-2 md:px-4 md:mx-auto">
        <MobileNav />
        <h1 className="text-start mt-10 font-bold text-3xl text-white-1 py-3">
          Put Your Essay Here!
        </h1>
        <form onSubmit={handleFormSubmit} className="flex flex-col md:flex-row gap-4 md:gap-0 w-full mt-2 mx-auto items-center">
          <textarea
            className="w-full p-2 border-2 bg-black-2 rounded-lg border-gray-600 text-white-1 placeholder:italic "
            placeholder={"Enter your essay here..."}
            value={input}
            onChange={handleInputChange}
            rows={5}
          ></textarea>
          <Button className="md:ml-5 hover:bg-slate-800" type="submit">
            Get Feedback
          </Button>
        </form>
        
        <ul ref={chatParent} className="mt-6 w-full min-h-screen flex flex-col justify-center">
          {messages.map(({ content, id, role }) => (
            role === 'user' && (
              <div key={id} className='w-full h-fit md:grid md:grid-cols-8'>
                <div className="text-white-3 font-semibold text-xl md:col-span-5 w-full flex justify-center pb-4">
                    Your Essay
                </div>
                <div className='md:w-full flex justify-center  md:col-span-3 ml-2 md:ml-10 pb-4'>
                  <Button className='hover:bg-slate-800' onClick={toggleOpen}>
                    Open Feedback
                  </Button>
                </div>
                <div key={id} className="h-min mb-2 p-4 bg-black-1 text-white-1 rounded w-full col-span-7 text-justify">
                  {content}
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
                userInput={userEssay}
            />
        )}
      </div>
    </div>
  );
};

export default Feedback;