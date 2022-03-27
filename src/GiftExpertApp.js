import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
function GiftExpertApp() {
  const [categories, setCategories] = useState([
    "Goku"
  ]);

  const addCategory = (category = "") => {
    setCategories((lastValue) => {
      return [category, ...lastValue];
    });
  };

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory updateCategoryHandler={addCategory} />
      <hr />

      <ul>
        {categories.map((category) => {
          return <GifGrid key={category} category={category}/>;
        })}
      </ul>
    </>
  );
}

export default GiftExpertApp;
