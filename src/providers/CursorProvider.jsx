import React, { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  return (
    <CursorContext.Provider value={{ isHovered, setIsHovered, cursorText, setCursorText }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
