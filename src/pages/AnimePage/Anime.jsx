import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { useNavigate, Link, Navigate } from "react-router-dom";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import Loader from "../../components/scroll/Loader";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

//style

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: sans-serif;
}
`;

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 5em 3em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function Anime() {
  const [animes, setAnimes] = useState([]);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  async function getAnimes() {
    const res = await fetch(
      `https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=${offset}`
    );
    const data = await res.json();
    setAnimes((prevValue) => 
      [...prevValue, ...data.data],
      console.log(data.data));
  }

  useEffect(() => {
    getAnimes(offset);
  }, []);

  useEffect(() => {
    setOffset(offset + 12);
  }, [animes]);

  return (
    <>
      <GlobalStyle />

      <InfiniteScroll
        dataLength={animes.length}
        next={() => getAnimes(offset)}
        hasMore={true}
        loader={<Loader className=" bg-dark" />}
      >
        <div className="flex flex-wrap gap-8 justify-center bg-dark py-10">
          {animes.map((anime) => (
            <div
              key={anime.id}
              className="flex flex-wrap w-1/5 justify-center hover:bg-gray-25 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900"
              //context
              onClick={() => {
                navigate(`${anime.attributes.canonicalTitle}/${anime.id}`, {
                  state: {
                    id: anime.id,
                    image: anime.attributes.posterImage.small,
                    title: anime.attributes.canonicalTitle,
                    description: anime.attributes.description,
                  },
                });
              }}
            >
              <AnimeCard
                image={anime.attributes.posterImage.small}
                title={anime.attributes.canonicalTitle}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default Anime;
