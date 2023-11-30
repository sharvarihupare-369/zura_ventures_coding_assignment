import React from 'react'

const General = () => {
  return (
    <div>
        <div className='mt-7'>
            <p className='font-bold text-[#3C3C3C] mb-3'>Chatbot Name</p>
            <input className='w-5/6 p-1 border border-gray-300 rounded-[5px] focus:border-sky-500'/>
            <p className='text-[#646464] text-[12px]'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
        </div>

        <div>
            <p className='font-bold text-[#3C3C3C] mt-3 mb-2'>Welcome Message</p>
            <input className='w-5/6 p-1 border border-gray-300 rounded-[5px] focus:border-sky-500'/>
            <p className='text-[#646464] text-[12px]'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
        </div>

        <div>
            <p className='font-bold text-[#3C3C3C] mt-3 mb-2'>Input Placeholder</p>
            <input className='w-5/6 p-1 border border-gray-300 rounded-[5px] focus:border-sky-500'/>
            <p className='text-[#646464] text-[12px]'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
        </div>
    </div>
  )
}

export default General