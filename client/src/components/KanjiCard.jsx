import "./KanjiCard.css";
import KanjiCharacter from "./KanjiCharacter";
import KanjiCharacterDefinition from "./KanjiCharacterDefinition";

const KanjiCard = ({ kanjiName, eachKanjiData, favourites, setFavourites }) => {
  // let str = `${eachKanjiData[0].hiragana}=${eachKanjiData[0].character} = ${eachKanjiData[0].definition}`;
  // let str1 = `${eachKanjiData[1].hiragana}=${eachKanjiData[1].character} = ${eachKanjiData[1].definition}`;
  // let str2 = `${eachKanjiData[2].hiragana}=${eachKanjiData[2].character} = ${eachKanjiData[2].definition}`;

  // const copyToClipboard = async () => {
  //   await navigator.clipboard.writeText(kanjiName);
  //   alert("Copied " + kanjiName + " !");
  // };

  const saveFavourite = async () => {
    console.log("eachKanjiData", eachKanjiData);
    setFavourites((current) => [...current, eachKanjiData]);
  };

  return (
    // <article className="kanji-card" onClick={copyToClipboard}>
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
        {/* <a
          href={`https://twitter.com/intent/tweet?text=${str}, 意味(${str1}), 意味(${str2})`}
          className="links-text"
          data-size="large"
          data-hashtags="kanjifyed"
          data-show-count="false"
        >
          | Tweet
        </a> */}
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
