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
      style={{
        marginBottom: isActive ? "10%" : "0",
        transition: "all 1s",
      }}
    >
      <input
        type="text"
        name="name"
        className={styles.name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <button
        type="submit"
        className={styles.kanjifyButton}
        onClick={handleClick}
        disabled={isLoading}
      >
        🪄
      </button>
    </form>
  );
};

export default Name;
