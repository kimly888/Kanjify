import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import LoadingSpinner from "./components/LoadingSpinner";

const HOME_API = "http://localhost:4000/";

function App() {
  const [kanjiData, setKanjiData] = useState([]);

  // favourites state
  const [favourites, setFavourites] = useState([]);
  const [isFavourites, setIsFavourites] = useState(false);

  // toggle states
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <div className="App">
      <Header
        isActive={isActive}
        setIsActive={setIsActive}
        isFavourites={isFavourites}
        setIsFavourites={setIsFavourites}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setKanjiData={setKanjiData}
      />
      <Main
        isActive={isActive}
        isLoading={isLoading}
        kanjiData={isFavourites ? favourites : kanjiData}
        isFavourites={isFavourites}
        favourites={favourites}
        setFavourites={setFavourites}
        isSubmitted={isSubmitted}
      />
    </div>
  );
}

export default App;
