import "./Header.css";
import Name from "./Name";
import WaveDown from "./WaveDown";
import WaveUp from "./WaveUp";
import React, { useState } from "react";

const Header = ({ isActive, setIsActive, setKanjiData }) => {
  return (
    <header
      style={{
        width: isActive ? "50%" : "100%",
        transition: "width 1s",
      }}
    >
      <WaveDown />
      <h1 className="title">Kanjify</h1>
      <label className="caption" htmlFor="name">
        Enter your name
      </label>
      <Name setIsActive={setIsActive} setKanjiData={setKanjiData} />
      <WaveUp />
    </header>
  );
};

export default Header;
