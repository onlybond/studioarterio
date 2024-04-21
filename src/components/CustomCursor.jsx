import gsap from "gsap";
import React, { useEffect, useRef } from "react";
const Cursor = ({isHovered, cursorText }) => {
  let size = isHovered ? 200 : 30;
  const circle = useRef(null);
  const mouse = useRef({
    x: 0,
    y: 0,
  });
  const delayedMouse = useRef({
    x: 0,
    y: 0,
  });
  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const moveCircle = (x, y) => {
    if(circle.current !== null){
    gsap.set(circle.current, { x, y, yPercent: -50, xPercent: -50 });
  }};

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.05),
      y: lerp(y, mouse.current.y, 0.05),
    };
    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    window.requestAnimationFrame(animate);
  };
  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);
  return (
      <div
        ref={circle}
        className={
          "absolute top-0 left-0 pointer-events-none flex justify-center items-center text-white" 
        }
        style={{
          height: size,
          width: size,
          transition:
            "height 0.3s cubic-bezier(.43,0,0,1), width 0.3s cubic-bezier(.43,0,0,1)",
        }}
      >
        {
        isHovered && 
        <span className="z-20 text-2xl pb-2 font-[Danilla]">{cursorText}</span>}
      </div>)
};

export default Cursor;
