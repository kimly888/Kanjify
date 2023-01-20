import styles from "./KanjiCard.module.css";

const KanjiCharacterDefinition = ({ character, definition }) => {
  return (
    <div className={styles.kanjiCharacterBreakdown}>
      <h2 className={styles.kanjiCharacter}>{character}</h2>
      <p className={styles.kanjiDefinition}>: {definition}</p>
    </div>
  );
};

export default KanjiCharacterDefinition;
