import AnimeCard from "../../components/AnimeCard/AnimeCard";
import { useState, useEffect } from "react";


function Anime(){
    const [animes, setAnimes] = useState([]);

    async function getAnimes() {
      const res = await fetch(
        `https://kitsu.io/api/edge/anime`
      );
      const data = await res.json();
      setAnimes(data.data);
      console.log(data.data);
    }
  
    useEffect(() => {
      getAnimes();
    }, []);
    return (
      <div className="flex flex-wrap gap-8 justify-center bg-dark py-10">
        {animes.map((anime) => (
          <div key={anime.id} className="flex flex-wrap w-1/5 justify-center hover:bg-gray-25 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900">
            <AnimeCard
              image={anime.attributes.posterImage.small}
              title={anime.attributes.canonicalTitle}
            />
          </div>
        ))}
      </div>
    );
  }
  

export default Anime;
