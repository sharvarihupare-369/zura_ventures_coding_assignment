import React from 'react'
import Sidebar from '../components/Sidebar'
import ellipse from "../Assets/Ellipse.png";
import { FiUpload } from "react-icons/fi";

const Widgets = () => {
  return (
    <div className='flex gap-20'>
     <div className="w-[20%]">
        <Sidebar />
      </div>

      <div className='w-[80%]'>
        <p className="text-[#7E22CE] text-[40px] text-700 font-bold">
          Configuration
        </p>


        <div>
            <p>Display</p>
        </div>

        <div className='flex gap-60'>
        <div >
            <p className='text-[#3C3C3C] font-bold'>Primary Color</p>
            <input placeholder='colorCode' className='border border-gray-300 p-2 rounded-md'/>
        </div> 
        <div>
            <p className='text-[#3C3C3C] font-bold'>Font Color</p>
            <input placeholder='colorCode' className='border border-gray-300 p-2 rounded-md'/>
        </div> 
        </div>


        <div className='flex gap-60'>
        <div >
            <p className='text-[#3C3C3C] font-bold'>Font Size(in px)</p>
            <input placeholder='colorCode' className='border border-gray-300 p-2 rounded-md'/>
        </div> 
        <div>
            <p className='text-[#3C3C3C] font-bold'>Chat Height (in % of total screen)</p>
            <input placeholder='colorCode' className='border border-gray-300 p-2 rounded-md'/>
        </div> 
        </div>

        <div className='flex gap-60'>
        <div >
            <p className='text-[#3C3C3C] font-bold'>Show Sources</p>
            <input placeholder='colorCode' className='border border-gray-300 p-2 rounded-md'/>
        </div> 
        </div>

        <div className="border border-gray-300 mt-7 mr-6"></div>


        <div>
        <p className="text-[#7E22CE] text-[20px] text-700 font-bold mt-[25px]">
          Chat Icon
        </p>
        </div>

        <div className='flex gap-60'>
        <div >
            <p className='text-[#3C3C3C] font-bold'>Chat Icon Size</p>
            <input placeholder='colorCode' className='border border-gray-300 p-2 rounded-md'/>
        </div> 
        <div>
            <p className='text-[#3C3C3C] font-bold'>Position on Screen</p>
            <input placeholder='colorCode' className='border border-gray-300 p-2 rounded-md'/>
        </div> 
        </div>

        <div className='flex gap-60'>
        <div >
            <p className='text-[#3C3C3C] font-bold'>Position on Screen</p>
            <input placeholder='colorCode' className='border border-gray-300 p-2 rounded-md'/>
        </div> 
        <div>
            <p className='text-[#3C3C3C] font-bold'>Horizontal Distance (in px)</p>
            <input placeholder='colorCode' className='border border-gray-300 p-2 rounded-md'/>
        </div> 
        </div>



        <div>
        <p className="text-[#3C3C3C] text-[20px] text-700 font-bold mt-[25px]">
          Bot Icon
        </p>
         <div className='flex items-center gap-6 mt-5'>
            <div >
                <img src={ellipse}/>
            </div>
            <div>
                <button className='bg-[#7E22CE] text-white px-2 py-1 rounded-md flex items-center gap-2'>Upload Image <FiUpload/></button>
                <p className='text-[#646464] text-[10px]'>Recommended Size: 48x48px</p>
            </div>
         </div>
        </div>

      </div>


    </div>
  )
}

export default Widgets