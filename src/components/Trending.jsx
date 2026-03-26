import React, { useEffect, useState } from "react";
import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        // 🌍 Global Trending
        const { data: globalData } = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/week",
          {
            params: { api_key: API_KEY },
          }
        );

        // 🇮🇳 Indian Movies (latest popular)
        const { data: indianData } = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: API_KEY,
              with_original_language: "hi",
              sort_by: "popularity.desc",
            },
          }
        );

        // 🔥 Merge (no sorting, natural order)
        const mixedMovies = [
          ...globalData.results.slice(0, 7),
          ...indianData.results.slice(0, 3),
        ];

        setMovies(mixedMovies);
      } catch (err) {
        console.log("Error:", err);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div className="explore w-full font-[inter] p-10 px-12 text-white bg-black">
      <h1 className="text-2xl md:text-3xl font-medium">
        Trending 
      </h1>

      <div className="trending flex overflow-x-auto gap-8">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className="font-[ROSSTEN] mt-5 flex items-baseline select-none"
          >
            {/* Number */}
            <span className="text-[6rem] md:text-[12rem] opacity-80 leading-none">
              {index + 1}
            </span>

            {/* Poster */}
            <div className="h-64 w-44 relative">
              <img
                loading="lazy"
                className="h-full w-full rounded-xl object-cover hover:scale-105 transition-all duration-300"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;