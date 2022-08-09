import "./KanjiCard.css";
import KanjiCharacter from "./KanjiCharacter";
import KanjiCharacterDefinition from "./KanjiCharacterDefinition";

const KanjiCard = ({ kanjiName, eachKanjiData, favourites, setFavourites }) => {
  const saveFavourite = async () => {
    console.log("eachKanjiData", eachKanjiData);
    setFavourites((current) => [...current, eachKanjiData]);
  };

  return (
    <article className="kanji-card">
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
          href={`https://twitter.com/intent/tweet?text=OMG, I can't believe my name in Japanese is ${kanjiName}!`}
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
