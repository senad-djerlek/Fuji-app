import { FavoritesList } from "../../components/Context/Context";
import {useContext, useState} from "react";

export default function FavPage() {
    const { favItems, removeFromFav } = useContext(FavoritesList);
    let anime = favItems.filter((e) => {
        return e.type === 'anime';
    });

    let  manga = favItems.filter((e) => {
        return e.type === 'manga';
    });
    // console.log(manga, favItems);
    return (
        <div className="bg-dark">
           {favItems.length === 0 ? (<div>The page is empty</div>)
           : (<div className="flex justify-center">{favItems?.map((el) => (
            <div key={el.id} className="flex justify-center flex-col w-1/5 items-center">
                <div>{el.title}</div>
                <img src={el.image} className="rounded-lg"/>
                <button 
                onClick={() => removeFromFav(el.id, el.title)}>Remove from list</button>
            </div>
           ))}</div>)}
        </div>
    )
}