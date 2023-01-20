import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import LoadingSpinner from "../components/LoadingSpinner";

const HOME_API = "http://localhost:4000/";

function App() {
  const [kanjiData, setKanjiData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setSubmit] = useState(false);

  return (
    <div className="app">
      <Header
        isActive={isActive}
        setIsActive={setIsActive}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setKanjiData={setKanjiData}
      />
      <Main
        isActive={isActive}
        isLoading={isLoading}
        kanjiData={kanjiData}
        isSubmitted={isSubmitted}
      />
    </div>
  );
}

export default App;
