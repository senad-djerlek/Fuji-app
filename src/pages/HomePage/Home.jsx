import AnimeCard from "../../components/AnimeCard/AnimeCard";
import { useState, useEffect } from "react";

function Home() {
  const [animes, setAnimes] = useState([]);

  async function getAnimes() {
    const res = await fetch(
      `https://kitsu.io/api/edge/anime?page[limit]=8&page[offset]=0&filter[text]=naruto`
    );
    const data = await res.json();
    setAnimes(data.data);
    console.log(data.data);
  }

  useEffect(() => {
    getAnimes();
  }, []);
  return (
    <div className="flex flex-wrap ">
      {animes.map((anime) => (
        <div key={anime.id}>
          <AnimeCard image={anime.attributes.posterImage.medium} title={anime.attributes.canonicalTitle} 
          description={anime.attributes.description} />
        </div>
      ))}
    </div>
  );
}

export default Home;
