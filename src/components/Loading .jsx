import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loading = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    const letters = Array.from(document.querySelectorAll('.logotext'));
    const shuffledLetters = shuffleArray(letters); // Shuffle the array of letters
    tl.staggerFromTo(shuffledLetters, 0.7, { opacity: 0 }, { opacity: 1, ease: "power2.inOut" },0.1); // Random stagger animation
    tl.to(containerRef.current, {
      y: "-100%",
      duration:1.5,
      ease: "power2.inOut",
    });
  });

  // Function to shuffle the array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div
      className="loading w-screen h-screen flex-col bg-black flex items-center justify-center z-50"
      ref={containerRef}
      style={{ position: "absolute", bottom: 0 }}
    >
      <div className="flex items-center gap-2 justify-center">
        <span className="font-[NeueKabel] text-3xl text-white opacity-0 logotext">S</span>
        <span className="font-[NeueKabel] text-3xl text-white opacity-0 logotext">T</span>
        <span className="font-[NeueKabel] text-3xl text-white opacity-0 logotext">U</span>
        <span className="font-[NeueKabel] text-3xl text-white opacity-0 logotext">D</span>
        <span className="font-[NeueKabel] text-3xl text-white opacity-0 logotext">I</span>
        <span className="font-[NeueKabel] text-3xl text-white opacity-0 logotext">O</span>
      </div>
      <div className="flex items-center gap-2 justify-center">
        <span className="font-[NeueKabel] text-7xl text-white opacity-0 logotext">A</span>
        <span className="font-[NeueKabel] text-7xl text-white opacity-0 logotext">R</span>
        <span className="font-[NeueKabel] text-7xl text-white opacity-0 logotext">T</span>
        <span className="font-[NeueKabel] text-7xl text-white opacity-0 logotext">E</span>
        <span className="font-[NeueKabel] text-7xl text-white opacity-0 logotext">R</span>
        <span className="font-[NeueKabel] text-7xl text-white opacity-0 logotext">I</span>
        <span className="font-[NeueKabel] text-7xl text-white opacity-0 logotext">O</span>
      </div>
    </div>
  );
};

export default Loading;
