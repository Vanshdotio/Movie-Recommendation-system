import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { OrbitProgress } from "react-loading-indicators";

const genreMap = {
  Action: 28,
  Romance: 10749,
  Comedy: 35,
  Family: 10751,
  Fantasy: 14,
  Crime: 80,
  Drama: 18,
  Mystery: 9648,
  Horror: 27,
  Thriller: 53,
};

const Explore = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const url =
          "https://api.themoviedb.org/3/movie/popular?api_key=de46fde30b264ae545e53353d2a99a98";

        const page1 = await axios.get(`${url}&page=1&language=en-US`);
        const page2 = await axios.get(`${url}&page=2&language=en-US`);
        const page3 = await axios.get(`${url}&page=3&language=en-US`);

        const allMovies = [
          ...page2.data.results,
          ...page1.data.results,
          ...page3.data.results,
        ];

        setMovies(allMovies.slice(0, 60));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = selectedGenre
    ? movies.filter((m) => m.genre_ids.includes(selectedGenre))
    : movies;
  const Back = () => {
    window.history.back();
  }
  return (
    <div className="min-h-screen pb-2 w-full pt-20 select-none bg-black text-white">
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 ml-6 md:ml-10 cursor-pointer"
          onClick={Back}
        >
          <path d="M22.0003 13.0001L22.0004 11.0002L5.82845 11.0002L9.77817 7.05044L8.36396 5.63623L2 12.0002L8.36396 18.3642L9.77817 16.9499L5.8284 13.0002L22.0003 13.0001Z"></path>
        </svg>
        <h1 className="text-4xl font-[600]   font-[Inter]">
          Explore
        </h1>
      </div>

      {/* Category Pills */}
      <div className="genre flex gap-7 mx-6 md:mx-10 pt-3 overflow-x-auto md:overflow-hidden font-[Inter] scrollbar-hide">
        {Object.keys(genreMap).map((cat) => (
          <span
            key={cat}
            onClick={() =>
              setSelectedGenre(
                selectedGenre === genreMap[cat] ? null : genreMap[cat]
              )
            }
            className={`genre-section font-medium p-1 px-2.5 text-sm cursor-pointer rounded-3xl
              ${
                selectedGenre === genreMap[cat]
                  ? "bg-yellow-300 text-black"
                  : "bg-gray-300 text-black"
              }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Movies Grid / Loader */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 px-5 md:px-8 mt-5">
        {loading ? (
          <span className="flex items-center  justify-center w-full col-span-6">
            <OrbitProgress
              className=""
              color="#cbcaca"
              size="medium"
              text=""
              textColor=""
            />
          </span>
        ) : (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default Explore;
