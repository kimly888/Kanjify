import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Head from "next/head";

function App() {
  const [kanjiData, setKanjiData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setSubmit] = useState(false);

  return (
    <>
      <Head>
        <title>Kanjify</title>
        <meta
          name="description"
          content="Introducing Kanjify! Easily convert your name into Japanese characters with just one click. Discover the meaning of your name in Japanese and impress your friends and family today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        <Header
          isActive={isActive}
          setIsActive={setIsActive}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setKanjiData={setKanjiData}
        />
        <Main
          isActive={isActive}
          isLoading={isLoading}
          kanjiData={kanjiData}
          isSubmitted={isSubmitted}
        />
      </div>
    </>
  );
}

export default App;
