import { useState } from "react";
import styles from "./Name.module.css";
import { useStateContext } from "../context/StateContext";

const Name = ({ setKanjiData }) => {
  const { isActive, setIsActive, isLoading, setIsLoading } = useStateContext();
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = async () => {
    if (name.length > 0) {
      setIsActive(true);
    }
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const translatedNameResponse = await fetch(
        `api/translate/?input=${name}`
      );
      const translatedNameData = await translatedNameResponse.json();

      const response = await fetch(
        `/api/kanji/?input=${translatedNameData.name.replace(/[・ーッ]/g, "")}`
      );
      const data = await response.json();

      setIsLoading(false);
      setKanjiData(data);
    } catch (err) {
      setErrorMessage("Unable to get your Kanji name...");
      setIsLoading(false);
    }
  };

  return (
    <form
      className={styles.kanjiInput}
      id="name"
      onSubmit={onSubmitForm}
      method="GET"
    >
      <input
        type="text"
        name="name"
        className={styles.name}
        onChange={(event) => setName(event.target.value)}
        aria-labelledby="name"
        aria-required="true"
        required
      />
      <button
        type="submit"
        className={styles.kanjifyButton}
        aria-labelledby="Kanjify"
        onClick={handleClick}
        disabled={isLoading}
      >
        🪄
      </button>
    </form>
  );
};

export default Name;
