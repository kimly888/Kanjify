import "./Main.css";
import KanjiCard from "./KanjiCard";

const Main = ({ kanjiData }) => {
  return (
    <section className="main-container">
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
