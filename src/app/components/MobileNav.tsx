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



const MobileNav = () => {
  return (
    <div className='md:hidden text-white-1 cursor-pointer items-center flex pt-5'>
         {/* <Link href="/" className='flex cursor-pointer items-center gap-1 pt-10'> */}              
                <Sheet>
                  <SheetTrigger>
                    <div className='flex cursor-pointer items-center gap-1'>
                      <Image src="/icons/logo.svg" alt='logo' width={23} height={27}/>
                      <h1 className='text-2xl font-extrabold text-white-1'>Jeremy</h1>
                    </div>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle><h1 className='text-2xl font-bold p-5'>Where do you want to go?</h1></SheetTitle>
                      <SheetDescription>
                        <Link href="/">
                          <h1 className='text-xl font-semibold p-5'>Home</h1>
                        </Link>
                        <Link href="/my-essays">
                          <h1 className='text-xl font-semibold p-5'>My Essays</h1>
                        </Link>
                        <Link href="/feedback">
                          <h1 className='text-xl font-semibold p-5'>Feedback</h1>
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