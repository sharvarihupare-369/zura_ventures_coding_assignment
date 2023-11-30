import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { CiSaveUp2 } from "react-icons/ci";
import { FaCamera } from "react-icons/fa";

const Account = () => {
  let loginDetails =
    JSON.parse(localStorage.getItem("lama-login-details")) || "";
  // console.log(loginDetails);
  const profileImage = localStorage.getItem("lama-profilePicture") || "";
  // console.log(profileImage);
  const [name, setName] = useState(loginDetails?.username);
  const [image, setImage] = useState(profileImage  || "");
  const [hoverIcon, setHoverIcon] = useState(false);
  const handleSaveName = () => {
    const updatedLoginDetails = { ...loginDetails, username: name };
    localStorage.setItem(
      "lama-login-details",
      JSON.stringify(updatedLoginDetails)
    );
  };

  

  const handleSaveImage = () => {
    localStorage.setItem("lama-profilePicture",image);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        handleSaveImage();
      };
      reader.readAsDataURL(file);
    }
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
          <div
            onMouseEnter={() => setHoverIcon(true)}
            onMouseLeave={() => setHoverIcon(false)}
            className="flex items-center w-[15%]"
          >
            <div className="rounded-full object-cover">
            <img
              className="rounded-full object-cover"
              src={image || "https://bit.ly/sage-adebayo"}
              alt="User Avatar"
            />
            </div>
            {hoverIcon && (
              <label
                htmlFor="file-input"
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer"
              >
                {/* <FaCamera 
                
                style={{
                  color: "rgb(55, 71, 79)",
                    fontSize: "30px",
                    position: "relative",
                    opacity: "0.6",
                    cursor: "pointer",
                }} */}
                {/* /> */}
              </label>
            )}

            <input
              id="file-input"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
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
