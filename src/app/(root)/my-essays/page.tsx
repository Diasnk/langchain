'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState, useEffect } from 'react';
import { createWordAction, fetchEssays } from '@/lib/actions/actions';

const Essays = () => {
  const [essayText, setEssayText] = useState('');
  const [essays, setEssays] = useState<{ text: string }[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function loadEssays() {
      const savedEssays = await fetchEssays();
      setEssays(savedEssays); 
    }

    loadEssays();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('wordText', essayText);
    
    const response = await createWordAction(null, formData);
    setMessage(response.message);

    if (response.message === '') {
      setEssayText('');
      const savedEssays = await fetchEssays();
      setEssays(savedEssays);
    }
  };

  return (
    <div>
      <h1 className='text-white-1'>My Essays</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          value={essayText} 
          onChange={(e) => setEssayText(e.target.value)} 
          placeholder="Enter your essay text" 
        />
        <Button type="submit">Save Essay</Button>
      </form>
      {message && <p>{message}</p>}
      <div>
        {essays.length > 0 ? (
          essays.map((essay, index) => (
            <div className='text-white-1' key={index}>
              <p>{essay.text}</p>
            </div>
          ))
        ) : (
          <p>No essays saved yet.</p>
        )}
      </div>
    </div>
  );
};

export default Essays;
