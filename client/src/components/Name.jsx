import "./Name.css";
import React, { useState } from "react";

const HOME_API = "http://localhost:4000/";

const Name = ({
  isActive,
  setIsActive,
  isFavourites,
  setIsFavourites,
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
      const response = await fetch(
        `https://kanjify-server-v2.herokuapp.com/api/kanji/?input=${name}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      setIsLoading(false);
      setKanjiData(data);
    } catch (err) {
      setErrorMessage("Unable to fetch user list");
      setIsLoading(false);
    }
  };

  const [shake, setShake] = useState(false);

  const animate = () => {
    // Button begins to shake
    setShake(true);
    // Buttons stops to shake after 2 seconds
    setTimeout(() => setShake(false), 500);
  };

  const handleClick = () => {
    if (name.length === 0) {
      animate();
      !isLoading ? isLoading(true) : isLoading(false);
    }
    setIsActive(true);
  };

  const handleFavourites = () => {
    !isFavourites ? setIsFavourites(true) : setIsFavourites(false);
    setIsActive(true);
  };

  return (
    <form
      onSubmit={onSubmitForm}
      className={shake ? `shake` : null}
      method="GET"
      style={{
        marginBottom: isActive ? "20rem" : "10rem",
        transition: "all 1s",
      }}
    >
      <input
        type="text"
        name="name"
        id="name"
        onChange={(event) => {
          if (event.target.value.includes(" ")) {
            setName(event.target.value.replace(/\s/g, ""));
          } else {
            setName(event.target.value);
          }
        }}
      />
      <button type="submit" onClick={handleClick} disabled={isLoading}>
        🪄
      </button>
      {/* placeholder for favourites */}
      <p
        className={isFavourites ? "search" : "favourites"}
        onClick={handleFavourites}
      >
        {isFavourites ? "Toggle Search" : "Toggle Favourites"}
      </p>
    </form>
  );
};

export default Name;
