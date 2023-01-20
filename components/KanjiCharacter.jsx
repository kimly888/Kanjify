import styles from "./KanjiCard.module.css";
import mainStyles from "./Main.module.css";

const KanjiCharacter = ({ hiragana, character, romaji }) => {
  return (
    <div className={styles.kanjiCardWrapper}>
      <h3 className={mainStyles.furigana}>{hiragana}</h3>
      <h1 className={mainStyles.kanji}>{character}</h1>
      <h3 className={mainStyles.romaji}>{romaji}</h3>
    </div>
  );
};

export default KanjiCharacter;
