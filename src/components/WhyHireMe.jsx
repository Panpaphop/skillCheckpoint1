import React from "react";
import communicatePic from "../image/communicativePic.png";
import professionalPic from "../image/professionalPic.png";
import callaborativePic from "../image/collaborativePic.png";
import star from "../image/starPic.png";

function WhyHireMe() {
  return (
    <>
      <div className="bg-[#FAF4F2]">
        <div className="text-[48px] text-center pt-10">Why Hire Me?</div>
        <div className="flex flex-rows justify-around">
          <div className="flex flex-col items-center justify-center p-10 pt-40">
            <img src={communicatePic} className="h-[51px] w-[51px]" />
            <div className="text-[24px] p-10">Communicative</div>
            <p className="text-[18px] text-gray-600">
              Proficiently conveys ideas through clear verbal and written
              communication. Adapts messages for diverse audiences, fostering
              understanding and engagement.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-10 pt-40">
            <img src={professionalPic} className="h-[51px] w-[51px]" />
            <div className="text-[24px] p-10 ">Professional</div>
            <p className="text-[18px]  text-gray-600">
              Exhibits expertise in technical and industry-specific knowledge,
              contributing to impactful decision-making and innovative
              problem-solving.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-10 pt-40">
            <img src={callaborativePic} className="h-[51px] w-[51px]" />
            <div className="text-[24px] p-10">Callaborative</div>
            <p className="text-[18px]  text-gray-600">
              Excels in teamwork, actively contributing insights and valuing
              diverse perspectives for achieving shared objectives.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-10 pt-40">
            <img src={star} className="h-[51px] w-[51px]" />
            <div className="text-[24px] p-10">Client’s Favourite</div>
            <p className="text-[18px]  text-gray-600">
              Recognized for consistently exceeding client expectations by
              delivering exceptional solutions and maintaining strong
              relationships.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyHireMe;
