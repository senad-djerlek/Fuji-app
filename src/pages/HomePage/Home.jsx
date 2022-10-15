import {useEffect, useState} from 'react'
import HomePoster from '../../components/HomePoster/HomePoster'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeRows from '../../components/HomeCategories/HomeCategories';
import './Home.css'



function Home(){
    
    const [trending, setTrending] = useState([])
    const [categories, setCategories] = useState([])
    const [romance, setRomance] = useState([])
    const [horror, setHorror] = useState([])
    const [action, setAction] = useState([])

    const getTrending=() => {
    fetch("https://kitsu.io/api/edge/trending/anime")
    .then((res) => res.json())
    .then((json) => {
        setTrending(json.data)
        console.log(json.data)
    })
    }

    const getCategories=() => {
      fetch("https://kitsu.io/api/edge/anime?filter[categories]=adventure")
      .then((res) => res.json())
      .then((json) => {
          setCategories(json.data)
          console.log(json.data)
      })
      }

      const getAction=() => {
        fetch("https://kitsu.io/api/edge/anime?filter[categories]=action")
        .then((res) => res.json())
        .then((json) => {
            setAction(json.data)
            console.log(json.data)
        })
        }
    
      const getRomance=() => {
        fetch("https://kitsu.io/api/edge/anime?filter[categories]=romance")
        .then((res) => res.json())
        .then((json) => {
            setRomance(json.data)
            console.log(json.data)
        })
        }

        const getHorror=() => {
          fetch("https://kitsu.io/api/edge/anime?filter[categories]=horror")
          .then((res) => res.json())
          .then((json) => {
              setHorror(json.data)
              console.log(json.data)
          })
          }
    
    useEffect(() => {
        getTrending();
        getCategories();
        getRomance();
        getHorror();
        getAction();
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
            <h1 className='flex flex-start text-2xl ml-5'>Adventure</h1>
          <div className='rowPosters flex flex-row overflow-y-hidden overflow-x-scroll p-5'>
          {categories.map((el) => (
            <HomeRows
            image={el.attributes.posterImage.small}
            />
          ))}
          </div>

          <h1 className='flex flex-start text-2xl ml-5'>Romance</h1>
          <div className='rowPosters flex flex-row overflow-y-hidden overflow-x-scroll p-5'>
          {romance.map((el) => (
            <HomeRows
            image={el.attributes.posterImage.small}
            />
          ))}
          </div>
          <h1 className='flex flex-start text-2xl ml-5'>Horror</h1>
          <div className='rowPosters2 flex flex-row overflow-y-hidden overflow-x-scroll p-5'>
          {horror.map((el) => (
            <HomeRows
            image={el.attributes.posterImage.small}
            />
          ))}
          </div>
          <h1 className='flex flex-start text-2xl ml-5'>Action</h1>
          <div className='rowPosters2 flex flex-row overflow-y-hidden overflow-x-scroll p-5'>
          {action.map((el) => (
            <HomeRows
            image={el.attributes.posterImage.small}
            />
          ))}
          </div>
        
    </div>)
}

export default Home;
