import React, { useState } from "react";

const Name = () => {
  const [name, setName] = useState("");
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { name };
      const response = await fetch("http://localhost:4000/api/kanji", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={onSubmitForm} method="GET">
      <input type="text" name="name" id="name" onChange={e => setName(e.target.value)}/>
      <button type="submit">GO</button>
    </form>
  );
};

export default Name;
