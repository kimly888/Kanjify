import "./Header.css";
import Name from "./Name";
import React, { useState } from "react";

const Header = ({
  isActive,
  setIsActive,
  isLoading,
  setIsLoading,
  setKanjiData,
}) => {
  return (
    <header
      // JS object for style
      style={{
        width: isActive ? "50%" : "100%",
        transition: "all 1s",
      }}
    >
      <h1 className="title">Kanjify</h1>
      <label className="caption" htmlFor="name">
        Enter your name
      </label>
      <Name
        isActive={isActive}
        setIsActive={setIsActive}
        setKanjiData={setKanjiData}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </header>
  );
};

export default Header;
