/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YDHro1RXZ4C
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"

export default function Component() {
  const [essays, setEssays] = useState([
    {
      id: 1,
      title: "The Importance of Lifelong Learning",
      content:
        "In today's rapidly changing world, the ability to adapt and continuously learn is more important than ever. Lifelong learning not only enhances our personal growth and fulfillment, but it also...",
      createdAt: "2023-05-15",
    },
    {
      id: 2,
      title: "The Power of Mindfulness in Daily Life",
      content:
        "Mindfulness, the practice of being fully present and aware in the moment, has the power to transform our lives in profound ways. By cultivating mindfulness, we can reduce stress, increase focus and...",
      createdAt: "2023-04-22",
    },
    {
      id: 3,
      title: "Exploring the Intersection of Technology and Creativity",
      content:
        "In the digital age, technology has become an integral part of our creative processes. From digital art and music production to innovative software development, the fusion of technology and creativity...",
      createdAt: "2023-03-08",
    },
    {
      id: 4,
      title: "The Importance of Empathy in a Divided World",
      content:
        "In a world that often feels increasingly polarized, the ability to empathize with others has become more crucial than ever. Empathy, the capacity to understand and share the feelings of another...",
      createdAt: "2023-02-19",
    },
  ])
  const [newEssay, setNewEssay] = useState({
    title: "",
    content: "",
  })
  const handleAddEssay = () => {
    const newId = essays.length + 1
    const newEssayObj = {
      id: newId,
      title: newEssay.title,
      content: newEssay.content,
      createdAt: new Date().toISOString().slice(0, 10),
    }
    setEssays([...essays, newEssayObj])
    setNewEssay({ title: "", content: "" })
  }
  const handleDeleteEssay = (id: any) => {
    setEssays(essays.filter((essay) => essay.id !== id))
  }
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Essays</h1>
        <p className="text-gray-500">Here you can view and manage all your stored essays.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {essays.map((essay) => (
          <div
            key={essay.id}
            className="bg-white-1 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{essay.title}</h2>
              <p className="text-gray-500 line-clamp-3">{essay.content}</p>
            </div>
            <div className="bg-gray-100 px-4 py-2 text-sm text-gray-500 rounded-b-2xl flex justify-between items-center">
              <span>{essay.createdAt}</span>
              <button
                onClick={() => handleDeleteEssay(essay.id)}
                className="bg-red-500 hover:bg-red-700 text-white-1 font-bold py-1 px-2 rounded-md focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Add New Essay</h2>
        <div className="bg-white-1 rounded-2xl shadow-md p-6">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={newEssay.title}
              onChange={(e) => setNewEssay({ ...newEssay, title: e.target.value })}
              className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
              Content
            </label>
            <textarea
              id="content"
              value={newEssay.content}
              onChange={(e) => setNewEssay({ ...newEssay, content: e.target.value })}
              className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={5}
            />
          </div>
          <button
            onClick={handleAddEssay}
            className="bg-blue-500 hover:bg-blue-700 text-white-1 font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
          >
            Add Essay
          </button>
        </div>
      </div>
    </div>
  )
}