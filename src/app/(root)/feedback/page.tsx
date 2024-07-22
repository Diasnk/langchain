'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Input } from "@/components/ui/input2"
import { Button } from "@/components/ui/button2"
import { useChat } from "ai/react"
import ExpandableCard from "@/app/components/Section"
import ModalWindow from "@/app/components/ModalWindow"
import ModalWindowLoading from '@/app/components/ModalWindowLoading'

const Feedback = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: 'api/test',
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
        <h1 className="text-start mt-10 font-bold text-3xl text-white-1 py-3">
          Send Your Whole Essay!
        </h1>
        <form onSubmit={handleSubmit} className="flex w-full max-w-3xl mt-2 mx-auto items-center">
          <textarea
            className="w-full p-2 border-2 rounded-md border-black overflow-y-scroll h-10 max-h-40"
            placeholder={"Enter your note here"}
            value={input}
            onChange={handleInputChange}
          ></textarea>
          <Button className="ml-2 bg-gray-800" type="submit">
            Submit
          </Button>
        </form>
        <div className="w-full flex justify-center pt-4">
            <div className="text-white-3 font-semibold text-xl">
                Your Essay
            </div>
        </div>
        <ul ref={chatParent} className="mt-6 w-full min-h-screen flex flex-col justify-center">
          {messages.map(({ content, id, role }) => (
            role === 'user' && (
              <div key={id} className='w-full h-fit flex '>

                <div key={id} className="h-min mb-2 p-4 bg-black-1 text-white-1 rounded w-5/6">
                  {content}
                </div>
                <Button key={id} className='text-white-1 bg-black-1 rounded-lg' onClick={toggleOpen}> Open Modal Window</Button>
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
