const MovieCard = ({ movie }) => {
  return (
    <div
      className="group bg-[#111] rounded-lg overflow-hidden 
                 shadow-md md:hover:shadow-xl md:hover:-translate-y-1 
                 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-80 object-cover 
                     md:group-hover:scale-105 
                     transition-all duration-300"
        />

        {/* Rating */}
        <span className="absolute flex gap-1 top-2 right-2 bg-black/70 
                         text-yellow-400 text-xs px-2 py-1 rounded-md font-[Inter]">
          ⭐ {movie.vote_average?.toFixed(1)}
        </span>

        {/* Overlay + Title */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 
                        via-black/20 to-transparent 
                        opacity-100 md:opacity-0 
                        md:group-hover:opacity-100 
                        transition-all duration-300 p-3 flex items-end`}
        >
          <p className="text-sm font-[Inter] font-semibold">{movie.title}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
