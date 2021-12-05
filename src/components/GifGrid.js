import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";
import useFetchGifs from "../hooks/useFetchGifs";
import "./GifGrid.css";
const GifGrid = ({ category }) => {
  const { data: imageList, loading } = useFetchGifs(category);
  return (
    <div>
      <h2>{category}</h2>
      <div className="container">
        {loading && <p>Loading</p>}
        {imageList.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </div>
  );
};

export default GifGrid;
