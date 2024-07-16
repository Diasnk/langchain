'use client'

import { Input } from "@/components/ui/input2"
import { Button } from "@/components/ui/button2"
import { useChat } from "ai/react"
import { useRef, useEffect } from 'react'

const Feedback = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
      api: 'api/test',
      onError: (e) => {
          console.log('Error:', e.message);
      }
  });

  const chatParent = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (chatParent.current) {
      chatParent.current.scrollTop = chatParent.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div>
        <div className="max-w-4xl px-4 mx-auto">
            <h1 className="text-start mt-10 font-bold text-3xl text-white-1 py-3">
                Send Your Whole Essay!
            </h1>
            <form onSubmit={handleSubmit} className="flex w-full max-w-3xl mt-2 mx-auto items-center">
                <textarea
                    className=" w-full p-2 border-2 rounded-md border-black overflow-y-scroll h-10 max-h-40"
                    placeholder={"Enter your note here"}
                    value={input}
                    onChange={handleInputChange}
                ></textarea>
                <Button className="ml-2 bg-gray-800" type="submit">
                    Submit
                </Button>
            </form>
                <ul ref={chatParent} className="mt-6 w-full grid min-h-screen grid-cols-2 gap-4">
                    <div className="text-white-3 font-semibold justify-self-center text-xl">
                        Your Essay
                    </div>
                    <div className="text-white-3 font-semibold justify-self-center text-xl">
                        Feedback
                    </div>
                    {messages.map(({ content, id, role }) => (
                        role === 'user' ? (
                            <div key={id} className="h-min mb-2 p-4 bg-black-4 text-white-1 rounded">
                                {content}
                            </div>
                        ):(
                            <div key={id} className=" mb-2 p-4 bg-gray-100 rounded">
                                {content}
                            </div>
                        )
                    ))}
                </ul>
        </div>
    </div>
  );
};

export default Feedback;
