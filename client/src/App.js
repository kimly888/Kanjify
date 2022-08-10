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

  // ***** LOCAL STORAGE *****

  // to run each time favourites is set
  useEffect(() => {
    if (localStorage.getItem("favourites") === null) {
      console.log("local storage empty, adding...");
      localStorage.setItem("favourites", JSON.stringify(favourites));
    } else {
      console.log("local storage is not empty, updating...");
      // 1. retrieve
      const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
      // 2. add latest favourite to storedFavourites
      storedFavourites.push(favourites[favourites.length - 1]);
      // 3. update localStorage
      localStorage.setItem("favourites", JSON.stringify(storedFavourites));

      // comparison for testing
      console.log("storedFavourites: ", storedFavourites); // Array of Objects
      console.log("regularFavourites: ", favourites); // Array of Objects
      console.log("latestFavourite: ", favourites[favourites.length - 1]); // Object
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
