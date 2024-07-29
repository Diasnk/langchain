'use client'

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { fetchEssays } from "@/lib/actions/actions"
import EssayCard from "@/app/components/EssayCard"

export default function Essay(){
  const pathname = usePathname()

  const myEssays = pathname.split('/').pop()

  const [essays, setEssays] = useState<{ title: string, text: string }[]>([]);
  useEffect(() => {
    async function loadEssays() {
      const savedEssays = await fetchEssays();
      const formattedEssays = savedEssays.map((essay) => ({
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
        essay.title.trim() === (myEssays as string) && <div key={index} className="text-white-1">{essay.title}</div>
      ))}
    </div>
  )
}
