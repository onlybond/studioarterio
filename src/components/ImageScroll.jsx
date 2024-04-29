import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
const ImageScroll = () => {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    return;
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".img1", {
      ease: "power3.inOut",
      y: -600,
      x: -500,
      scrollTrigger: {
        trigger: ".img-container",
        start: "clamp(top bottom)",
        end: "clamp(bottom top)",
        scrub: 1,
      },
    });
    gsap.to(".img2", {
      ease: "power3.inOut",
      y: -100,
      x: 400,
      scrollTrigger: {
        trigger: ".img-container",
        start: "clamp(top bottom)",
        end: "clamp(bottom top)",
        scrub: 1,
      },
    });
    gsap.to(".img3", {
      ease: "power3.inOut",
      y: -100,
      x: -400,
      scrollTrigger: {
        trigger: ".img-container",
        start: "clamp(top bottom)",
        end: "clamp(bottom top)",
        scrub: 1,
      },
    });
    gsap.to(".img4", {
      ease: "power3.inOut",
      y: -600,
      x: 500,
      scrollTrigger: {
        trigger: ".img-container",
        start: "clamp(top bottom)",
        end: "clamp(bottom top)",
        scrub: 1,
      },
    });
    gsap.to(
      ".text-reveal",
      {
        ease: "power3.inOut",
        y: 0,
        rotate:0,
        delay: 0.5,
        duration:1.5,
        opacity:1,
        stagger:0.3,
        scrollTrigger: {
          trigger: ".text-reveal",
          start: "top bottom",
          end: "bottom top",
        },
      }
    )
  }, []);
  return (
    <div className="img-container flex flex-col items-center justify-center w-screen h-full pt-64">
      <figure className="w-[40vh]">
        <img
          className="w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJbP3HTA3JJLr50Z2zhZ9gzWtUj3YOCFJ7OqAbbRMqTAmd5T0bvWtOufgagILYI2srj0&usqp=CAU"
          alt=""
        />
      </figure>
      <figure className="imgscroll img1 w-[20vw] -translate-x-48 -translate-y-[400px]">
        <img
          className="w-full absolute object-cover"
          src="https://archello.s3.eu-central-1.amazonaws.com/images/2020/05/14/FRAN-SILVESTRE-ARQUITECTOS-VALENCIA-PATI-BLAU-IMAGES-0060.1589470443.7194.jpg"
          alt=""
        />
      </figure>
      <figure className="imgscroll img2 w-[25vw] translate-x-48 -translate-y-3/4">
        <img
          className="w-full absolute object-cover"
          src="https://www.shutterstock.com/image-illustration/3d-render-abstract-futuristic-glass-600nw-2324430815.jpg"
          alt=""
        />
      </figure>
      <figure className="imgscroll img3 w-[15vw] -translate-x-48 translate-y-48">
        <img
          className="w-full absolute object-cover"
          src="https://cdn.pixabay.com/photo/2024/02/22/09/04/warehouse-8589487_1280.jpg"
          alt=""
        />
      </figure>
      <figure className="imgscroll img4 w-[15vw] translate-x-48 -translate-y-[300px]">
        <img
          className="w-full absolute object-cover"
          src="https://cdn.pixabay.com/photo/2020/04/23/18/41/light-5083606_1280.jpg"
          alt=""
        />
      </figure>
      <div className="text-center font-[NeueKabel] w-full h-[70vh] flex flex-col justify-center items-center">
        <span className=" text-7xl font-black overflow-hidden mb-4">
          <div className=" text-reveal opacity-0 translate-y-24 rotate-6">ARCHITECTURE</div>
        </span>
        <span className="text-4xl overflow-hidden">
          <div className="text-reveal opacity-0 translate-y-24 rotate-6">REIMAGINED</div>
        </span>
      </div>
    </div>
  );
};

export default ImageScroll;
