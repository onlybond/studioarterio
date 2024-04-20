import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../assets/logo.svg";
const Loading = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(containerRef.current, {
      y: "-100%",
      duration: 2,
      delay: 1.5,
      ease: "power2.inOut",
    });
  });

  return (
    <div
      className="loading w-screen h-screen bg-black flex items-center justify-center"
      ref={containerRef}
      style={{ position: "absolute", bottom: 0 }}
    >
      <img src={logo} alt="" className="w-40 h-40"  />
    </div>
  );
};

export default Loading;
