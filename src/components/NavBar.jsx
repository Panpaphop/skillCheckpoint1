import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#FF2950] text-white text-[40px] font-bold pl-[100px] h-[100px] flex items-center">
      <button
        className="text-white text-[30px] font-bold pl-[100px] h-[148px] hover:text-red-900 hover:text-[35px]"
        onClick={() => navigate("/")}
      >
        My Profile
      </button>
      <button
        className="ml-auto text-[20px] mr-[100px] font-bold hover:text-red-900"
        onClick={() => navigate("/about-me")}
      >
        About Me
      </button>
      <button
        className="text-[20px] mr-[100px] font-bold hover:text-red-900"
        onClick={() => navigate("/projects")}
      >
        Projects
      </button>
    </div>
  );
}

export default Navbar;
