import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchOverlay = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "de46fde30b264ae545e53353d2a99a98";

  useEffect(() => {
    const fetchData = async () => {
      if (!text.trim()) {
        setResults([]);
        return;
      }

      setLoading(true);

      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${text}`
        );

        setResults(res.data.results.slice(0, 15)); // 15 results only
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(fetchData, 400);
    return () => clearTimeout(delay);
  }, [text]);

  return (
    <>
      <div className="realtive w-full text-white pt-20 font-[Inter] min-h-screen overflow-hidden bg-black">
        {/* Search Box */}
        <div className="w-full fixed justify-center  px-[1rem] md:px-10">
          <div className="flex gap-3 w-full p-3 rounded-xl bg-gray-900 relative items-center">
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>

            {/* Input */}
            <input
              className="w-full h-8 outline-none border-none text-white placeholder-gray-400 bg-transparent"
              type="search"
              placeholder="Movies, Shows and more..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            {/* Custom clear button */}
            {text && (
              <button
                onClick={() => setText("")}
                className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                </svg>
              </button>
            )}

            <style>
              {`
                input[type="search"]::-webkit-search-cancel-button {
                  -webkit-appearance: none;
                  appearance: none;
                }
              `}
            </style>
          </div>
        </div>

        <div className=" mt-6 px-10 overflow-y-auto ">
          {loading && <p className="text-gray-400">Searching...</p>}

          {!loading && results.length > 0 && (
            <>
              <h2 className="text-lg font-semibold text-gray-300 mb-4">
                MORE RESULTS
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {results.map((movie) => (
                  <div key={movie.id} className="cursor-pointer group">
                    {/* IMAGE */}
                    <div className="w-full h-[150px] rounded-md overflow-hidden bg-[#1d1d1d]">
                      <img
                        src={
                          movie.backdrop_path
                            ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                            : movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : "https://via.placeholder.com/300x200?text=No+Image"
                        }
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-[16px] font-semibold mt-2">
                      {movie.title}
                    </h3>

                    {/* YEAR • RATING • LANGUAGE (Hotstar style) */}
                    <p className="text-[13px] text-gray-400 mt-1 flex gap-1">
                      {(movie.release_date || "").slice(0, 4) || "Year"}•
                      {(movie.vote_average &&
                        movie.vote_average.toFixed(1) + "★") ||
                        "No Rating"}
                      •{(movie.original_language || "").toUpperCase()}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchOverlay;
