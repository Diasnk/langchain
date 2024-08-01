'use client'

import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import { useRef, useEffect, useState } from 'react';


export function Chat(
    { firstText }:{ firstText: { id: string, title: string, text: string } }
) {

    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/ex4',
        onError: (e) => {
            console.log(e);
        },
        initialInput: "Please me a feedback on the following essay: " +firstText.text  // Assuming you can pass initialInput to useChat to set the initial state
    });

    
    const chatParent = useRef<HTMLUListElement>(null);


    return (
        <main className="flex flex-col w-full h-screen bg-black">

            <div className="py-4 text-white border-b w-full max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold text-white-1">Essay Writer Chat</h1>
            </div>

            <section className="py-4">
                <form onSubmit={handleSubmit} className="flex w-full max-w-3xl mx-auto items-center">
                    <textarea
                        className="w-full p-2 border rounded-md bg-black-2 overflow-hidden text-white-1 max-h-40 placeholder:italic"
                        placeholder="Enter your essay here..."
                        value={input} 
                        onChange={handleInputChange}
                        rows={4}
                    ></textarea>
                    <Button className="ml-2 hover:bg-slate-800" type="submit">
                        Submit
                    </Button>
                </form>
            </section>

            <section className="container px-0 pb-10 flex flex-col flex-grow gap-4 mx-auto max-w-3xl h-full">
                <ul ref={chatParent} className="h-1 p-4 flex-grow bg-black-2 rounded-lg overflow-y-auto flex flex-col gap-4">
                    {messages.map((m, index) => (
                        <div key={index}>
                            {m.role === 'user' ? (
                                <li key={m.id} className="flex flex-row-reverse">
                                    <div className="rounded-xl p-4 bg-black-5 text-white-1 shadow-md flex">
                                        <p className="">{m.content}</p>
                                    </div>
                                </li>
                            ) : (
                                <li key={m.id} className="flex flex-row">
                                    <div className="rounded-xl p-4 bg-black-5 text-white-1 shadow-md flex w-3/4">
                                        <p className="">{m.content}</p>
                                    </div>
                                </li>
                            )}
                        </div>
                    ))}
                </ul >
            </section>

        </main>
    );
}
