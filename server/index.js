const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const knex = require('../db/knex');

app.use(express.json()); //req.body
app.use(cors());

app.get("/api/getKanji", (req, res) => {

})

app.get("/api/kanji", async (req, res) => {
  const kanji = req.body;
  console.log(kanji);
  await knex("kanji").insert({kanji: "区理酢", furigana: "くりす", romaji: "kurisu", ""})
  res.send("test")
  
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server is listening on Port", PORT);
});