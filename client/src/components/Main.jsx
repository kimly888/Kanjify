import React from "react";
import "./Main.css";
import KanjiCard from './KanjiCard'

const Main = () => {
  return (
    <section className="main-container">
      <KanjiCard />
      <KanjiCard />
      <KanjiCard />
    </section>
  );
};

export default Main;
