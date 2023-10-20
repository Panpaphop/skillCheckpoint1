import React from "react";
import merryMatchPic from "../image/merryMatch.png";

function MerryMatch() {
  return (
    <div className="flex items-start justify-around  p-10">
      <div className="border border-solid border-[#FF2950] border-2 rounded-xl p-1 w-[60%]">
        <a
          href="https://merry-match-client.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-[100%] w-[100%]"
        >
          <img
            src={merryMatchPic}
            alt="Merry Match"
            className="hover:border hover:border-solid hover:border-2 hover:border-blue-500"
          />
        </a>
      </div>

      <div className="w-[30%] h-[100%] flex flex-col justify-center">
        <div className="border border-solid border-[#FF2950] border-2 rounded-xl p-10">
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
    </div>
  );
}
export default MerryMatch;
