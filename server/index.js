const express = require("express");
const app = express();
const cors = require("cors");
const wanakana = require('wanakana');
const knex = require('./db/knex');
const path = require('path');


app.use(express.static(path.join(__dirname, "client")));

app.use(express.json()); //req.body
app.use(cors());

app.get("/api/getKanji", (req, res) => {

})

app.get("/api/kanji/", async (req, res) => {
  let result = [];

  const { input: romajiName } = req.query;
  const hiragana = wanakana.toKana(romajiName);
  const katakana = wanakana.toKatakana(romajiName);
  const katakanaAry = katakana.split('');

  const kanjiData = await fetch("https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/",{
    method: 'GET',
    params: {on: `${katakanaAry[0]}`},
    headers: {
      'X-RapidAPI-Key': 'fb204f9fc6msh5fe937040b3b47fp1ec3cfjsn0a6c2ab1a027',
      'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
    }
  });

  const kanji = await kanjiData.json();
  const singleKanji = kanji[22].kanji.character;

  const kanjiDetailData = await fetch(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${singleKanji}`, {
    headers: {
      'X-RapidAPI-Key': 'fb204f9fc6msh5fe937040b3b47fp1ec3cfjsn0a6c2ab1a027',
      'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
    }
  })

  const kanjiDetailObj = await kanjiDetailData.json();
  const meaning = kanjiDetailObj.kanji.meaning.english;

  // Sample Data to check if data can be sent to the front
  let resultObj = [
    {
      kanjiName: "区理酢",
      eachKanji: [
        {
          kanji: "区",
          hiragana: "く",
          meanings: "district"
        },
        {
          kanji: "理",
          hiragana: "り",
          meanings: "science"
        },
        {
          kanji: "酢",
          hiragana: "す",
          meanings: "vinegar"
        }
      ]
    }
  ]
  
  res.status(200).send(JSON.stringify({resultObj}));
})
  
app.get("/api/kanji", async (req, res) => {
  const kanji = req.body;
  console.log(kanji);
  await knex("kanji").insert({kanji: "区理酢", furigana: "くりす", romaji: "kurisu"})
  res.send("test")
  
})

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/src"));
// });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server is listening on Port", PORT);
});