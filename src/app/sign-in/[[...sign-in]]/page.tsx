'use client'


import{ SignIn } from '@clerk/nextjs'


export default function Page() {
  return (
    <div className='w-full h-screen flex justify-center '>
        <div className='my-auto'>
            <SignIn />
        </div>
    </div>
  )
}
