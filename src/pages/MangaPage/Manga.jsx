import { useState, useEffect } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import MangaCard from "../../components/MangaCard/MangaCard";

function Manga() {
  const navigate = useNavigate();
  const [manga, setManga] = useState([]);

  async function getMangas() {
    const res = await fetch("https://kitsu.io/api/edge/manga");
    const data = await res.json();
    setManga(data.data);
    console.log(data.data);
  }

  useEffect(() => {
    getMangas();
  }, []);

  return (
    <div className="flex flex-wrap gap-8 justify-center bg-dark py-10">
      {manga.map((manga) => (
        <div
          key={manga.id}
          className="flex flex-wrap w-1/5 justify-center"
          onClick={() => {
            navigate(`${manga.id}`, {
              state: {
                id: manga.id,
                image: manga.attributes.posterImage.small,
                title: manga.attributes.canonicalTitle,
              },
            });
          }}
        >
          <MangaCard
            image={manga.attributes.posterImage.small}
            title={manga.attributes.canonicalTitle}
          />
        </div>
      ))}
    </div>
  );
}

export default Manga;
