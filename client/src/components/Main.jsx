import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <section className="main-container">
      <article className="kanji-card">
        <div className="kanji-name">
          <h3 className="furigana">きむ</h3>
          <h1 className="kanji">輝夢</h1>
          <h3 className="romaji">ki mu</h3>
        </div>
        <div className="kanji-description">
          <div className="kanji-breakdown">
            <div className="kanji-character">
              <h2>輝</h2>
            </div>
            <div className="kanji-description">
              <ul>
                <li>Definition: to shine; to glitter; to sparkle</li>
              </ul>
            </div>
          </div>
          <div className="kanji-breakdown">
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
