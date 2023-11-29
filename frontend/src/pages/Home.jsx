import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import plusimage from "../Assets/Vector.png";
const Home = () => {
  return (
    <div>
      <div className="border border-[0.75px]-[#999]  w-40 ml-44 text-gray-700 rounded-[35.323px]  font-roboto text-base font-normal flex items-center justify-center gap-1 p-1 shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 0.75032px 1.50064px 3.75159px 0px rgba(0, 0, 0, 0.06), 3.00127px 6.00254px 6.75286px 0px rgba(0, 0, 0, 0.05), 6.75286px 13.50572px 9.00381px 0px rgba(0, 0, 0, 0.03), 12.00508px 24.01017px 10.50445px 0px rgba(0, 0, 0, 0.01), 18.75794px 36.76557px 12.00508px 0px rgba(0, 0, 0, 0.00)]">
        <IoHomeOutline />
        <p>Back to Home</p>
      </div>
      <div className="text-center">
        <p className="text-[73.411px] text-[#7E22CE] text-700">
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
        <button className="bg-[#211935] mt-8 text-white px-4  text-[30px] py-3 rounded-lg flex gap-5 items-center">
          <img className="bg-[#211935]" src={plusimage} alt="createbutton" />
          Create New Project
        </button>
      </div>
    </div>
  );
};

export default Home;
