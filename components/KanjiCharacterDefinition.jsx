import styles from "./KanjiCard.module.css";

const KanjiCharacterDefinition = ({ character, definition }) => {
  return (
    <div className={styles.KanjiCharacterBreakdown}>
      <h2 className={styles.KanjiCharacter}>{character}</h2>
      <p className={styles.KanjiDefinition}>: {definition}</p>
    </div>
  );
};

export default KanjiCharacterDefinition;
