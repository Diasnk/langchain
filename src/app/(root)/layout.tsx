import LeftSidebar from "@/app/components/LeftSidebar";
import MobileNav from "@/app/components/MobileNav";
import RightSidebar from "@/app/components/RightSidebar";
import Image from "next/image";
// import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />
        
        <div className="flex min-h-screen w-full flex-col px-4 sm:px-14">
            <div className="">
              {/* <Toaster /> */}
              {children}
            </div>
        </div>
        
        <RightSidebar/>
        
        
      </main>

      {/* <PodcastPlayer /> */}
    </div>
  );
}