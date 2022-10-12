import { useLocation, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { FavoritesList } from "../../components/Context/Context";
import { Link } from "react-router-dom";

export default function AnimeInfo() {
  const { addToFavorites, removeFromFav, favItems } = useContext(FavoritesList);
  const { state } = useLocation();
  const title = state.title;
  const id = state.id;
  const image = state.image;
  const [exist, setExist] = useState(1);
  // if(favItems.length === 0){
  //     setExist(false);
  // }
  // else{
  //     if(favItems.find((el) => {
  //         if(el.id === id){
  //             return true;
  //         }
  //     })=== true){
  //         setExist(true)
  //     }
  //     else{
  //         setExist(false)
  //     }
  // }
  console.log(favItems.find((el) => el.id === state.id));

  return (
    <div className="flex flex-col justify-center items-center">
      <p>{id}</p>
      <p>{title}</p>
      <img className="rounded-lg" src={image} />
      <Link to="/anime">
        {favItems.find((el) => el.id === id) ? (
          <button
            className="bg-gray-600 text-black font-bold py-2 px-4 mt-2 rounded-full border border-gray-900"
            onClick={() => removeFromFav(state.id, state.title)}
          >
            Remove from favorites
          </button>
        ) : (
          <button
            className="bg-gray-600 text-black font-bold py-2 px-4 mt-2 rounded-full border border-gray-900"
            onClick={() => addToFavorites(state)}
          >
            Add to favorites
          </button>
        )}
      </Link>
    </div>
  );
}
