'use client'

import{ SignUp } from '@clerk/nextjs'


export default function Page() {
  return (
    <div className='w-full h-screen flex justify-center'>
      <div className='my-auto'>
            <SignUp />
      </div>
    </div>
  )
}
