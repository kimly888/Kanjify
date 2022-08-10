import "./KanjiCard.css";
import KanjiCharacter from "./KanjiCharacter";
import { useState } from "react";
import KanjiCharacterDefinition from "./KanjiCharacterDefinition";

const KanjiCard = ({
  kanjiName,
  eachKanjiData,
  favourites,
  setFavourites,
  isFavourites,
}) => {
  const [isSaved, setIsSaved] = useState(false);

  const saveFavourite = () => {
    if (!isSaved) {
      // update favourites and toggle saved state for this card
      setFavourites((current) => [
        ...current,
        { kanjiName: kanjiName, eachKanji: eachKanjiData },
      ]);
      // render single card as favourite if saved
      setIsSaved(true);
    }
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
        <p
          className={
            isSaved || isFavourites ? "links-text-saved" : "links-text"
          }
          onClick={saveFavourite}
        >
          {isSaved || isFavourites ? "Added" : "Add to Favourites"}
        </p>

        <a
          href={`https://twitter.com/intent/tweet?text=My name in Japanese is ${kanjiName}! Check out Kanjify.com to get yours!`}
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
