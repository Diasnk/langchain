'use client'

import { Input } from "@/components/ui/input2"
import { Button } from "@/components/ui/button2"
import { useChat } from "ai/react"
import { useRef, useEffect, useState } from 'react'
import { clear } from "console"
import { stringify } from "querystring"


export function Chat() {
    


    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: 'api/ex4',
        onError: (e) => {
            console.log(e)
        }
    })
 
    let mess
    let out:any

    messages.map((m, index)=>{
        m.role == 'assistant' ? (
            mess = m.content,
            // console.log(JSON.stringify(mess))
            // mess = JSON.parse(m.content),
            console.log(mess)
        )
        :
        (
            console.log('')
        )
    })
    
    const chatParent = useRef<HTMLUListElement>(null)


    useEffect(() => {
        const domNode = chatParent.current
        if (domNode) {
            domNode.scrollTop = domNode.scrollHeight
        }
    })

    return (
        <main className="flex flex-col w-full h-screen bg-black">

            <div className="py-4 text-white border-b w-full max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold">Essay Writer Chat</h1>
            </div>

            <section className="p-4">
                <form onSubmit={handleSubmit} className="flex w-full max-w-3xl mx-auto items-center">
                    <Input className="flex-1 min-h-[40px]" placeholder="Type your question here..." type="text" value={input} onChange={handleInputChange} />
                    <Button className="ml-2 bg-gray-800" type="submit">
                        Submit
                    </Button>
                </form>
                <div>

                </div>
            </section>

            <section className="container px-0 pb-10 flex flex-col flex-grow gap-4 mx-auto max-w-3xl h-full">
                <ul ref={chatParent} className="h-1 p-4 flex-grow bg-gray-300 rounded-lg overflow-y-auto flex flex-col gap-4">
                    {messages.map((m, index) => (
                        <div key={index}>
                            {m.role === 'user' ? (
                                <li key={m.id} className="flex flex-row">
                                    <div className="rounded-xl p-4 bg-background shadow-md flex">
                                        <p className="">{m.content}</p>
                                    </div>
                                </li>
                            ) : (
                                <li key={m.id} className="flex flex-row-reverse">
                                    <div className="rounded-xl p-4 bg-background shadow-md flex w-3/4">
                                        <p className="">{m.content}</p>
                                    </div>
                                </li>
                            )}
                        </div>
                    ))}
                </ul >
            </section>

            
        </main>
    )
}
