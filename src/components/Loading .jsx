import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Logo from "../assets/Logo";
const Loading = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(
      containerRef.current,
      1,
      {
        y:"-100%",
        duration:1.5,
        delay:1.5,
        ease: "power2.inOut"
      }
    )
  });


  return (
    <div
      className="loading w-screen h-screen flex-col bg-black flex items-center justify-center z-50"
      ref={containerRef}
      style={{ position: "absolute", bottom: 0 }}
    >
      <Logo/>
    </div>
  );
};

export default Loading;
