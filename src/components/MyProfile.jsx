import React from "react";
import facebookPic from "../image/facebook.png";
import githubPic from "../image/github.png";
import instagramPic from "../image/instagram.png";
import redDots from "../image/redDots.svg";
import me from "../image/me.jpg";

function MyProfile() {
  return (
    <>
      <div className="bg-[#FF2950] text-white text-[40px] pl-[100px] h-[148px] flex items-center">
        My profile
      </div>
      <section className="flex flex-cols bg-[#FAF4F2]">
        <div className="left-side-box flex flex-col w-1/2 justify-center items-center ml-20 mt-[150px] mb-[200px]">
          <div className="w-80% pl-14">
            <p className="text-[24px]">Hi!</p>
            <p className="font-medium text-[40px]">
              I'm Panpaphop Pholprateepsuriya
            </p>
            <p className="font-medium text-[40px]">
              a Junior Software developer .
            </p>
            <p className="text-[18px] font-normal mt-10 text-[#222222]">
              "As an engineering student with a profound passion for coding,
              coupled with my immersive experience in a software development
              bootcamp, I am confident that I can bring valuable contributions
              to your esteemed company."
            </p>
            <div className="followMeBox mt-9 flex flex-rows">
              <span className="text-[#222222] text-[18px] mr-10 mt-3">
                Follow me
              </span>
              <a
                href="https://www.facebook.com/panpaphop.ryu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebookPic}
                  alt="Facebook"
                  className="h-[51px] w-[51px] mr-10"
                />
              </a>
              <a
                href="https://github.com/Panpaphop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={githubPic}
                  alt="GitHub"
                  className="h-[51px] w-[51px] mr-10"
                />
              </a>
              <a
                href="https://www.instagram.com/ryu.ppp/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramPic}
                  alt="Instagram"
                  className="h-[51px] w-[51px] mr-10"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-start w-full pl-14">
            <div className="flex items-center mt-10 ">
              <button className="bg-[#FF2950] text-white py-3 px-3 rounded ">
                Send Request
              </button>
              <button className="ml-10 py-3 px-3 rounded  text-[#0B0757] border border-solid border-[#FF2950]">
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div class="right-side-box flex flex-col w-1/2 justify-center items-center  bg-[#FAF4F2] mt-[150px] mb-[200px]">
          <div className="w-[406px] h-[406px] relative">
            <img
              src={redDots}
              alt="Red Dots"
              className="absolute z-0 -top-0 -right-10 "
            />
            <img
              src={redDots}
              alt="Red Dots"
              className="absolute z-0 -bottom-0 -left--10 "
            />
          </div>
          <img
            src={me}
            alt="My Profile"
            className="rounded-full w-[406px] absolute z-1"
          />
        </div>
      </section>
    </>
  );
}

export default MyProfile;
