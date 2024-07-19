'use client'

import { Input } from "@/components/ui/input2"
import { Button } from "@/components/ui/button2"
import { useChat } from "ai/react"
import { useRef, useEffect, useState } from 'react'
import ExpandableCard from "@/app/components/Section"
import ModalWindow from "@/app/components/ModalWindow"
import { CgSpinner } from "react-icons/cg";

const Feedback = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: 'api/test',
    onError: (e) => {
      console.log('Error:', e.message);
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  const chatParent = useRef<HTMLUListElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatParent.current) {
      chatParent.current.scrollTop = chatParent.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Function to parse JSON safely
  function parseJson(content: any) {
    try {
      return JSON.parse(content);
    } catch (error) {
    //   console.error("Error parsing JSON:", error);
      return null;
    }
  }

  // Extract the last message from the assistant
  const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null;

  const feedback = lastMessage ? parseJson(lastMessage.content) : null;

  useEffect(() => {
    if (feedback) {
      setIsOpen(true);
    }
  }, [feedback]);

  return (
    <div>
      <div className={`w-full flex flex-col justify-center px-4 mx-auto ${isOpen ? 'blurred' : ''}`}>
        <h1 className="text-start mt-10 font-bold text-3xl text-white-1 py-3">
          Send Your Whole Essay!
        </h1>
        <form onSubmit={handleSubmit} className="flex w-full max-w-3xl mt-2 mx-auto items-center">
          <textarea
            className=" min-w-full  p-2 border-2 rounded-md border-black overflow-y-scroll h-10 max-h-40"
            placeholder={"Enter your note here"}
            value={input}
            onChange={handleInputChange}
          ></textarea>
          {isLoading ? (
            <Button className="ml-2 bg-gray-800 " type="submit">
              <CgSpinner className="animate-spin h-5 w-5 mr-3" /> 
                <div className="font-thin">
                  Processing...
                </div>
            </Button>
          ) : (
            <Button className="ml-2 bg-gray-800" type="submit">
              Submit
            </Button>
          )}
        </form>
        <div className="w-full flex justify-center pt-4">
            <div className="text-white-3 font-semibold text-xl">
                Your Essay
            </div>
        </div>
        <ul ref={chatParent} className="mt-6 w-full min-h-screen flex flex-col justify-center">
          {messages.map(({ content, id, role }) => (
            role === 'user' && (
              <div key={id} className="h-min mb-2 p-4 bg-black-1 text-white-1 rounded w-full">
                {content}
              </div>
            )
          ))}
        </ul>
      </div>

      {isOpen && feedback && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <ModalWindow
            ref={modalRef}
            content={feedback}
            onClose={closeModal}
          />
        </div>
      )}
    </div>
  );
};

export default Feedback;
