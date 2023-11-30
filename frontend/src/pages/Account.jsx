import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { CiSaveUp2 } from "react-icons/ci";

const Account = () => {
  let loginDetails =
    JSON.parse(localStorage.getItem("lama-login-details")) || "";
  console.log(loginDetails);
  const [name, setName] = useState(loginDetails?.username);

  const handleSaveName = () => {
    const updatedLoginDetails = { ...loginDetails, username: name };
    localStorage.setItem(
      "lama-login-details",
      JSON.stringify(updatedLoginDetails)
    );
  };

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
            <div className="flex items-center">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                className="w-[100%] p-1 border border-[#999999] rounded-[7px]"
              />
              <div
                onClick={handleSaveName}
                className="relative right-10 cursor-pointer"
              >
                <CiSaveUp2 style={{ fontSize: "30px", fontWeight: 700 }} />
              </div>
            </div>
          </div>

          <div className="w-[35%]">
            <p className="font-bold text-[#3C3C3C]">Email</p>
            <input
              value={loginDetails?.email}
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
