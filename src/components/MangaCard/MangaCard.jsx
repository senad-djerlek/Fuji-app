function AnimeCard({ image, title }) {
  return (
    <div className="group flex justify-center relative max-w-sm bg-black cursor-pointer rounded-lg shadow-md hover:bg-gray-25 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900">
      <h1 className="absolute text-xl text-white top-2 z-10 opacity-0 group-hover:opacity-100">
        {title}
      </h1>
      <img
        src={image}
        alt="image"
        className=" rounded-lg hover:scale-105 transition ease-out delay-150 hover:brightness-20"
      />
      <p className="absolute self-end bottom-5 text-white z-10 opacity-0 group-hover:opacity-100">Click to se more</p>
    </div>
  );
}

export default AnimeCard;