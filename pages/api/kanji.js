const wanakana = require("wanakana");
// import {
//   katakanaToKanji,
//   getKanjiDefinitions,
//   combiner,
//   getKanjiData,
//   convertToBigKatakana,
//   combineKatakanaNwithPrevLetter,
//   combineHiraganaNwithPrevLetter,
//   isKatakana,
// } from "../../lib/utils";

const shuffle = (arr) => {
  const cloneArray = [...arr];

  for (let i = cloneArray.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    // change the element of order in array
    let tmpStorage = cloneArray[i];
    cloneArray[i] = cloneArray[rand];
    cloneArray[rand] = tmpStorage;
  }

  return cloneArray;
};

export const katakanaToKanji = async (katakanaArr) => {
  const result = {};
  let count = 1;

  for (const katakana of katakanaArr) {
    // Get kanji character for each katakana character
    const kanjiResponseObj = await fetch(
      `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?on=${katakana}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
          "X-RapidAPI-Host": "kanjialive-api.p.rapidapi.com",
        },
      }
    );

    // Get body of response from API which will be array of kanji objects
    const kanjiArr = await kanjiResponseObj.json();
    // Shuffle order of kanji objects in kanji array
    const shuffledKanjiArr = shuffle(kanjiArr);
    // Get first 3 kanji objects of shuffled array
    const kanjiTriplet = shuffledKanjiArr.slice(0, 3);
    // If kanjiTriplet isn't a triplet because there aren't enough kanji for a certain romaji, duplicate its elements until it's a triplet
    if (kanjiTriplet.length !== 3) {
      while (kanjiTriplet.length < 3) {
        kanjiTriplet.push(kanjiTriplet[0] || katakana);
      }
    }

    const kanjiCharactersArr = kanjiTriplet.map((singleKanjiObj) => {
      return typeof singleKanjiObj === "object"
        ? singleKanjiObj.kanji.character
        : singleKanjiObj;
    });

    result[count++] = kanjiCharactersArr;
  }

  return result;
};

export const getKanjiDefinitions = async (generatedKanjiObj) => {
  const result = {};
  let count = 1;

  for (const key in generatedKanjiObj) {
    const definitionArr = [];

    for (const kanji of generatedKanjiObj[key]) {
      const kanjiResponseObj = await fetch(
        `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${kanji}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
            "X-RapidAPI-Host": "kanjialive-api.p.rapidapi.com",
          },
        }
      );

      // Get body of response from API which will be array of definition objects
      const kanjiObj = await kanjiResponseObj.json();
      // Get and store definition of each kanji object
      const definition = kanjiObj.error || kanjiObj.kanji.meaning.english;
      definitionArr.push(definition);
    }

    result[count++] = definitionArr;
  }

  return result;
};

// Function to combine kanji/definition pairs/triplets/quadruplets/etc.
export const combiner = (obj) => {
  const result = {};

  for (const key in obj) {
    for (let i = 0; i < obj[key].length; i++) {
      if (!result[i + 1]) {
        result[i + 1] = [];
      }
      result[i + 1].push(obj[key][i]);
    }
  }

  return result;
};

// Function to organize kanji character and definition values
export const getKanjiData = (
  hiraganaArr,
  romajiArr,
  kanjiObj,
  definitionObj
) => {
  return Object.keys(kanjiObj).map((key) => {
    return {
      kanjiName: kanjiObj[key].join(""),
      eachKanji: kanjiObj[key].map((kanji, index) => {
        return {
          character: kanji,
          hiragana: hiraganaArr[index],
          romaji: romajiArr[index],
          definition: definitionObj[key][index],
        };
      }),
    };
  });
};

// Function to convert small katakana to big katakana when it includes
export const convertToBigKatakana = (katakana) => {
  const smallKatakana = [
    "ァ",
    "ィ",
    "ゥ",
    "ェ",
    "ォ",
    "ヵ",
    "ヶ",
    "ッ",
    "ャ",
    "ュ",
    "ョ",
    "ヮ",
  ];

  for (let i = 0; i < katakana.length; i++) {
    for (let j = 0; j < smallKatakana.length; j++) {
      if (katakana[i] === smallKatakana[j]) {
        let uniCodePoint = katakana[i].codePointAt(0);
        let changeToBigKatakana = String.fromCodePoint(uniCodePoint + 1);
        katakana = katakana.replace(katakana[i], changeToBigKatakana);
      }
    }
  }

  return katakana;
};

// Function to combine katakana "ン" with previous character
export const combineKatakanaNwithPrevLetter = (katakana) => {
  if (katakana.includes("ン")) {
    const indexKatakanaN = katakana.indexOf("ン");
    const katakanaN = katakana[indexKatakanaN];
    const preLetter = katakana[indexKatakanaN - 1];
    const combineTwoLetters = preLetter + katakanaN;
    katakana.splice(indexKatakanaN - 1, 2, combineTwoLetters);
  }
  return katakana;
};

// Function to combine hiragana "ん" with previous character
export const combineHiraganaNwithPrevLetter = (hiragana) => {
  if (hiragana.includes("ん")) {
    const indexHiraganaN = hiragana.indexOf("ん");
    const hiraganaN = hiragana[indexHiraganaN];
    const preLetter = hiragana[indexHiraganaN - 1];
    const combineTwoLetters = preLetter + hiraganaN;
    hiragana.splice(indexHiraganaN - 1, 2, combineTwoLetters);
  }
  return hiragana;
};

// Function to check if input value is Katakana
export const isKatakana = (inputValue) => {
  const katakanaReg = /^[ァ-ンヴー]*$/;
  return katakanaReg.test(inputValue);
};

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
