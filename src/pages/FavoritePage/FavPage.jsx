import { FavoritesList } from "../../components/Context/Context";
import {useContext} from "react";

export default function FavPage() {
    const { favItems, removeFromFav } = useContext(FavoritesList)
    return (
        <div className="bg-dark h-full w-full">
           {favItems.length === 0 ? (<div>The page is empty</div>)
           : (<div className="flex justify-center flex-wrap w-full">{favItems?.map((el) => (
            <div key={el.id} className="w-1/4 p-10">
                {console.log(el.id)}
                <div className="text-white max-h-4">{el.title}</div>
                <div className="group flex flex-col justify-center hover:scale-105 transition ease-out mt-10 relative bg-black cursor-pointer rounded-lg shadow-md hover:bg-gray-25 dark:bg-gray-800 dark:border-gray-700 dark:group-hover:bg-gray-900">
                <img src={el.image} className="rounded"/>
                
            </div>
            <button className='mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-4 border-blue-600 hover:border-blue-500 rounded'
                onClick={() => removeFromFav(el.id, el.title)}>Remove from list</button>
            </div>
           ))}</div>)}
        </div>
    )
}