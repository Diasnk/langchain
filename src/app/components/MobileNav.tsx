import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const MobileNav = () => {
  return (
    <div className='md:hidden text-white-1'>
         <Link href="/" className='flex cursor-pointer items-center gap-1 pt-10'>
                <Image src="/icons/logo.svg" alt='logo' width={23} height={27}/>
                <h1 className='text-2xl font-extrabold text-white-1'>Jeremy</h1>
          </Link>
    </div>
  )
}

export default MobileNav