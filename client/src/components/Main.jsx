import "./Main.css";
import KanjiCard from "./KanjiCard";
import Options from "./Options";
// import { Fireworks } from "fireworks/lib/react";
import LoadingSpinner from "./LoadingSpinner";
import { useInsertionEffect } from "react";

const Main = ({
  isActive,
  kanjiData,
  isFavourites,
  favourites,
  setFavourites,
  isLoading,
  isSubmitted,
}) => {
  let fxProps = {
    colors: ["#ffc95e", "#fe5f55", "#5b5f97"],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0),
    }),
  };

  let storedFaves;
  if (localStorage.getItem("favourites") !== null) {
    storedFaves = JSON.parse(localStorage.getItem("favourites"));
  }

  const faveData = storedFaves ? storedFaves : favourites;

  if (isFavourites) {
    return (
      <section
        className="main-container"
        style={{
          width: isActive ? "50%" : "0",
          transition: "width 1s",
        }}
      >
        {faveData.map((fave) => {
          return (
            <KanjiCard
              kanjiName={fave.kanjiName}
              eachKanjiData={fave.eachKanji}
              favourites={favourites}
              setFavourites={setFavourites}
              isFavourites={isFavourites}
            />
          );
        })}
      </section>
    );
  } else if (!isFavourites) {
    return (
      <section
        className="main-container"
        style={{
          width: isActive ? "50%" : "0",
          transition: "width 1s",
        }}
      >
        {/* {isActive && <Fireworks {...fxProps} />} */}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          kanjiData.map((name) => {
            return (
              <KanjiCard
                kanjiName={name.kanjiName}
                eachKanjiData={name.eachKanji}
                favourites={favourites}
                setFavourites={setFavourites}
              />
            );
          })
        )}

        {/* currently unused */}
        {/* {isLoading ? (
          <span></span>
        ) : (
          <Options kanjiData={kanjiData} isSubmitted={isSubmitted} />
        )} */}
      </section>
    );
  }
};

export default Main;
