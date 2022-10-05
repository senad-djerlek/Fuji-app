function AnimeCard({ image }) {
  return (
    <div className="block max-w-sm bg-white rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <img src={image} alt="image" className="rounded-lg" />
    </div>
  );
}

export default AnimeCard;
