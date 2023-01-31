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
          content="Introducing Kanjify! Easily convert your name into Japanese and discover its meaning with just one click. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
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
