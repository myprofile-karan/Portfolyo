import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import sideEffect from "./helper/SideEffects";

const Header = ({ name }) => {
  const [show, setShow] = useState(false);
  sideEffect(setShow);

  return (
    <header className="section backdrop-blur-lg	 w-full z-[2] fixed top-0 section py-5 px-10 flex justify-between items-center overflow">
      <div className="logo">
        <h1 className="text-4xl font-formal">{name?.split(" ", 1)}..</h1>
      </div>
      <div className="navicon">
        <i
          onClick={() => setShow(true)}
          className="fa-solid fa-bars text-4xl cursor-pointer"
        ></i>
      </div>
      {show && <SideBar setShow={setShow} />}
    </header>
  );
};

export default Header;
