import React from "react";
import "./Header.css";
import Name from "./Name";

const Header = () => {
  return (
    <header>
      <h1 className="title">Kanjify</h1>
      <Name />
    </header>
  );
};

export default Header;
