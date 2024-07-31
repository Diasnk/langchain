'use client'

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { fetchEssays, updateEssayAction } from "@/lib/actions/actions"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
    <div className="min-h-screen pt-5">
      {essays.map((essay, index) => (
        essay.id.trim() === (myEssays as string) && (
          <div key={index} className="bg-black p-10 rounded-md shadow-lg">
            <h1 className="text-start font-bold text-3xl text-white-1 pb-6">
              {essay.title}
            </h1>
            <textarea
              className="w-full h-80 p-4 text-white bg-[#e1e1e1] rounded-lg border-2 border-gray-600 focus:ring-2 focus:outline-none resize-none"
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
            </div>
          </div>
        )
      ))}
    </div>
  )
}
