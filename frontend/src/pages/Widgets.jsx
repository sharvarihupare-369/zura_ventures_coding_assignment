import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Display from "../components/Display";
import General from "../components/General";
import Navbar2 from "../components/Navbar2";

const Widgets = () => {
  const [config,setConfig] = useState("General");
  // console.log(config)
  return (
    <div className="flex gap-20">
      <div className="w-[20%]">
        <Sidebar />
      </div>

      <div className="w-[80%]">
     
       <Navbar2/>

        <p className="text-[#7E22CE] text-[35px] text-700 font-bold">
          Configuration
        </p>

        <div className="flex gap-5 cursor-pointer mt-10">
        
          <p onClick={()=>setConfig("General")} className={config=="General" ? "text-[#7E22CE] font-bold border  border-b-4 border-[#7E22CE] border-x-0 border-t-0" : "text-[17px]"}>General</p>
         
        
          <p onClick={()=>setConfig("Display")} className={config=="Display" ? "text-[#7E22CE] font-bold border  border-b-4 border-[#7E22CE] border-x-0 border-t-0" : "text-[17px]"}>Display</p>
          <p onClick={()=>setConfig("Advanced")} className={config=="Advanced" ? "text-[#7E22CE] font-bold border  border-b-4 border-[#7E22CE] border-x-0 border-t-0 " : "text-[17px]"}>Advanced</p>
        </div>
        <div className="border border-gray-300 mt-2"></div>

       {
          config == "General" ? <General/> : config === "Display" ? <Display/> : ""
       }
      </div>
    </div>
  );
};

export default Widgets;
