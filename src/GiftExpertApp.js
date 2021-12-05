import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
function GiftExpertApp() {
  const [categories, setCategories] = useState([
    "Goku",
    "One Punch",
    "Mario Bros",
  ]);

  const addCategory = (category = "") => {
    setCategories((lastValue) => {
      return [...lastValue, category];
    });
  };

  return (
    <>
      <h2>Gift Expert App</h2>
      <AddCategory updateCategoryHandler={addCategory} />
      <hr />

      <ul>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ul>
    </>
  );
}

export default GiftExpertApp;
