import { Chat } from "../components/chat";
import Header from "../components/header";

export const runtime = 'edge';

export default function Counelor() {
  
  return(
    <div className="">
      <Header/>
      <Chat/>
    </div>
  )
}