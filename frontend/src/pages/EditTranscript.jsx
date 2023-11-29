import React from 'react'
import Sidebar from '../components/Sidebar'
import { IoHomeOutline } from 'react-icons/io5'
import { FaEdit } from 'react-icons/fa'

const EditTranscript = () => {
  return (
    <div className="flex gap-20">
     <div className="w-[20%]">
      <Sidebar/>
     </div>
     <div className='w-[70%]'>
     <div className='flex justify-between items-center'>

     <p className="text-[#7E22CE] text-[40px] text-700 font-bold">Edit Transcript</p>
     <div className='flex gap-3'>
        <button className='text-red-400 font-bold px-10 py-2 rounded-md  border border-red-400'>Discard</button>
        <button className='px-7 py-2  bg-[#211935]  text-white rounded-md text-lg  text-bold'>Save & exit</button>
     </div>
     </div>

     <div className='border border-[#7E22CE] p-1 rounded-[10px]'>
     <div className="border border-[1px]-[#3C3C3C] bg-[#3C3C3C]  text-[12px]  text-white rounded-[35.323px]  font-roboto text-base font-normal flex items-center justify-center gap-1 p-1 shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 0.75032px 1.50064px 3.75159px 0px rgba(0, 0, 0, 0.06), 3.00127px 6.00254px 6.75286px 0px rgba(0, 0, 0, 0.05), 6.75286px 13.50572px 9.00381px 0px rgba(0, 0, 0, 0.03), 12.00508px 24.01017px 10.50445px 0px rgba(0, 0, 0, 0.01), 18.75794px 36.76557px 12.00508px 0px rgba(0, 0, 0, 0.00)]">
        <FaEdit />
        <p>Edit Mode</p>
      </div>
        <div className='w-full overflow-x-auto p-1'>
          <textarea className='w-full focus:border-none focus:outline-none'/>
        </div>
     </div>
     </div>

    </div>
  )
}

export default EditTranscript