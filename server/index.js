const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); //req.body
app.use(cors());

app.get("/test", (req, res) => {
  // res.json({"message": "OK"});
  // res.status(200).send(JSON.stringify({"body": "OK"}));
  res.status(200).send(JSON.stringify({message: "OK"}));;
  console.log("aaaaaaaaaaaa");
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server is listening on Port", PORT);
});