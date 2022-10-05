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
      <div className="flex flex-wrap gap-2 justify-center">
        {animes.map((anime) => (
          <div key={anime.id} className="flex flex-wrap w-2/5 justify-center">
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