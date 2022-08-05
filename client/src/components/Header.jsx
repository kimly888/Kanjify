import "./Header.css";
import Name from "./Name";
import React, { useState } from "react";

const Header = ({ isActive, setIsActive, setKanjiData }) => {
  return (
    <header
      style={{
        width: isActive ? "50%" : "100%",
        transition: "width 1s",
      }}
    >
      <h1 className="title">Kanjify</h1>
      <h2>Enter your name</h2>
      <Name setIsActive={setIsActive} setKanjiData={setKanjiData} />
    </header>
  );
};

export default Header;
