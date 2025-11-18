const MovieCard = ({ movie }) => {
  return (
    <div
      className="group bg-[#111] rou  nded-lg overflow-hidden 
                 shadow-md hover:shadow-xl hover:-translate-y-1 
                 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-100 h-80 object-cover group-hover:scale-105 
                     transition-all duration-300"
        />

        {/* Rating (top-left) */}
        <span className="absolute flex gap-1 top-2 right-2 bg-black/70 text-yellow-400 text-xs px-2 py-1 rounded-md font-[Inter]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
          </svg>{" "}
          {movie.vote_average?.toFixed(1)}
        </span>

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 
                        via-black/20 to-transparent opacity-0 
                        group-hover:opacity-100 transition-all duration-300 p-3 flex items-end"
        >
          <p className="text-sm font-[Inter] font-semibold">{movie.title}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
