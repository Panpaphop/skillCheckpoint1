import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div
      className="bg-[#FF2950] text-white text-[40px] font-bold pl-[100px] h-[148px] flex items-center"
    >
      <button
        className="text-white text-[40px] font-bold pl-[100px] h-[148px]"
        onClick={() => navigate("/")}
      >
        My Profile
      </button>
      <button
        className="ml-auto text-[30px] mr-[100px] font-bold"
        onClick={() => navigate("/about-me")}
      >
        About Me
      </button>
      <button className="text-[30px] mr-[100px] font-bold">Projects</button>
    </div>
  );
}

export default Navbar;