import {useEffect, useState} from 'react'
import HomePoster from '../../components/HomePoster/HomePoster'

function Home(){
    
    const [api, setApi] = useState([])
    const [slide, setSlide] = useState(0)
    const [slide2, setSlide2] = useState(1)

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

// const interval = setInterval(() => {
//   if (slide>=9) {
//     setSlide(0)
//     setSlide2(1)
//   } else {
//   setSlide(slide+1)
//   setSlide2(slide2+1)
//   console.log(slide, slide2)
//   }
// }, 5000);

    return(<div>
        {api.slice(slide,slide2).map((el) => (
            <HomePoster
            image={el.attributes.coverImage.large}
            title={el.attributes.canonicalTitle}
            />
        ))}
        <button onClick={() => {
          if (slide<=1) {
            setSlide(8)
            setSlide2(9)
          } else {
          setSlide(slide-1)
          setSlide2(slide2-1)
          }
        }}>Prev</button> 
        
        <button onClick={() => {
          if (slide>=9) {
            setSlide(0)
            setSlide2(1)
          } else {
          setSlide(slide+1)
          setSlide2(slide2+1)
          }
        }}>Next</button>
    </div>)
}

export default Home;
