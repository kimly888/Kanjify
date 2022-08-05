function shuffle(arr) {
  const cloneArray = [...arr];

  for (let i = cloneArray.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    // change the element of order in array
    let tmpStorage = cloneArray[i];
    cloneArray[i] = cloneArray[rand];
    cloneArray[rand] = tmpStorage;
  }

  return cloneArray;
}

async function katakanaToKanji(katakanaArr) {
  const result = {};
  let count = 1;

  for (const katakana of katakanaArr) {
    // Get kanji character for each katakana character
    const kanjiResponseObj = await fetch(
      `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?on=${katakana}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "fb204f9fc6msh5fe937040b3b47fp1ec3cfjsn0a6c2ab1a027",
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

    const kanjiCharactersArr = kanjiTriplet.map((singleKanjiObj) => {
      return singleKanjiObj.kanji.character;
    });

    result[count++] = kanjiCharactersArr;
  }

  return result;
}

async function getKanjiDefinitions(generatedKanjiObj) {
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
            "X-RapidAPI-Key":
              "fb204f9fc6msh5fe937040b3b47fp1ec3cfjsn0a6c2ab1a027",
            "X-RapidAPI-Host": "kanjialive-api.p.rapidapi.com",
          },
        }
      );

      // Get body of response from API which will be array of definition objects
      const kanjiObj = await kanjiResponseObj.json();
      // Get and store definition of each kanji object
      const definition = kanjiObj.kanji.meaning.english;
      definitionArr.push(definition);
    }

    result[count++] = definitionArr;
  }

  return result;
}

// Function to combine kanji/definition pairs/triplets/quadruplets/etc.
const combiner = (obj) => {
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
const getKanjiData = (hiraganaArr, kanjiObj, definitionObj) => {
  return Object.keys(kanjiObj).map((key) => {
    return {
      kanjiName: kanjiObj[key].join(""),
      eachKanji: kanjiObj[key].map((kanji, index) => {
        return {
          character: kanji,
          hiragana: hiraganaArr[index],
          definition: definitionObj[key][index],
        };
      }),
    };
  });
};

module.exports = {
  katakanaToKanji,
  getKanjiDefinitions,
  combiner,
  getKanjiData,
};
