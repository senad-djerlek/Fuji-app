import {useEffect, useState} from 'react'
import HomePoster from '../../components/HomePoster/HomePoster'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



function Home(){
    
    const [api, setApi] = useState([])

    const getApi=() => {
    fetch("https://kitsu.io/api/edge/trending/anime")
    .then((res) => res.json())
    .then((json) => {
        setApi(json.data)
        console.log(json.data)
    })
    }
    
    useEffect(() => {
        getApi()
        
},[])

    return(<div>
        <Carousel
        infiniteLoop="true"
        emulateTouch="true"
        autoPlay="true"
        interval={5000}>
          {api.slice(0,5).map((el) => (
            <HomePoster
            image={el.attributes.coverImage.large}
            title={el.attributes.canonicalTitle}
            />
          ))}
        </Carousel>
    </div>)
}

export default Home;
