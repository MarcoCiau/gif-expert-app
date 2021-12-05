export const getGifs = async (category="", apiKey="", limit=20) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=${limit}&api_key=${apiKey}`;
  try {
    const response = await fetch(url);
    const responseJSON = await response.json();
    const images = responseJSON.data.map((data) => {
      return {
        id: data.id,
        title: data.title,
        url: data.images.downsized_medium.url,
      };
    });
    return images;
  } catch (err) {
    console.log("Fetching Gifs Failed", err);
  }
};
