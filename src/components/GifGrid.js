import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";
import useFetchGifs from "../hooks/useFetchGifs";
import 'animate.css';
import "./GifGrid.css";
const GifGrid = ({ category }) => {
  const { data: imageList } = useFetchGifs(category);
  return (
    <div>
      <h2>{category}</h2>
      <div className="container  animate__animated animate__animated">
        {imageList.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </div>
  );
};

export default GifGrid;
