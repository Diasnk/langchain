'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState, useEffect } from 'react';
import { createWordAction, deleteEssayAction, fetchEssays } from '@/lib/actions/actions';
import EssayCard from '@/app/components/EssayCard';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import MobileNav from '@/app/components/MobileNav';

const Essays = () => {
  const [essayTitle, setEssayTitle] = useState('');
  const [essayText, setEssayText] = useState('');
  const [essays, setEssays] = useState<{ id: string, title: string, text: string }[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function loadEssays() {
      const savedEssays = await fetchEssays();
      const formattedEssays = savedEssays.map((essay) => ({
        id: essay.id,
        title: essay.title,
        text: essay.text,
      }));
      setEssays(formattedEssays);
    }

    loadEssays();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('essayTitle', essayTitle);
    formData.append('essayText', essayText);
    
    const response = await createWordAction(null, formData);
    setMessage(response.message);

    if (response.message === '') {
      setEssayTitle('');
      setEssayText('');
      const savedEssays = await fetchEssays();
      const formattedEssays = savedEssays.map((essay) => ({
        id: essay.id,
        title: essay.title,
        text: essay.text,
      }));
      setEssays(formattedEssays);
    }
  };

  const handleDelete = async (essayId: string) => {
    const response = await deleteEssayAction(essayId);
    setMessage(response.message);

    if (response.message === '') {
      const savedEssays = await fetchEssays();
      const formattedEssays = savedEssays.map((essay) => ({
        id: essay.id,
        title: essay.title,
        text: essay.text,
      }));
      setEssays(formattedEssays);
    }
  };

  return (
    <div className='pt-3'>
      <MobileNav />
      <h1 className='text-white-1 pt-5 pb-3 font-bold text-2xl'>My Essays</h1>
      <form className='' onSubmit={handleSubmit}>
        <div className='flex w-full flex-col gap-4 '>
          <Input 
            type="text" 
            value={essayTitle} 
            onChange={(e) => setEssayTitle(e.target.value)} 
            placeholder="Enter your essay's title here..." 
            className='w-full placeholder:text-black-1 placeholder:italic bg-[#e1e1e1]'        
            />
          <textarea
            className="w-full p-2 border-2 rounded-md bg-[#e1e1e1] overflow-y-scroll h-20 max-h-40 placeholder:text-black-1 placeholder:italic"
            placeholder={"Enter your essay here..."}
            value={essayText}
            onChange={(e) => setEssayText(e.target.value)}
          ></textarea>
          <Button className='w-fit hover:bg-slate-800' type="submit">Save Essay</Button>
        </div>
      </form>
      {message && <p>{message}</p>}
      <div className='w-full flex justify-center'>
        <div className='w-full grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-6'>
          {essays.length > 0 ? (
            essays.map((essay, index) => (
              <div key={index} className='w-64 h-80 bg-[#e1e1e1] rounded-lg shadow-lg flex flex-col my-6 transition-transform transform hover:scale-105'>
                <div className='p-4'>
                  <h1 className='text-gray-800 font-bold text-lg border-b border-black-3 pb-2 truncate'>{essay.title}</h1>
                </div>
                <div className='px-4 flex-1 overflow-hidden '>
                  <p className='text-black-4 text-justify overflow-hidden text-ellipsis'>{essay.text}</p>
                </div>
                <div className='flex justify-between items-center p-3.5'>
                  <Link href={`/my-essays/${essay.id}`}>
                    <Button className=' text-white-1 px-4 py-2 rounded transition'>Read More</Button>
                  </Link>
                  <Button className='bg-red-500 text-white-1 px-4 py-2 rounded hover:bg-red-600 transition' onClick={() => handleDelete(essay.id)}>Delete</Button>
                </div>
              </div>
            ))
          ) : (
            <p className='text-white-1 font-semibold pl-0.5 pt-5'>No essays saved yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Essays;
