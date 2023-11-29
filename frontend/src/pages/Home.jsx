import React, { useRef, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import plusimage from "../Assets/Vector.png";
const Home = () => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [isModalOpen,setIsModalOpen] = useState(false)
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <div>
      <div className="border border-[0.75px]-[#999]  w-40 ml-44 text-gray-700 rounded-[35.323px]  font-roboto text-base font-normal flex items-center justify-center gap-1 p-1 shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 0.75032px 1.50064px 3.75159px 0px rgba(0, 0, 0, 0.06), 3.00127px 6.00254px 6.75286px 0px rgba(0, 0, 0, 0.05), 6.75286px 13.50572px 9.00381px 0px rgba(0, 0, 0, 0.03), 12.00508px 24.01017px 10.50445px 0px rgba(0, 0, 0, 0.01), 18.75794px 36.76557px 12.00508px 0px rgba(0, 0, 0, 0.00)]">
        <IoHomeOutline />
        <p>Back to Home</p>
      </div>
      <div className="text-center">
        <p className="text-[40px] text-[#7E22CE] text-[900]">
          Create a New Project
        </p>
      </div>
      <div className="text-center">
        <p className="text-[#838383] text-[20px]">
          Copy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </p>
      </div>

      <div className="flex justify-center">
        <button onClick={()=>setIsModalOpen(true)} className="bg-[#211935] mt-8 text-white px-4  text-[30px] py-3 rounded-lg flex gap-5 items-center">
          <img className="bg-[#211935] w-10" src={plusimage} alt="createbutton" />
          Create New Project
        </button>
      </div>


      {/* Modal */}
      {
        isModalOpen && <div className="fixed inset-0 overflow-y-auto">
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
                  ref={initialRef}
                  type="text"
                  className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Type here"
                />
              </div>

            </div>

            <div className="flex justify-end gap-5 m-5">
             
              <button
                onClick={() => {
                  // Handle closing modal
                  setIsModalOpen(false)
                }}
                className="px-3 py-1  text-red-600 text-extrabold">
                Cancel
              </button>
              <button className="px-3 py-1  bg-[#7E22CE] text-white rounded-lg  text-extrabold">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      }

    </div>
  );
};

export default Home;
