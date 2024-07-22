import React from 'react'

const ModalWindowLoading = () => {
  return (
    <div className='h-64 w-3/5 bg-black-1 absolute rounded-lg p-5 z-30 top-20 left-1/2 transform -translate-x-1/2'>
        <div className='flex flex-col items-center font-thin text-white-1'>
            <div className='w-20 h-20 mt-8'>
            <div className='animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-white-1'></div>
            </div>
        </div>
        <div className='text-white-1 w-fit pt-6'>
            <p>Loading...</p>
        </div>
    </div>
  )
}

export default ModalWindowLoading