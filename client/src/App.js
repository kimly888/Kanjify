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
  const [storedFavourites, setStoredFavourites] = useState([]);

  // toggle states
  const [isFavourites, setIsFavourites] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setSubmit] = useState(false);

  useEffect(() => {
    if (favourites.length !== 0) {
      // log
      console.log("useEffect running to save local storage");

      // format object to store
      const kanjiObject = { eachKanji: favourites[0] };

      // if exists, update; if not, initialise
      const storedData = JSON.parse(localStorage.getItem("kanjiData"));
      console.log("From local storage", storedData);

      //
      if (storedData) {
        storedData.push(kanjiObject);
        localStorage.setItem("kanjiData", JSON.stringify(storedData));
        setStoredFavourites(storedData);
        console.log("storedFavourites State: ", storedFavourites);
      } else {
        localStorage.setItem("kanjiData", JSON.stringify([kanjiObject]));
        setStoredFavourites([kanjiObject]);
        console.log("storedFavourites State: ", storedFavourites);
      }
    }
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
        kanjiData={isFavourites ? storedFavourites : kanjiData}
        isFavourites={isFavourites}
        favourites={favourites}
        setFavourites={setFavourites}
        isSubmitted={isSubmitted}
      />
    </div>
  );
}

export default App;
