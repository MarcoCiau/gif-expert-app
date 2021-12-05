import React from "react";

const GifGrid = ({ category }) => {
  const url =
    "https://api.giphy.com/v1/gifs/search?q=among us&limit=10&api_key=5zxfHyHiOFKQiRNu0sm1JRYsVR2jzL2k";
  const getGifs = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    const gifs = responseJSON.data.map((data) => {
      return {
        id: data.id,
        title: data.title,
        url: data.images.downsized_medium.url,
      };
    });
    console.log(gifs);
  };

  getGifs();
  return (
    <div>
      <h2>{category}</h2>
    </div>
  );
};

export default GifGrid;
