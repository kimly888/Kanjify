const wanakana = require("wanakana");
import {
  convertToBigKatakana,
  combineKatakanaNwithPrevLetter,
  combineHiraganaNwithPrevLetter,
  isKatakana,
  katakanaToKanji,
  getKanjiDefinitions,
  combiner,
  getKanjiData,
} from "../../lib/utils";

export default async function (req, res) {
  if (req.method === "GET") {
    const { input: inputValue } = req.query;
    const furigana = wanakana.toHiragana(inputValue);
    const katakanaTemp = wanakana.toKatakana(inputValue);
    const katakana = convertToBigKatakana(katakanaTemp); // Converts small katakana to a big one. e.g.) "ッ"　→ "ツ"
    const katakanaArrTemp = katakana.split("");
    const katakanaArr = combineKatakanaNwithPrevLetter(katakanaArrTemp); // Combine "ン" with its previous character. e.g.) ["ア", "ン"] → ["アン"]

    let furiganaArr;

    if (isKatakana(inputValue)) {
      furiganaArr = combineHiraganaNwithPrevLetter(
        wanakana.toHiragana(katakanaTemp).split("")
      );
    } else {
      furiganaArr = combineHiraganaNwithPrevLetter(furigana.split("")); // If hiragana "ん" is included, combine hiragana "ん" with previous character
    }

    const romajiArr = furiganaArr.map((furigana) =>
      wanakana.toRomaji(furigana)
    );

    const generatedKanjiObj = await katakanaToKanji(katakanaArr);
    const generatedDefinitionObj = await getKanjiDefinitions(generatedKanjiObj);

    const kanjiNames = combiner(generatedKanjiObj);
    const kanjiDefinitions = combiner(generatedDefinitionObj);
    const kanjiData = getKanjiData(
      furiganaArr,
      romajiArr,
      kanjiNames,
      kanjiDefinitions
    );

    res.status(200).send(kanjiData);

    // // Insert data to database
    // for (let i = 0; i < kanjiData.length; i++) {
    //   const kanjiName = kanjiData[i]["kanjiName"];
    //   await knex("kanji").insert({
    //     kanji: kanjiName,
    //     furigana: furigana,
    //     romaji: wanakana.toRomaji(furigana),
    //   });
    // }
  }
}
