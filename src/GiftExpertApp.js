import React, { useState } from "react";

function GiftExpertApp() {
  const [categories, setCategories] = useState([
    "Goku",
    "One Punch",
    "Mario Bros",
  ]);
  const addCategoryEventHandler = (event) => {
    event.preventDefault();
    setCategories((lastValue) => {
      return [...lastValue, "Sonic"];
    });
  };

  return (
    <>
      <h2>Gift Expert App</h2>
      <hr />
      <button onClick={addCategoryEventHandler}>Add Category</button>
      <ul>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ul>
    </>
  );
}

export default GiftExpertApp;
