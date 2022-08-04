import React, { useState } from "react";

const Name = () => {
  const [name, setName] = useState("");
  const onSubmitForm = async event => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/kanji/?input=${name}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const obj = await response.json();
      console.log(obj);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={onSubmitForm} method="GET">
      <input type="text" name="name" id="name" onChange={event => setName(event.target.value)}/>
      <button type="submit">GO</button>
    </form>
  );
};

export default Name;
