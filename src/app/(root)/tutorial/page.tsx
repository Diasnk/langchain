import ModalWindow from "@/app/components/ModalWindow"
import Link from "next/link"


const Tutorial = () => {
  const data = [
    {
        id: 1,
        content: 'Narrative Structure',
        description: 'Writing About A Challenge',
        path: '/123'
    },
    {
        id: 2,
        content: 'Montage Structure',
        description: 'Not Writing About A Challenge',
        path: '/321'
    },
  ]  
  return (
    <div>
        {/* <div className="w-full flex justify-center h-screen bg-black">
            {
                data.map(({content, id, path}) => (
                    <Link className="p-10 text-2xl font-bold text-black" key={id} href={path}>
                        {content}
                    </Link>
                ))}
        </div> */}
      <h1 className="font-bold text-white-1 text-3xl p-10">
        Here Will Be Two Structure Lessons
      </h1>
    </div>
  )
}

export default Tutorial