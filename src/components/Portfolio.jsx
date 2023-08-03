import React from "react";
import port1 from "../image/Image.png";
import port2 from "../image/Image2.png";
import port3 from "../image/Image3.png";
import port4 from "../image/Image4.png";
import port5 from "../image/Image5.png";
import port6 from "../image/Image6.png";

function Portfolio() {
  return (
    <div className="bg-[#FAF4F2] pt-40 pb-40">
      <div className="flex justify-between">
        <div className="text-[48px] pl-40">Portfolio</div>
        <div className="text-gray-600 pt-10 pr-60">See more</div>
      </div>
      <div className="flex justify-around pt-20">
        <img src={port1} />
        <img src={port2} />
        <img src={port3} />
      </div>
      <div className="flex justify-around pt-20">
        <img src={port4} />
        <img src={port5} />
        <img src={port6} />
      </div>
    </div>
  );
}
export default Portfolio;
