import {useNavigate , Link} from 'react-router-dom'

function AnimeCard({ image }) {
    return (
      <div className="block max-w-sm bg-gray-900 rounded-lg shadow-md z-40">
        <img src={image} alt="image" className="rounded-lg hover:scale-105 transition ease-out delay-150 hover:brightness-50 "/>
      </div>
    );
  }
  
  export default AnimeCard;