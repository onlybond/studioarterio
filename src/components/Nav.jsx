import React from "react";
import Hamburger from "./Hamburger";
import logo from "../assets/logo.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Nav = () => {
  useGSAP(()=>{
    const tl = gsap.timeline();
    const letters = Array.from(document.querySelectorAll('.logotext'));
    const shuffledLetters = shuffleArray(letters); // Shuffle the array of letters
    tl.staggerFromTo(shuffledLetters, 0.7, { opacity: 0 }, { opacity: 1,delay:2, ease: "power2.inOut" },0.1);
  })
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  return (
    <div className="flex justify-between items-center py-5 sm:py-8 px-5 sm:px-12 fixed top-0 left-0 w-full h-fit z-10 bg-white">
      <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 justify-center">
        <span className="font-[NeueKabel] text-3xl opacity-0 logotext">S</span>
        <span className="font-[NeueKabel] text-3xl opacity-0 logotext">T</span>
        <span className="font-[NeueKabel] text-3xl opacity-0 logotext">U</span>
        <span className="font-[NeueKabel] text-3xl opacity-0 logotext">D</span>
        <span className="font-[NeueKabel] text-3xl opacity-0 logotext">I</span>
        <span className="font-[NeueKabel] text-3xl opacity-0 logotext">O</span>
      </div>
      <div className="flex items-center gap-2 justify-center">
        <span className="font-[NeueKabel] text-3xl opacity-0 logotext">A</span>
        <span className="font-[NeueKabel] text-3xl opacity-0 logotext">R</span>
        <span className="font-[NeueKabel] text-3xl opacity-0 logotext">T</span>
        <span className="font-[NeueKabel] text-3xl opacity-0 logotext">E</span>
        <span className="font-[NeueKabel] text-3xl opacity-0 logotext">R</span>
        <span className="font-[NeueKabel] text-3xl opacity-0 logotext">I</span>
        <span className="font-[NeueKabel] text-3xl opacity-0 logotext">O</span>
      </div>
      </div>
      <Hamburger />
    </div>
  );
};

export default Nav;
