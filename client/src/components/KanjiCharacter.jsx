const KanjiCharacter = ({ hiragana, character, romaji }) => {
  return (
    <div className="kanji-character-wrapper">
      <h3 className="furigana">{hiragana}</h3>
      <h1 className="kanji">{character}</h1>
      <h3 className="romaji">{romaji}</h3>
    </div>
  );
};

export default KanjiCharacter;
