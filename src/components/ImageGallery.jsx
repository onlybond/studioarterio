import React, { useEffect, useRef } from 'react';

const lerp = (start, end, amt) => {
  return (1 - amt) * start + amt * end;
};

const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max);
};
const ImageGallery = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const el = sliderRef.current;
    const wrap = el.querySelector('.slider-wrapper');
    const items = el.querySelectorAll('.slider-item');
    const bar = el.querySelector('.slider-progress-bar');
    let progress = 0;
    let speed = 0;
    let x = 0;
    let oldX = 0;
    let playrate = 0;
    let wrapWidth = 0;
    let maxScroll = 0;
    let dragging = false;
    let startX = null;

    const init = () => {
      progress = 0;
      speed = 0;
      oldX = 0;
      x = 0;
      playrate = 0;
      calculate();
      events();
      raf();
    };

    const calculate = () => {
      progress = 0;
      wrapWidth = items[0].clientWidth * items.length;
      wrap.style.width = `${wrapWidth}px`;
      maxScroll = wrapWidth - el.clientWidth;
    };

    const handleWheel = (e) => {
      progress += e.deltaY;
      move();
      updateProgressBar();
    };

    const handleTouchStart = (e) => {
      e.preventDefault();
      dragging = true;
      startX = e.clientX || e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      if (!dragging) return false;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      if (clientX === undefined) return false;
      progress += (startX - clientX) * 2.5;
      startX = clientX;
      move();
      updateProgressBar();
    };
    
    const updateProgressBar = () => {
      const progressRatio = progress / maxScroll;
      const scale = 0.18 + progressRatio * 0.82;
      const transformOriginX = progressRatio * 100; // Calculate the X coordinate for transform origin
    
      // Set transform origin to start from left and remain fixed
      bar.style.transform = `scaleX(${scale})`;
    };
    
    const handleTouchEnd = () => {
      dragging = false;
    };

    const move = () => {
      progress = clamp(progress, 0, maxScroll);
    };

    const events = () => {
      el.addEventListener('wheel', handleWheel);
      window.addEventListener('resize', calculate);
      el.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
      el.addEventListener('mousedown', handleTouchStart);
      window.addEventListener('mousemove', handleTouchMove);
      window.addEventListener('mouseup', handleTouchEnd);
      document.body.addEventListener('mouseleave', handleTouchEnd);
    };

    const raf = () => {
      x = lerp(x, progress, 0.1);
      playrate = x / maxScroll;
      wrap.style.transform = `translateX(${-x}px)`;
      bar.style.transform = `scaleX(${0.18 + playrate * 0.82}px)`;
      speed = Math.min(100, oldX - x);
      oldX = x;
      items.forEach((item) => {
        item.style.transform = `scale(${1 - Math.abs(speed) * 0.005})`;
        item.querySelector('img').style.transform = `scaleX(${1 + Math.abs(speed) * 0.004})`;
      });
      requestAnimationFrame(raf);
    };

    init();

    return () => {
      el.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', calculate);
      el.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      el.removeEventListener('mousedown', handleTouchStart);
      window.removeEventListener('mousemove', handleTouchMove);
      window.removeEventListener('mouseup', handleTouchEnd);
      document.body.removeEventListener('mouseleave', handleTouchEnd);
    };
  }, []);
  return (
    <div className='h-screen overflow-hidden flex justify-center items-center'ref={sliderRef} >
    <div className='slider w-full cursor-grab' >
      <div className='slider-wrapper whitespace-nowrap'>
        <div className="slider-item inline-block w-[90vw] sm:w-[40vw] p-[3vw]">
          <figure className='relative pb-[50%] overflow-hidden'>
            <img 
            className='absolute w-full  object-cover'
            src="https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </figure>
        </div>
        <div className="slider-item inline-block w-[90vw] sm:w-[40vw] p-[3vw]">
          <figure className='relative pb-[50%] overflow-hidden'>
            <img 
            className='absolute w-full  object-cover'
            src="https://images.pexels.com/photos/1874636/pexels-photo-1874636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </figure>
        </div>
        <div className="slider-item inline-block w-[90vw] sm:w-[40vw] p-[3vw]">
          <figure className='relative pb-[50%] overflow-hidden'>
            <img 
            className='absolute w-full  object-cover'
            src="https://images.pexels.com/photos/258846/pexels-photo-258846.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
          </figure>
        </div>
        <div className="slider-item inline-block w-[90vw] sm:w-[40vw] p-[3vw]">
          <figure className='relative pb-[50%] overflow-hidden'>
            <img 
            className='absolute w-full  object-cover'
            src="https://images.pexels.com/photos/2127467/pexels-photo-2127467.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
          </figure>
        </div>
        <div className="slider-item inline-block w-[90vw] sm:w-[40vw] p-[3vw]">
          <figure className='relative pb-[50%] overflow-hidden'>
            <img 
            className='absolute w-full  object-cover'
            src="https://images.pexels.com/photos/7245550/pexels-photo-7245550.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
          </figure>
        </div>
        <div className="slider-item inline-block w-[90vw] sm:w-[40vw] p-[3vw]">
          <figure className='relative pb-[50%] overflow-hidden'>
            <img 
            className='absolute w-full  object-cover'
            src="https://images.pexels.com/photos/2693155/pexels-photo-2693155.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
          </figure>
        </div>
        <div className="slider-item inline-block w-[90vw] sm:w-[40vw] p-[3vw]">
          <figure className='relative pb-[50%] overflow-hidden'>
            <img 
            className='absolute w-full  object-cover'
            src="https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
          </figure>
        </div>
        <div className="slider-item inline-block w-[90vw] sm:w-[40vw] p-[3vw]">
          <figure className='relative pb-[50%] overflow-hidden'>
            <img 
            className='absolute w-full  object-cover'
            src="https://images.pexels.com/photos/16961107/pexels-photo-16961107/free-photo-of-facade-of-modern-architecture-building-in-london.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </figure>
        </div>
        <div className="slider-item inline-block w-[90vw] sm:w-[40vw] p-[3vw]">
          <figure className='relative pb-[50%] overflow-hidden'>
            <img 
            className='absolute w-full  object-cover'
            src="https://images.pexels.com/photos/5012092/pexels-photo-5012092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </figure>
        </div>
      </div>
      <div className="slider-progress fixed bottom-0 left-1/2 -translate-x-1/2 w-[80vw] sm:w-[20vw] h-[2px] m-8 bg-[rgba(227,115,93,0.2)]">
        <div className="slider-progress-bar absolute w-full h-full bg-[rgba(227,115,93,0.8)] scale-x-0 origin-[0 0]"></div>
      </div>
    </div>
    </div>
  )
}

export default ImageGallery