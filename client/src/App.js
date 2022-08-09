import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import LoadingSpinner from "./components/LoadingSpinner";

const HOME_API = "http://localhost:4000/";

function App() {
  const [kanjiData, setKanjiData] = useState([]);

  // added favourites
  const [favourites, setFavourites] = useState([]);
  const [isFavourites, setIsFavourites] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setSubmit] = useState(false);

  // getItem(favourite[0]) === array of x objects
  useEffect(() => {
    console.log("test when useEffect runs for saving local storage");
    localStorage.setItem("favourite:", JSON.stringify(favourites[0]));
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
        kanjiData={kanjiData}
        favourites={favourites}
        setFavourites={setFavourites}
        isSubmitted={isSubmitted}
      />
    </div>
  );
}

export default App;
