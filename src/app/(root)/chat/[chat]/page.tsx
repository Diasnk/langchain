'use client'

import {Chat} from '@/app/components/chat'
import MobileNav from '@/app/components/MobileNav'
import { fetchEssays } from '@/lib/actions/actions'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Consult = () => {
  const pathname = usePathname()
  const myEssays = pathname.split('/').pop()

  const [essays, setEssays] = useState<{ id: string, title: string, text: string }[]>([]);

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
  return (
    <div className='pt-1'>
      <div className=''>
        <MobileNav/>
      </div>
      {
        essays.map((essay, index) => (
          essay.id.trim() === (myEssays as string) && (
            <Chat 
            key={index} 
            firstText={essay}
            />
        )))
      }
    </div>
  )
}

export default Consult