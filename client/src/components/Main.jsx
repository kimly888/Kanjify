import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <section className="main-container">
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
              <h2>輝</h2>
            </div>
            <div className="kanji-description">
              <ul>
                <li>Definition: to shine; to glitter; to sparkle</li>
              </ul>
            </div>
          </div>
          <div className="kanji-character-breakdown">
            <div className="kanji-character">
              <h2>夢</h2>
            </div>
            <div className="kanji-description">
              <ul>
                <li>Definition: dream</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Main;
