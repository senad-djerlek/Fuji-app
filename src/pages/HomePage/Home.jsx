import {useEffect, useState} from 'react'
import HomePoster from '../../components/HomePoster/HomePoster'

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
        {api.map((el) => (
            <HomePoster
            image={el.attributes.coverImage.large}
            />
        ))}
    </div>)
}

export default Home;
