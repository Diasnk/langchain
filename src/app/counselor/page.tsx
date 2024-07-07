import { Chat } from "../components/chat";

export const runtime = 'edge';

export default function Counelor() {
  return(
    <div className="mt-14">
      <Chat/>
    </div>
  )
}