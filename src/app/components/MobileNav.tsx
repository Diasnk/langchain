import Link from 'next/link'
import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SignedIn, SignedOut, SignUpButton, UserButton } from '@clerk/clerk-react'



const MobileNav = () => {
  return (
    <div className='md:hidden text-white-1 cursor-pointer items-center flex pt-4'>
         {/* <Link href="/" className='flex cursor-pointer items-center gap-1 pt-10'> */}              
                <Sheet>
                  <SheetTrigger>
                    {/* <div className='flex cursor-pointer items-center gap-1'>
                      <Image src="/icons/logo.svg" alt='logo' width={23} height={27}/>
                      <h1 className='text-2xl font-extrabold text-white-1'>Jeremy</h1>
                    </div> */}
                    <Image src="/icons/hamburger.svg" alt='logo' width={40} height={40}/>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle><h1 className='text-2xl font-bold p-5'>Where do you want to go?</h1></SheetTitle>
                      <SheetDescription>
                        <SignedOut>
                          <div className='text-xl font-semibold p-5'>
                            <SignUpButton></SignUpButton>
                          </div>
                        </SignedOut>
                        <Link href="/">
                          <h1 className='text-xl font-semibold p-5'>Home</h1>
                        </Link>
                        <Link href="/feedback">
                          <h1 className='text-xl font-semibold p-5'>Feedback</h1>
                        </Link>
                        <Link href="/tutorial">
                          <h1 className='text-xl font-semibold p-5'>Tutorial</h1>
                        </Link>
                        <Link href="/my-essays">
                          <h1 className='text-xl font-semibold p-5'>My Essays</h1>
                        </Link>
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
          {/* </Link> */}
    </div>
  )
}

export default MobileNav