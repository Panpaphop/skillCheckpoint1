import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import TechStacks from "../components/TechStacks";
import { useNavigate } from "react-router-dom";

function AboutMePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative bg-[#FAF4F2] h-screen">
        <Navbar />
        <p className="text-[40px] text-center pt-10 mb-[60px] font-medium">
          About Me
        </p>
        <div className="flex flex-rows w-full justify-center">
          <div className="w-1/2">
            <div className="bg-[#FAF4F2]">
              <div className="m-[100px] mt-[40px]">
                <p className="text-[30px] font-medium">Experiences</p>
                <br />
                <p className="text-[28px]">[2018-2022]</p>
                <p className="text-[25px]">
                  I studied in faculty of Engineering, Chulalongkorn University.
                </p>
                <br />
                <p className="text-[28px]">[June-July 2021]</p>
                <p className="text-[25px]">
                  I interned at Chulalongkorn University as an assistant
                  researcher.
                </p>
                <br />
                <p className="text-[28px]">[June-October 2023]</p>
                <p className="text-[25px]">
                  I was a Developer in training at{" "}
                  <a href="https://www.techupth.com" className="underline">
                    TechUp
                  </a>{" "}
                  Coding Bootcamp.
                </p>
                <br />
                <button
                  className="bg-[#FF2950] text-white py-3 px-3 rounded hover:bg-red-800 mt-5 text-[20px]"
                  onClick={() => navigate("/projects")}
                >
                  Wanna see my projects?
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center ">
            <TechStacks />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AboutMePage;
