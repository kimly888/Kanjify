import styles from "./KanjiCard.module.css";
import KanjiCharacter from "./KanjiCharacter";
import KanjiCharacterDefinition from "./KanjiCharacterDefinition";

const KanjiCard = ({ kanjiName, eachKanjiData }) => {
  // const copyToClipboard = async () => {
  //   await navigator.clipboard.writeText(kanjiName);
  //   alert("Copied " + kanjiName + " !");
  // };

  return (
    <article className={styles.kanjiCard}>
      <div className={styles.kanjiName}>
        {eachKanjiData.map((kanji, index) => (
          <KanjiCharacter
            character={kanji.character}
            hiragana={kanji.hiragana}
            romaji={kanji.romaji}
            key={index}
          />
        ))}
      </div>

      <div className={styles.kanjiNameInfo}>
        {eachKanjiData.map((kanji, index) => (
          <KanjiCharacterDefinition
            character={kanji.character}
            definition={kanji.definition}
            key={index}
          />
        ))}
      </div>
    </article>
  );
};

export default KanjiCard;
