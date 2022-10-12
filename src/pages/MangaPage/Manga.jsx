import MangaCard from "../../components/MangaCard/MangaCard";
import { useState, useEffect } from "react";
import { useNavigate, Link, Navigate } from 'react-router-dom';
import Loader from "../../components/scroll/Loader";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { createGlobalStyle } from "styled-components";

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

function Manga(){
  const [manga, setManga] = useState([]);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  async function getAnimes() {
    const res = await fetch(
      `https://kitsu.io/api/edge/manga?page[limit]=12&page[offset]=${offset}`
    );
    const data = await res.json();
    setManga((prevValue) => [...prevValue, ...data.data]);
  }

  useEffect(() => {
    getAnimes(offset);
  }, []);

  useEffect(() => {
    setOffset(offset + 12);
  }, [manga]);


    return (
      <>
       <GlobalStyle />

       <InfiniteScroll
         dataLength={manga.length}
         next={() => getAnimes(offset)}
         hasMore={true}
         loader={<Loader className=" bg-dark" />}
          >
  <div className="flex flex-wrap gap-8 justify-center bg-dark py-10">
        {manga.map((manga) => (
          <div key={manga.id} className="flex flex-wrap w-1/5 justify-center" onClick={() => {
            navigate(`${manga.attributes.canonicalTitle}/${manga.id}`, {
              state: {
                id : manga.id,
                image: manga.attributes.posterImage.small,
                title: manga.attributes.canonicalTitle             
              }
            })
          }}>
            <MangaCard
              image={manga.attributes.posterImage.small}
              title={manga.attributes.canonicalTitle}
            />
          </div>
        ))}
      </div>
      </InfiniteScroll>
      </>
    );
    
  }


export default Manga;