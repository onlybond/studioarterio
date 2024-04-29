import React, { useState, useEffect } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery";
import Loading from "./components/Loading ";
import Nav from "./components/Nav";
import Cursor from "./components/CustomCursor";
import ImageScroll from "./components/ImageScroll";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 2000);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="w-screen h-full flex flex-col items-center justify-center">
      <Cursor className="hidden sm:block w-full h-full"/>
      {!isLoaded && <Loading />}
      {isLoaded && (
        <>
          <Nav />
          {/* <div className="h-screen w-screen bg-black"></div> */}
          <ImageScroll />
          {/* <ImageGallery />   */}
        </>
      )}
    </div>
  );
}

export default App;
