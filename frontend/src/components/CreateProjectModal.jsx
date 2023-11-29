import React, { useContext, useRef, useState } from 'react'
import { CreateProjectContext } from '../Contexts/CreateProjectContextProvider';

const CreateProjectModal = () => {
  
    const {isModalOpen,setIsModalOpen} = useContext(CreateProjectContext);
    const [projectName,setProjectName] = useState("")
    
  return (
   <>
     <div className="fixed inset-0 overflow-y-auto">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <span
        className="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
        &#8203;
      </span>

      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
        {/* Add your modal content here */}

        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 text-xl hover:text-gray-700 cursor-pointer"
          onClick={() => {
            // Handle closing modal
            setIsModalOpen(false)
          }}
        >
          &times;
        </button>

        <div className="p-6">
          <h1 className="text-xl font-semibold mb-4">
            Create  Project
          </h1>

          <div className="mb-4">
            <label className="block text-md  text-gray">
              Enter Project Name:
            </label>
            <input
              value={projectName}
              onChange={(e)=>setProjectName(e.target.value)}
              type="text"
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Type here"
            />
            {!projectName &&  <p className='text-red-500 text-[12px] mt-2'>Project Name Can't be empty</p>}
          </div>

        </div>

        <div className="flex justify-end gap-5 m-5">
         
          <button
            onClick={() => {
              // Handle closing modal
              setIsModalOpen(false)
            }}
            className="px-3 py-1 font-bold text-red-600">
            Cancel
          </button>
          <button className="px-3 py-1  bg-[#7E22CE] text-white rounded-lg  text-extrabold">
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
   </>
  )

}

export default CreateProjectModal;