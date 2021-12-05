import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";
import "./GifGrid.css";
const GifGrid = ({ category }) => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    getGifs("goku", "5zxfHyHiOFKQiRNu0sm1JRYsVR2jzL2k", 10);
  }, []);

  const getGifs = async (category, apiKey, limit) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=${limit}&api_key=${apiKey}`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    const images = responseJSON.data.map((data) => {
      return {
        id: data.id,
        title: data.title,
        url: data.images.downsized_medium.url,
      };
    });
    setImageList(images);
  };

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
