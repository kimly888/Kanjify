const KanjiCharacterDefinition = ({ character, definition }) => {
  return (
    <div className="kanji-character-breakdown">
      <h2 className="kanji-character">{character}</h2>
      <p className="kanji-definition">: {definition}</p>
    </div>
  );
};

export default KanjiCharacterDefinition;
