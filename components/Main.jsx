import KanjiCard from "./KanjiCard";
import Options from "./Options";
import LoadingSpinner from "./LoadingSpinner";
import styles from "./Main.module.css";

const Main = ({ isActive, kanjiData, isLoading, isSubmitted }) => {
  return (
    <section
      className={styles.mainContainer}
      style={{
        width: isActive ? "50%" : "0",
        transition: "width 1s",
      }}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        kanjiData.map((name, index) => {
          return (
            <KanjiCard
              kanjiName={name.kanjiName}
              eachKanjiData={name.eachKanji}
              key={index}
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
