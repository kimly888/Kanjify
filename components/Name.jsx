import { useState } from "react";
import styles from "./Name.module.css";

const Name = ({
  isActive,
  setIsActive,
  isLoading,
  setIsLoading,
  setKanjiData,
}) => {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(`/api/kanji/?input=${name}`);
      const data = await response.json();
      setIsLoading(false);
      setKanjiData(data);
    } catch (err) {
      setErrorMessage("Unable to get your Kanji name...");
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    if (name.length > 0) setIsActive(true);
  };

  return (
    <form
      className={styles.kanjiInput}
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
