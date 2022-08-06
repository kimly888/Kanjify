import "./Name.css";
import React, { useState } from "react";

const Name = ({ isActive, setIsActive, setKanjiData }) => {
  const [name, setName] = useState("");

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://kanjify-server.herokuapp.com/api/kanji/?input=${name}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      setKanjiData(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <form
      onSubmit={onSubmitForm}
      method="GET"
      style={{
        marginBottom: isActive ? "30rem" : "0",
        transition: "all 1s",
      }}
    >
      <input
        type="text"
        name="name"
        id="name"
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit" onClick={handleClick}>
        🪄
      </button>
    </form>
  );
};

export default Name;
