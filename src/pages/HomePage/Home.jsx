import AnimeCard from "../../components/AnimeCard/AnimeCard";
import { useState, useEffect } from "react";

function Home() {
  const [animes, setAnimes] = useState([]);

  async function getAnimes() {
    const res = await fetch(`https://kitsu.io/api/edge/categories/1/anime`);
    const data = await res.json();
    setAnimes(data.data);
    console.log(data.data);
  }

  useEffect(() => {
    getAnimes();
  }, []);

  return <div></div>;
}

export default Home;
