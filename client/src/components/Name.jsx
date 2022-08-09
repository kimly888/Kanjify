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
        //  Switched to HOME_API for development
        // `https://kanjify-server-v2.herokuapp.com/api/kanji/?input=${name}`,
        `${HOME_API}api/kanji/?input=${name}`,
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

  const handleClick = () => {
    setIsActive(true);
  };

  // toggle on click
  const handleFavourites = () => {
    !isFavourites ? setIsFavourites(true) : setIsFavourites(false);
    setIsActive(true);
  };

  return (
    <form
      onSubmit={onSubmitForm}
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
            setName(event.trim());
          } else {
            setName(event.target.value);
          }
        }}
      />
      <button type="submit" onClick={handleClick} disabled={isLoading}>
        🪄
      </button>
      {/* placeholder for favourites */}
      <p className="favourites" onClick={handleFavourites}>
        Toggle Favourites
      </p>
    </form>
  );
};

export default Name;
