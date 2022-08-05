import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const HOME_API = "http://localhost:4000/";

function App() {
  const testData = [
    {
      kanjiName: "区理酢",
      eachKanji: [
        {
          character: "区",
          hiragana: "く",
          romaji: "ku",
          definition: "ward; borough; city",
        },
        {
          character: "理",
          hiragana: "り",
          romaji: "ri",
          definition: "reason; principle; logic",
        },
        {
          character: "酢",
          hiragana: "す",
          romaji: "su",
          definition: "vinegar",
        },
      ],
    },
    {
      kanjiName: "苦李巣",
      eachKanji: [
        {
          character: "苦",
          hiragana: "く",
          romaji: "ku",
          definition:
            "pain; anguish; suffering; distress; anxiety; worry; trouble; difficulty; hardship",
        },
        {
          character: "李",
          hiragana: "り",
          romaji: "ri",
          definition: "Japanese plum (Prunus salicina); Chinese plum",
        },
        {
          character: "巣",
          hiragana: "す",
          romaji: "su",
          definition: "nest; rookery; breeding place; hive",
        },
      ],
    },
    {
      kanjiName: "口離洲",
      eachKanji: [
        {
          character: "口",
          hiragana: "く",
          romaji: "ku",
          definition: "mouth",
        },
        {
          character: "離",
          hiragana: "り",
          romaji: "ri",
          definition: "detach, separation, disjoin, digress",
        },
        {
          character: "洲",
          hiragana: "す",
          romaji: "su",
          definition: "continent, sandbar, island, country",
        },
      ],
    },
  ];
  const [kanjiData, setKanjiData] = useState([]);
  const [isActive, setIsActive] = useState(false);

  return (
    <body className="App">
      <Header
        isActive={isActive}
        setIsActive={setIsActive}
        setKanjiData={setKanjiData}
      />
      <Main
        isActive={isActive}
        kanjiData={kanjiData}
      />
    </body>
  );
}

export default App;
