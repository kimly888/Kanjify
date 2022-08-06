import React from "react";

const KanjiCharacterDefinition = ({ character, definition }) => {
  return (
    <div className="kanji-character-breakdown">

      <div className="kanji-character">
        <h2 className="single-kanji">{character}</h2>
      </div>
      
      <div className="kanji-description">
        <p>: {definition}</p>
      </div>
      
    </div>
  );
};

export default KanjiCharacterDefinition;
