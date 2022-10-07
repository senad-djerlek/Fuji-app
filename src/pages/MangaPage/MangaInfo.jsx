import { useLocation, useParams } from 'react-router-dom'

export default function MangaInfo(){
    const { state } = useLocation()
    const title = state.title
    const id = state.id
    const image = state.image
    return (
        <div className="flex flex-col justify-center items-center">
            <p>{id}</p>
            <p>{title}</p>
            <img className="rounded-lg"src={image}/>
            <button className="bg-gray-600 text-black font-bold py-2 px-4 mt-2 rounded-full border border-gray-900">Add to favorites</button>
        </div>
    )
}
