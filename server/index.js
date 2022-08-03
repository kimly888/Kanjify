const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(express.json()); //req.body
app.use(cors());

app.get("/api/getKanji", (req, res) => {

})

app.post("/api/kanji", (req, res) => {
  const { kanji } = req.body;
  console.log(req.body);
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server is listening on Port", PORT);
});