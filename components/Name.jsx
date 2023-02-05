import { useState } from "react";
import styles from "./Name.module.css";
import { useStateContext } from "../context/StateContext";

const Name = ({ setKanjiData }) => {
  const { setIsActive, isLoading, setIsLoading, setErrorMessage } =
    useStateContext();
  const [name, setName] = useState("");

  const fetchKanjiData = async () => {
    const translatedNameResponse = await fetch(`api/translate/?input=${name}`);
    const translatedNameData = await translatedNameResponse.json();
    const response = await fetch(
      `/api/kanji/?input=${translatedNameData.name.replace(/[・ーッ]/g, "")}`
    );
    const data = await response.json();

    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (name.length > 0) await setIsActive(true);
      await setIsLoading(true);
      const kanjiData = await fetchKanjiData();
      await setIsLoading(false);
      await setKanjiData(kanjiData);
    } catch (err) {
      console.log(err);
      await setIsLoading(false);
      await setErrorMessage(err);
    }
  };

  return (
    <form
      className={styles.kanjiInput}
      id="name"
      onSubmit={handleSubmit}
      method="GET"
    >
      <input
        type="text"
        name="name"
        className={styles.name}
        onChange={(e) => setName(e.target.value)}
        aria-labelledby="name"
        aria-required="true"
        required
      />
      <button
        type="submit"
        className={styles.kanjifyButton}
        aria-labelledby="Kanjify"
        disabled={isLoading}
      >
        🪄
      </button>
    </form>
  );
};

export default Name;
