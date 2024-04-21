import React from "react";
import Hamburger from "./Hamburger";
import logo from "../assets/logo.svg";
const Nav = () => {
  return (
    <div className="flex justify-between items-center py-5 sm:py-8 px-5 sm:px-12 fixed top-0 left-0 w-full h-fit z-10 bg-white">
      <div className="flex items-center gap-2">
      <img src={logo} alt="" className="w-14 h-14 sm:w-10 sm:h-10" />
      <h1 className="font-[NeueKabel] font-black hidden sm:inline-block text-2xl">Studio Arterio</h1>
      </div>
      <Hamburger />
    </div>
  );
};

export default Nav;
