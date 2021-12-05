import { useState, useEffect } from "react";
import { getGifs } from "../utils/getGifs";

function useFetchGifs(category) {
  const [state, setstate] = useState({
    data: []
  });

  useEffect(() => {
    async function fetchData() {
      const gifList = await getGifs(
        category,
        process.env.REACT_APP_GIPHY_KEY,
        10
      );
      setstate({
        data: gifList
      });
    }
    fetchData();
  }, [category]);
  return state;
}

export default useFetchGifs;
