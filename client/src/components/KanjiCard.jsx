import "./KanjiCard.css";
import KanjiCharacter from "./KanjiCharacter";
import KanjiCharacterDefinition from "./KanjiCharacterDefinition";

const KanjiCard = ({ kanjiName, eachKanjiData }) => {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(kanjiName);
    alert("Copied " + kanjiName + " !");
  };

  return (
    <article className="kanji-card" onClick={copyToClipboard}>
      <button>
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          class="twitter-share-button"
          data-size="large"
          data-hashtags="kanjifyed"
          data-show-count="false"
        >
          Tweet
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </button>

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
        <p className="links-text">Add to favourites +</p>
      </div>
    </article>
  );
};

export default KanjiCard;
