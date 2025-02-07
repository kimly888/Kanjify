import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Head from "next/head";

function App() {
  const [kanjiData, setKanjiData] = useState([]);

  return (
    <>
      <Head>
        <title>Kanjify</title>
        <meta
          name="description"
          content="Introducing Kanjify! Easily convert your name into Japanese and discover its meaning with just one click."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
        <meta property="og:url" content="https://kanjify.vercel.app/" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/90857923/183323486-118d6e93-6000-4c69-9623-94d48353ec9b.png"
        />
        <meta property="og:title" content="Kanjify" />
        <meta property="og:site_name" content="Kanjify" />
        <meta
          property="og:description"
          content="Introducing Kanjify! Easily convert your name into Japanese and discover its meaning with just one click."
        />
        <meta
          name="keywords"
          content="kanji name, name in Japanese, kanji character, Japanese character, kanji symbols, japanese writing"
        />
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="app">
        <Header setKanjiData={setKanjiData} />
        <Main kanjiData={kanjiData} />
      </div>
    </>
  );
}

export default App;
