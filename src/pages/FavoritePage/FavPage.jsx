import { FavoritesList } from "../../components/Context/Context";
import {useContext} from "react";

export default function FavPage() {
    const { favItems, removeFromFav } = useContext(FavoritesList)
    return (
        <div>
           {favItems.length === 0 ? (<div>The page is empty</div>)
           : (<div className="flex justify-center">{favItems?.map((el) => (
            <div key={el.id} className="flex justify-center flex-col w-1/5 items-center">
                {console.log(el.id)}
                <div>{el.title}</div>
                <img src={el.image} className="rounded-lg"/>
                <button 
                onClick={() => removeFromFav(el.id, el.title)}>Remove from list</button>
            </div>
           ))}</div>)}
        </div>
    )
}