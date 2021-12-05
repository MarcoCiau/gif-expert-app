import { useState, useEffect } from "react";
import { getGifs } from "../utils/getGifs";

function useFetchGifs(category) {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    async function fetchData() {
      const gifList = await getGifs(
        category,
        "5zxfHyHiOFKQiRNu0sm1JRYsVR2jzL2k",
        10
      );
      setstate({
        data: gifList,
        loading: false,
      });
    }
    fetchData();
  }, [category]);
  return state;
}

export default useFetchGifs;
