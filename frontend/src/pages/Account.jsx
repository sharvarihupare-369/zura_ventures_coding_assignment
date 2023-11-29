import React from "react";
import Sidebar from "../components/Sidebar";

const Account = () => {
  return (
    <div className="flex gap-20">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%]">
        <p className="text-[#7E22CE] text-[40px] text-700 font-bold">
          Account Settings
        </p>

        <div className="flex  items-center gap-10 mt-10">
          <div className="flex items-center w-[15%]">
            <img
              className="h-25 rounded-full object-cover"
              src="https://bit.ly/sage-adebayo"
              alt="User Avatar"
            />
          </div>
          <div className="w-[35%]">
            <p className="font-bold text-[#3C3C3C]">User Name</p>
            <input
              placeholder="Enter Name"
              className="w-[100%] p-1 border border-[#999999] rounded-[7px]"
            />
          </div>

          <div className="w-[35%]">
            <p className="font-bold text-[#3C3C3C]">Email</p>
            <input
              placeholder="Enter Email"
              className="w-[100%] p-1 border border-[#999999] rounded-[7px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
