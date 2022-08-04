import fetch from "node-fetch";
import express from "express";
import cors from "cors";
import wanakana from "wanakana";
import knex from "./db/knex";
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const wanakana = require('wanakana');
// const knex = require('./db/knex');

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


  function shuffleArray(array) {
    const cloneArray = [...array];

    for (let i = cloneArray.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      // change the element of order in array
      let tmpStorage = cloneArray[i];
      cloneArray[i] = cloneArray[rand];
      cloneArray[rand] = tmpStorage;
    }

    return cloneArray;
  }

  

  async function singleKanjiFuncAry(katakanaAry) {
    let result = [];

    for (let katakana of katakanaAry) {
      const kanjiData = await fetch(`https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?on=${katakana}`,{
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fb204f9fc6msh5fe937040b3b47fp1ec3cfjsn0a6c2ab1a027',
          'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
        }
      });

      const kanji = await kanjiData.json();
      const shuffleKanji = shuffleArray(kanji);
      const selectedShuffleKanji = shuffleKanji.slice(0, 3);

      for (let singleKanji of selectedShuffleKanji) {
        result.push(singleKanji.kanji.character);
      }

    }

    return result;
  }

  const selectedKanjiAry = await singleKanjiFuncAry(katakanaAry);
  console.log(selectedKanjiAry);

  async function getKanjinMeaning(selectedKanjiAry) {
    let result = [];

    for (let kanji of selectedKanjiAry) {
      const kanjiMeaningData = await fetch(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${kanji}`,{
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fb204f9fc6msh5fe937040b3b47fp1ec3cfjsn0a6c2ab1a027',
          'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
        }
      });

      const kanjiDetailObj = await kanjiMeaningData.json();
      const meaning = kanjiDetailObj.kanji.meaning.english;
     
      result.push(meaning);

    }

    return result;
  }

  const meaningAry = await getKanjinMeaning(selectedKanjiAry);
  console.log(meaningAry);

  let finalResult = []

  // create 3 candidate object
  for(let i=0; i<3; i++) {
    let tempObj = {
      kanjiName: "",
      eachKanji: []
    }

    finalResult.push(tempObj);
  }

  // create the number of eachKanji object depending on the number of kanjiName 
  for(let i=0; i<katakanaAry.length; i++) {
    let tempObj = {
      character: "",
      hiragana: "",
      meaning: ""
    }

    finalResult[i].eachKanji.push(tempObj);
  }


  // Sample Data to check if data can be sent to the front
  let resultObj = [
    {
      kanjiName: "区理酢",
      eachKanji: [
        {
          character: "区",
          hiragana: "く",
          meanings: "district"
        },
        {
          character: "理",
          hiragana: "り",
          meanings: "science"
        },
        {
          character: "酢",
          hiragana: "す",
          meanings: "vinegar"
        }
      ]
    }
  ]
  
  res.status(200).send(JSON.stringify({resultObj}));
})
  
app.get("/api/kanjiDB", async (req, res) => {
  const kanji = req.body;
  console.log(kanji);
  await knex("kanji").insert({kanji: "区理酢", furigana: "くりす", romaji: "kurisu"})
  res.send("test")
  
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server is listening on Port", PORT);
});