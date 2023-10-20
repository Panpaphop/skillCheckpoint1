import React from "react";
import html from "../image/html-5.png";
import css from "../image/css-3.png";
import js from "../image/js.png";
import tailwind from "../image/tailwind-css.svg";
import react from "../image/physics.png";
import node from "../image/nodejs.png";

function TechStacks() {
  return (
    <div className="flex flex-col border border-solid border-[#FF2950] border-4  h-[500px] w-[700px] mr-10 justify-around items-center rounded-2xl">
      <p className="text-[30px] font-medium">My Tech Stacks I've work with.</p>
      <div className="flex flex-col w-[100%] justify-end">
        <div className="flex w-[100%] justify-around">
          <img src={js} className="h-[100px] w-[100px]" />
          <img src={html} className="h-[100px] w-[100px]" />
          <img src={css} className="h-[100px] w-[100px]" />
        </div>
        <div className="flex w-[100%] justify-around mt-[100px]">
          <img src={tailwind} className="h-[100px] w-[100px]" />
          <img src={react} className="h-[100px] w-[100px]" />
          <img src={node} className="h-[100px] w-[100px]" />
        </div>
      </div>
    </div>
  );
}
export default TechStacks;
