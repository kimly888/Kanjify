const express = require("express");
const app = express();
const cors = require("cors");
const wanakana = require("wanakana");
const knex = require("./db/knex");
const {
  katakanaToKanji,
  getKanjiDefinitions,
  combiner,
  getKanjiData,
} = require("./helper.js");

app.use(express.json()); //req.body
app.use(cors());

app.get("/api/kanji/", async (req, res) => {
  const { input: romajiName } = req.query;
  const hiragana = wanakana.toKana(romajiName);
  const katakana = wanakana.toKatakana(romajiName);
  const hiraganaArr = hiragana.split("");
  const katakanaArr = katakana.split("");

  const generatedKanjiObj = await katakanaToKanji(katakanaArr);
  const generatedDefinitionObj = await getKanjiDefinitions(generatedKanjiObj);

  const kanjiNames = combiner(generatedKanjiObj);
  const kanjiDefinitions = combiner(generatedDefinitionObj);
  const kanjiData = getKanjiData(hiraganaArr, kanjiNames, kanjiDefinitions);

  res.status(200).send(kanjiData);
});

// app.get("/api/kanjiDB", async (req, res) => {
//   const kanji = req.body;
//   console.log(kanji);
//   await knex("kanji").insert({kanji: "区理酢", furigana: "くりす", romaji: "kurisu"})
//   res.send("test")
// })

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server is listening on Port", PORT);
});
