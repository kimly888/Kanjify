import KanjiCard from "./KanjiCard";
// import Options from "./Options";
import LoadingSpinner from "./LoadingSpinner";
import styles from "./Main.module.css";
import { useStateContext } from "../context/StateContext";

const Main = ({ kanjiData }) => {
  const { isActive, isLoading } = useStateContext();

  return (
    <section
      className={`${
        isActive ? styles.mainContainerOpen : styles.mainContainerHidden
      } ${isActive ? styles.halfScreen : styles.hidden}`}
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

      {/* {isLoading ? (
        <span></span>
      ) : (
        <Options kanjiData={kanjiData} isSubmitted={isSubmitted} />
      )} */}
    </section>
  );
};

export default Main;
