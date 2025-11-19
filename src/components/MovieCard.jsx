const MovieCard = ({ movie }) => {
  return (
    <div
      className="group bg-[#111] rounded-xl overflow-hidden 
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
        <span
          className="absolute flex items-center gap-1 top-2 right-2 bg-black/70 
                         text-yellow-400 text-xs px-2 py-1 rounded-md font-[Inter]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
          </svg>{" "}
          {movie.vote_average?.toFixed(1)}
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
