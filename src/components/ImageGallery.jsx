import React, { useEffect, useRef, useState } from "react";
import { useCursor } from "../providers/CursorProvider";
import img1 from '../assets/img1.jpeg';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger
import imagesJson from "../assets/images.json"; 
const ImageGallery = () => {
  const [images,setImages] = useState([]);
  const items = Array.from({ length: 150 }, (_, i) => i);
  const [previewImageSrc, setPreviewImageSrc] = useState(img1);
  const galleryRef = useRef(null);
  const previewImageRef = useRef(null);
  const itemsRef = useRef([]);
  const numberOfItems = itemsRef.current.length;
  const angleIncrement = 360 / numberOfItems;
  useEffect(()=>{
    const imagePaths = imagesJson.images.map((image) => image.path);
    setImages(imagePaths);

    window.addEventListener("mousemove", (e) => {
      const x = e.clientX
      const y = e.clientY

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;

      const rotateX = 55 + percentY * 2;
      const rotateY = percentX * 2;
      gsap.to(galleryRef.current, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration:1,
        ease: "power2.inOut",
        overwrite:"auto"
      })
  })
items.forEach((item, index) => {
  gsap.set(item, {
    rotationZ: index * angleIncrement,
    rotationY: 90,
    transformOrigin: "50% 400px",
  })

  item.addEventListener("mouseover", function (){
    const imgInsideItem = item.querySelector('img');
    setPreviewImageSrc(imgInsideItem.src);

    gsap.to(item, {
      x:10,
      y:10,
      z:10,
      duration: 0.5,
      ease: "power2.inOut",
    });
  })
  item.addEventListener("mouseout", function (){
    gsap.to(item, {
      x:0,
      y:0,
      z:0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  })
})

},[])

  return (
    <div className="w-screen h-full flex flex-col items-center justify-center">
      <div className="preview-img fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px]">
        <img src={previewImageSrc} className="w-full h-full object-cover z-0" alt="" />
      </div>
      <div className="container fixed w-full h-full overflow-hidden"
      style={{
        perspective: "1500px",
      }}
      >
        <div ref={galleryRef} className="gallery absolute top-[22.5%] left-1/2"
        style={{
          transformStyle: "preserve-3d",
          transform: "translateX(-50%) rotateY(55deg)",
        }}
        >
          {items.map((index) => (
          <div
            key={index}
            className="item absolute bg-[#b0b0b0] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45px] h-[60px] m-3"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src={`${images[index % images.length]}`}
              alt=""
              className="img w-full h-full object-cover"
            />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
