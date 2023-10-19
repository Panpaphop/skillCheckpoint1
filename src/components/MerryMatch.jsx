import React from "react";
import merryMatchPic from "../image/merryMatch.png";

function MerryMatch() {
  return (
    <div className="flex items-start justify-around bg-[#FAF4F2]">
      <a
        href="https://merry-match-client.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="h-[50%] w-[50%]"
      >
        <img src={merryMatchPic} alt="Merry Match" className="" />
      </a>
      <div className="w-[30%] h-[100%] flex flex-col justify-center">
        <p className="text-[30px] font-bold">Merry Match</p>
        <p className="text-[25px]">
          A dating app, incorporated authentication, complaint management,
          real-time chat, and matching system.
          <p>
            Technologies like React, Vite, Tailwind CSS, Supabase, Chakra UI,
            and Formik powered this collaborative project with effective
            Git-based version control.
          </p>
        </p>
      </div>
    </div>
  );
}
export default MerryMatch;
