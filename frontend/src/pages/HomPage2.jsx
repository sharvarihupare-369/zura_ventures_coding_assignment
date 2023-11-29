import React, { useContext, useRef, useState } from "react";
import plusimage from "../Assets/Vector.png";
import { CreateProjectContext } from "../Contexts/CreateProjectContextProvider";
import CreateProjectModal from "../components/CreateProjectModal";

const HomPage2 = () => {
    const {isModalOpen,setIsModalOpen} = useContext(CreateProjectContext);
  return (
    <div>
      <div className="flex justify-between m-3">
        <div>
          <p className="text-[40px] ml-40 text-[#7E22CE] font-bold">Projects</p>
        </div>
        <div className="flex justify-center mr-20">
          <button onClick={()=>setIsModalOpen(true)} className="bg-[#211935]  text-white text-[18px]  text-[20   px] px-10 rounded-lg flex gap-3 items-center">
            <img
              className="bg-[#211935] w-7"
              src={plusimage}
              alt="createbutton"
            />
            Create New Project
          </button>
        </div>
      </div>


   {/*projects map here */}
      <div className="w-[75%]  m-auto grid grid-cols-3 gap-20">
        <div
          className="mt-[50px] border border-[#999] shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 1.18953px 2.37906px 5.94764px 0px rgba(0, 0, 0, 0.06), 4.75811px 9.51622px 10.70575px 0px rgba(0, 0, 0, 0.05), 10.70575px 21.41151px 14.27434px 0px rgba(0, 0, 0, 0.03), 19.03245px 38.0649px 16.65339px 0px rgba(0, 0, 0, 0.01), 29.7382px 58.28688px 19.03245px 0px rgba(0, 0, 0, 0.00);
          ] rounded-[10px] inline-block px-2 py-1"
        >
          <div className="flex gap-4 ">
            <div className="bg-[#7E22CE] inline-block rounded-md">
              <p className="text-white text-[40px] font-bold py-2 px-4">SP</p>
            </div>
            <div className="mt-2">
              <p className="text-[#7E22CE]  font-bold">Sample Project</p>
              <p className="text-[10px]">4 Episodes</p>
            </div>
          </div>
        </div>


        <div
          className="mt-[50px] border border-[#999] shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 1.18953px 2.37906px 5.94764px 0px rgba(0, 0, 0, 0.06), 4.75811px 9.51622px 10.70575px 0px rgba(0, 0, 0, 0.05), 10.70575px 21.41151px 14.27434px 0px rgba(0, 0, 0, 0.03), 19.03245px 38.0649px 16.65339px 0px rgba(0, 0, 0, 0.01), 29.7382px 58.28688px 19.03245px 0px rgba(0, 0, 0, 0.00);
          ] rounded-[10px] inline-block px-2 py-1"
        >
          <div className="flex gap-4 ">
            <div className="bg-[#F8A01D] inline-block rounded-md">
              <p className="text-white text-[40px] font-bold py-2 px-4">SP</p>
            </div>
            <div className="mt-2">
              <p className="text-[#7E22CE]  font-bold">Sample Project</p>
              <p className="text-[10px]">4 Episodes</p>
            </div>
          </div>
        </div>

        <div
          className="mt-[50px] border border-[#999] shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 1.18953px 2.37906px 5.94764px 0px rgba(0, 0, 0, 0.06), 4.75811px 9.51622px 10.70575px 0px rgba(0, 0, 0, 0.05), 10.70575px 21.41151px 14.27434px 0px rgba(0, 0, 0, 0.03), 19.03245px 38.0649px 16.65339px 0px rgba(0, 0, 0, 0.01), 29.7382px 58.28688px 19.03245px 0px rgba(0, 0, 0, 0.00);
          ] rounded-[10px] inline-block px-2 py-1"
        >
          <div className="flex gap-4 ">
            <div className="bg-[#7E22CE] inline-block rounded-md">
              <p className="text-white text-[40px] font-bold py-2 px-4">SP</p>
            </div>
            <div className="mt-2">
              <p className="text-[#7E22CE]  font-bold">Sample Project</p>
              <p className="text-[10px]">4 Episodes</p>
            </div>
          </div>
        </div>
      </div>

      {
        isModalOpen && <CreateProjectModal/>
      }
    </div>
  );
};

export default HomPage2;
