// export default async function saveFavoriteKanji(req, res) {
//   const favorite = req.query["options"];

//   if (favorite) {
//     await knex("favorite").insert({ kanji: favorite });
//     const countObj = await knex("favorite")
//       .where({ kanji: favorite })
//       .count("kanji");
//     const count = countObj[0]["count"];
//     if (count == 1) {
//       res
//         .status(200)
//         .send(`You're the first person who selected ${favorite} !`);
//     } else {
//       res.status(200).send(`${count} people have chosen ${favorite} !`);
//     }
//   }

//   res.status(202).send();
// }
