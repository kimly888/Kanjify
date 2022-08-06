import "./Main.css";
import KanjiCard from "./KanjiCard";

const Main = ({ isActive, kanjiData }) => {
  return (
    <section
      className="main-container"
      style={{
        width: isActive ? "50%" : "0",
        transition: "width 1s",
      }}
    >
      {kanjiData.map((name) => {
        return (
          <KanjiCard
            kanjiName={name.kanjiName}
            eachKanjiData={name.eachKanji}
          />
        );
      })}
    </section>
  );
};

export default Main;
