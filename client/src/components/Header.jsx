import React from "react";
import "./Header.css";
import Name from "./Name";
import Submit from "./Submit";

const Header = () => {
  return (
    <header>
      <h1 className="title">Kanjify</h1>
      <Name />
      <Submit />
    </header>
  );
};

export default Header;
