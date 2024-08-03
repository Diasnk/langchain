import ModalWindow from "@/app/components/ModalWindow"
import { Button } from "@/components/ui/button"
import Link from "next/link"


const Tutorial = () => {
  const data = [
    {
        id: 1,
        content: 'Narrative Structure',
        description: "Here’s the structure that most American films use. It’s a structure as old as storytelling itself, and storytellers have been using it for thousands of years. I’ll refer to it as narrative structure. You can think of this approach to writing an essay as breaking down into three basic sections: 1) Challenges + Effects; 2) What I Did About Them; 3) What I Learned. While those may be fairly clear just based on their names, here’s a brief breakdown, followed by a sample essay to illustrate:",
        path: '/narrative'
    },
    {
        id: 2,
        content: 'Montage Structure',
        description: "Montage is something you’ve likely all encountered before, but some may not be familiar with the word itself. It’s a technique that involves using separate elements (pictures, words, music, etc.) to create a new whole. In filmmaking, the montage effect is used to condense space and time so that information can be delivered in a more efficient way.Take the classic “falling in love” montage, commonly used in romantic comedies. We don’t see every single interaction. Instead, we see: one surprises the other at work, probably with flowers; they walk through the park; they dance in the rain; they pass an engagement ring store. You get the idea. A few images work together to tell a larger story. And you can use this technique for your essay to tell a larger story about you.",
        path: '/montage'
    },
  ]  

  
  return (
    <div>
      <h1 className="font-bold text-white-1 text-3xl p-10">
        Two Main Structures for Writing an Essay
      </h1>
      <div className="w-full justify-center h-screen bg-black grid md:grid-cols-2">
          {
              data.map(({content, description, id, path}) => (
                <Link key={id} href={path}>
                  <div  className='w-80 h-96 bg-black-2 rounded-lg shadow-lg flex flex-col my-6 transition-transform transform hover:scale-105 mx-auto'>
                    <div className='p-4'>
                      <h1 className='text-white-1 font-bold text-lg border-b border-white-1 pb-2 truncate'>{content}</h1>
                    </div>
                    <div className='px-4 flex-1 overflow-hidden '>
                      <p className='text-slate-300 text-justify overflow-hidden text-ellipsis'>{description}</p>
                    </div>
                    <div className='flex justify-between items-center p-3.5'>
                    </div>
                  </div>
                </Link>
              ))}
      </div>
      
      
    </div>
  )
}

export default Tutorial