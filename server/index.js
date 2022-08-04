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
  await knex("users").insert({username: "foo"})
  // const selected = await knex.select().from("users");
  // console.log(selected)
  res.send("test")
  // const id = await database("users").insert(kanji, 'id');
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server is listening on Port", PORT);
});