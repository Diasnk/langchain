'use client'

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { fetchEssays, updateEssayAction } from "@/lib/actions/actions"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import MobileNav from "@/app/components/MobileNav"

export default function Essay() {
  const pathname = usePathname()
  const myEssays = pathname.split('/').pop()

  const [essays, setEssays] = useState<{ id: string, title: string, text: string }[]>([]);
  const [editableText, setEditableText] = useState<string>("");

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

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditableText(event.target.value);
  };

  const saveEditedText = async (essayId: string, originalText: string) => {
    const newText = editableText.trim() !== "" ? editableText : originalText;

    // Call the update function to save the edited text
    await updateEssayAction(essayId, newText);

    // Update the state to reflect the changes locally
    const updatedEssays = essays.map((essay) => 
      essay.id === essayId ? { ...essay, text: newText } : essay
    );
    setEditableText(""); // Clear the editableText after saving
    setEssays(updatedEssays);
  };

  return (
    <div className="min-h-screen pt-2">
      <div className="pl-3">
        <MobileNav />
      </div>
      {essays.map((essay, index) => (
        essay.id.trim() === (myEssays as string) && (
          <div key={index} className="bg-black pt-5 md:pt-10 rounded-md shadow-lg">
            <h1 className="text-start font-bold text-3xl text-white-1 pl-1 pb-6">
              {essay.title}
            </h1>
            <textarea
              className="w-full h-80 p-4 text-white bg-black-2 text-white-1 rounded-lg border-2 border-gray-600 focus:ring-2 focus:outline-none resize-none"
              value={editableText || essay.text}
              onChange={handleTextChange}
              rows={10}
            />
            <div className="w-full flex justify-between">
              <div>
                <Link href="/my-essays">
                  <Button
                    onClick={() => saveEditedText(essay.id, essay.text)}>
                      Save Changes
                  </Button>
                </Link>
                <Button
                  className="mt-4 ml-4 bg-red-500 hover:bg-red-600"
                  onClick={() => setEditableText("")}>
                    Cancel
                </Button>
              </div>
              <Link href={`/chat/${essay.id}`}>
                  <Button className="bg-green-700 hover:bg-green-600 mt-4">Chat With AI Specialist</Button>
              </Link>
            </div>
          </div>
        )
      ))}
    </div>
  )
}
