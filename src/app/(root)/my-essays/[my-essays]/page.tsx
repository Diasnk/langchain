'use client'

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { fetchEssays } from "@/lib/actions/actions"
// import EssayCard from "@/app/components/EssayCard"


export default function Essay(){
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
    <div className="text-white-1">
      {essays.map((essay, index) => (
        essay.id.trim() === (myEssays as string) && <div key={index} className="text-white-1">
          <h1 className="font-bold text-2xl">{essay.title}</h1>
          <p className="">{essay.text}</p>
        </div>
      ))}
    </div>
  )
}
