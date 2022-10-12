import {useEffect, useState} from 'react'
import HomePoster from '../../components/HomePoster/HomePoster'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeCategories from '../../components/HomeCategories/HomeCategories'



function Home(){
    
    const [trending, setTrending] = useState([])
    const [categories, setCategories] = useState([])

    const getTrending=() => {
    fetch("https://kitsu.io/api/edge/trending/anime")
    .then((res) => res.json())
    .then((json) => {
        setTrending(json.data)
        console.log(json.data)
    })
    }

    const getCategories=() => {
      fetch("https://kitsu.io/api/edge/categories")
      .then((res) => res.json())
      .then((json) => {
          setCategories(json.data)
          console.log(json.data)
      })
      }
    
    useEffect(() => {
        getTrending();
        getCategories();
},[])

    return(<div>
        <Carousel
        infiniteLoop="true"
        emulateTouch="true"
        autoPlay="true"
        interval={5000}>
          {trending.slice(0,5).map((el) => (
            <HomePoster
            image={el.attributes.coverImage.large}
            title={el.attributes.canonicalTitle}
            />
          ))}
        </Carousel>
        
          {/* {categories.map((el) => (
            <div>
              <h1>{el.attributes.title}</h1>
              <Carousel>
                {el.relationships.anime.links.related}
              </Carousel>
            </div>

          ))} */}
        
    </div>)
}

export default Home;
