import React, { useEffect, useState } from "react";
import sideEffect from "./helper/SideEffects";

const ChangeTheme = ({ theme, setTheme }) => {
  const [showTheme, setShowTheme] = useState(false);
  sideEffect(setShowTheme)

  const handleTheme = (color) => {
    setTheme(color);
  };

  return (
    <div className="fixed top-[250px] right-0 z-[2] flex items-center">
      <div className="icon">
        <i
          onClick={() => setShowTheme(!showTheme)}
          className="fa-solid fa-palette text-4xl section"
        ></i>
      </div>
      {showTheme && (
        <div
          className="themsColor w-[130px] flex flex-wrap justify-center gap-3 bg-gray-400 py-2 rounded-lg"
          data-aos="fade-left"
        >
          <div
            onClick={() => handleTheme("black")}
            className="h-8 w-8 bg-black rounded-full border-2"
          ></div>
          <div
            onClick={() => handleTheme("night")}
            className="h-8 w-8 bg-gradient-to-r from-[#12100E] to-[#2B4162] rounded-full"
          ></div>
          <div
            onClick={() => handleTheme("beige")}
            className="h-8 w-8 bg-[rgb(245,245,220)] rounded-full"
          ></div>
          <div
            onClick={() => handleTheme("cyan")}
            className="h-8 w-8 bg-[#80becc] rounded-full"
          ></div>
          <div
            onClick={() => handleTheme("salmon")}
            className="h-8 w-8 bg-[rgb(250,128,114)] rounded-full"
          ></div>
          <div
            onClick={() => handleTheme("purple-black")}
            className="h-8 w-8 bg-gradient-to-r from-black to-purple-800 rounded-full"
          ></div>
        </div>
      )}
    </div>
  );
};

export default ChangeTheme;
