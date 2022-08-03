const express = require("express");
const app = express();

app.use(express.json()); //req.body

app.get("/test", (req, res) => {
  res.status(200).send("OK");
  console.log("aaaaaaaaaaaa");
})