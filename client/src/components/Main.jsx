import "./Main.css";
import KanjiCard from "./KanjiCard";
import Options from "./Options";
// import { Fireworks } from "fireworks/lib/react";
import LoadingSpinner from "./LoadingSpinner";

// TODO render a favourites page

const Main = ({
  isActive,
  kanjiData,
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

      {isLoading ? (
        <span></span>
      ) : (
        <Options kanjiData={kanjiData} isSubmitted={isSubmitted} />
      )}
    </section>
  );
};

export default Main;
