'use client'

import { Input } from "@/components/ui/input2"
import { Button } from "@/components/ui/button2"
import { useChat } from "ai/react"
import { useRef, useEffect } from 'react'
import ExpandableCard from "@/app/components/Section"

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
              <div key={id} className="h-min mb-2 p-4 bg-black-1 text-white-1 rounded w-full">
                {content}
              </div>
            )
          ))}
        </ul>


        <ul ref={chatParent} className="">
            <div className="text-white-3 font-semibold justify-self-center text-xl">
               Feedback
             </div>
             {feedback && (
            <div className="mb-2 p-4 bg-gray-100 rounded">
              <h2 className="text-xl font-bold mb-2">Strengths</h2>
              {feedback['Strengths'].map((strength: any, index: any) => (
                <ExpandableCard
                      key={index}
                      title="Strengths"
                      content={
                        <div>
                          <p><strong>Reason:</strong> {strength.reason}</p>
                          <p><strong>Description:</strong>{strength.description}</p>
                        </div>} 
                      footer={undefined}/>
              ))}
              <h2 className="text-xl font-bold mb-2">Areas of Improvement</h2>
              {feedback['Areas for Improvement'].map((strength: any, index: any) => (
                <ExpandableCard
                      key={index}
                      title="Strengths"
                      content={
                        <div>
                          <p><strong>Reason:</strong> {strength.reason}</p>
                          <p><strong>Description:</strong>{strength.description}</p>
                        </div>} 
                      footer={undefined}/>
              ))}
              <h2 className="text-xl font-bold mb-2">Final Thoughts</h2>
              <div>
                <strong>Score:</strong> {feedback['Final Thoughts'].score}
                <br />
                <strong>Comment:</strong> {feedback['Final Thoughts'].comment}
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Feedback;
