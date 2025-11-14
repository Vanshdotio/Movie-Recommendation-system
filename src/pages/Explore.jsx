import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

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

  useEffect(() => {
    const fetchMovies = async () => {
      try {
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

        setMovies(allMovies.slice(0, 59));
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovies();
  }, []);

  // genre filtering
  const filteredMovies = selectedGenre
    ? movies.filter((m) => m.genre_ids.includes(selectedGenre))
    : movies;

  return (
    <div className="min-h-screen w-full pt-20 select-none text-white bg-black">
      <h1 className="text-2xl font-[600] px-10 font-[Inter]">Explore</h1>

      {/* Category Pills */}
      <div className="genre flex gap-7 mx-10 pt-3 overflow-x-auto md:overflow-hidden font-[Inter] scrollbar-hide">
        {Object.keys(genreMap).map((cat) => (
          <span
            key={cat}
            onClick={() =>
              setSelectedGenre(
                selectedGenre === genreMap[cat] ? null : genreMap[cat]
              )
            }
            className={`p-1 px-2.5 text-sm cursor-pointer rounded-3xl
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

      {/* Movies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 px-10 mt-5">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
