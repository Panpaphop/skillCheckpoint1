import React from "react";

function Portfolio() {
  return (
    <div className="bg-[#FAF4F2] pt-40 pb-40">
      <div className="flex justify-between">
        <div className="text-[48px] pl-40">Portfolio</div>
        <div className="text-gray-600 pt-10 pr-60">See more</div>
      </div>
      <div className="flex justify-around pt-20">
      <img src="./src/image/image.png"/>
      <img src="./src/image/image2.png"/>
      <img src="./src/image/image3.png"/>
      </div>
      <div className="flex justify-around pt-20">
      <img src="./src/image/image4.png"/>
      <img src="./src/image/image5.png"/>
      <img src="./src/image/image6.png"/>
      </div>
    </div>
  );
}
export default Portfolio;
