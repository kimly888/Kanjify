import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const HOME_API = "http://localhost:4000/";

function App() {
  const [kanjiData, setKanjiData] = useState([]);
  const [isActive, setIsActive] = useState(false);

  return (
    <body className="App">
      <Header
        isActive={isActive}
        setIsActive={setIsActive}
        setKanjiData={setKanjiData}
      />
      <Main isActive={isActive} kanjiData={kanjiData} />
    </body>
  );
}

export default App;
