import React from "react";
import "./KanjiCard.css";

// Props to be passed: kanji, furigana, romaji, definition

const KanjiCard = () => {
  return (
    <article className="kanji-card">
      <div className="kanji-name">
        <div className="kanji-character-wrapper">
          <h3 className="furigana">き</h3>
          <h1 className="kanji">輝</h1>
          <h3 className="romaji">ki</h3>
        </div>
        <div className="kanji-character-wrapper">
          <h3 className="furigana">む</h3>
          <h1 className="kanji">夢</h1>
          <h3 className="romaji">mu</h3>
        </div>
      </div>

      <div className="kanji-name-info">
        <div className="kanji-character-breakdown">
          <div className="kanji-character">
            <h2 className="kanji">輝</h2>
          </div>
          <div className="kanji-description">
              <p>to shine; to glitter; to sparkle</p>
          </div>
        </div>
        <div className="kanji-character-breakdown">
          <div className="kanji-character">
            <h2>夢</h2>
          </div>
          <div className="kanji-description">
              <p>: dream</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default KanjiCard;
