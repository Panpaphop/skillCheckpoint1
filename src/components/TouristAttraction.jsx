import React from "react";
import touristAttractionPic from "../image/touristAttraction.png";

function TouristAttraction() {
  return (
    <div className="flex items-center justify-around  p-10">
      <div className="border border-solid border-[#FF2950] border-2 rounded-xl p-1 w-[60%]">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="h-[100%] w-[100%]"
        >
          <img
            src={touristAttractionPic}
            alt="touristAttraction"
            className="hover:border hover:border-solid hover:border-2 hover:border-blue-500 w-full"
          />
        </a>
      </div>

      <div className="w-[30%] h-[100%] flex flex-col justify-center">
        <div className="border border-solid border-[#FF2950] border-2 rounded-xl p-10">
          <p className="text-[30px] font-bold">Tourist Attraction</p>
          <p className="text-[25px]">
            Web application that allows users to search for tourist attractions
            using keywords. The application fetches attraction details including
            the name, description, and an image from a server. Users can enter
            keywords in a search bar, and the application will display matching
            attractions.
          </p>
        </div>
      </div>
    </div>
  );
}
export default TouristAttraction;
