'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState, useEffect } from 'react';
import { createWordAction, deleteEssayAction, fetchEssays } from '@/lib/actions/actions';
import EssayCard from '@/app/components/EssayCard';

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
    <div className='pt-10'>
      <h1 className='text-white-1'>My Essays</h1>
      <form className='' onSubmit={handleSubmit}>
        <div className='flex w-full flex-col gap-4'>
          <Input 
            type="text" 
            value={essayTitle} 
            onChange={(e) => setEssayTitle(e.target.value)} 
            placeholder="Enter your essay title" 
            className='w-full'        
            />
          <textarea
            className="w-full p-2 border-2 rounded-md border-black overflow-y-scroll h-20 max-h-40"
            placeholder={"Enter your essay here"}
            value={essayText}
            onChange={(e) => setEssayText(e.target.value)}
          ></textarea>
          <Button className='w-fit' type="submit">Save Essay</Button>
        </div>
      </form>
      {message && <p>{message}</p>}
      <div className='w-full flex justify-center'>
        <div className='w-full grid grid-flow-row  grid-cols-1 md:grid-cols-3'>
          {essays.length > 0 ? (
            essays.map((essay, index) => (
              <div key={index}>
                <EssayCard essay={essay}/>
                <Button onClick={() => handleDelete(essay.id)}>Delete</Button>
              </div>
              
            ))
          ) : (
            <p>No essays saved yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Essays;
