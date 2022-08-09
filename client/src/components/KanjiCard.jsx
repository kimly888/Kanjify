import "./KanjiCard.css";
import KanjiCharacter from "./KanjiCharacter";
import KanjiCharacterDefinition from "./KanjiCharacterDefinition";

const KanjiCard = ({ kanjiName, eachKanjiData }) => {
  let str = `${eachKanjiData[0].hiragana}=${eachKanjiData[0].character} = ${eachKanjiData[0].definition}`;

  // + kanji.romanji, kanji.character, kanji.definition;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(kanjiName);
    alert("Copied " + kanjiName + " !");
  };
  // TODO update function to save to favourites! local storage first...
  const saveFavourite = () => {
    alert("Saved!");
  };
  return (
    <article className="kanji-card" onClick={copyToClipboard}>
      <div className="kanji-name">
        {eachKanjiData.map((kanji) => (
          <KanjiCharacter
            character={kanji.character}
            hiragana={kanji.hiragana}
            romaji={kanji.romaji}
          />
        ))}
      </div>
      <div className="kanji-name-info">
        {eachKanjiData.map((kanji) => (
          <KanjiCharacterDefinition
            character={kanji.character}
            definition={kanji.definition}
          />
        ))}
      </div>
      <div className="links-wrapper">
        <p className="links-text" onClick={saveFavourite}>
          Add to Favourites
        </p>
        <a
          href={`https://twitter.com/intent/tweet?text=${str}`}
          className="links-text"
          data-size="large"
          data-hashtags="kanjifyed"
          data-show-count="false"
        >
          | Tweet
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div>
    </article>
  );
};

export default KanjiCard;
