import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Hamburger = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const hambmenu = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      setToggleMenu(prevState => !prevState);
    };

    hambmenu.current.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      hambmenu.current.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    if (toggleMenu) {
      gsap.to(".bar:nth-child(1)", { duration: 0.3, rotate: 45,y:3 });
      gsap.to(".bar:nth-child(2)", { duration: 0.3, rotate: -45,y:-3 });
    } else {
      gsap.to(".bar:nth-child(1)", { duration: 0.3, rotate: 0, y: 0 });
      gsap.to(".bar:nth-child(2)", { duration: 0.3, rotate: 0, y: 0 });
    }
  }, [toggleMenu]);

  return (
    <div ref={hambmenu} className={`hamburger-menu overflow-hidden ${toggleMenu ? 'active' : ''}`}>
      <div className="hamburger flex flex-col justify-center gap-[5px] sm:gap-1 h-12 w-12">
        <div className="bar w-10 h-[2px] sm:w-12 sm:h-[2px] bg-[rgb(227,115,93)]"></div>
        <div className="bar w-10 h-[2px] sm:w-12 sm:h-[2px] bg-[rgb(227,115,93)]"></div>
      </div>
    </div>
  );
};

export default Hamburger;
