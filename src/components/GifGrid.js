import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";
import { getGifs } from "../utils/getGifs";
import "./GifGrid.css";
const GifGrid = ({ category }) => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const gifList = await getGifs(
        category,
        "5zxfHyHiOFKQiRNu0sm1JRYsVR2jzL2k",
        10
      );
      setImageList(gifList);
    }
    fetchData();
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>
      <div className="container">
        {imageList.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </div>
  );
};

export default GifGrid;
