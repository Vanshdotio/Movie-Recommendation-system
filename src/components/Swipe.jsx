import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const Swipe = () => {
  const progressContent = useRef(null);
  const swiperRef = useRef(null);

  const [movies, setMovies] = useState([]);

  const onAutoplayTimeLeft = (s, time) => {
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: trendingData } = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day",
          { params: { api_key: API_KEY } }
        );

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

        const mixedMovies = [
          ...trendingData.results.slice(0, 4),
          ...indianData.results.slice(0, 3),
        ];

        const finalMovies = await Promise.all(
          mixedMovies.map(async (movie) => {
            const { data: videoData } = await axios.get(
              `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
              { params: { api_key: API_KEY } }
            );

            const trailer = videoData.results.find(
              (vid) => vid.type === "Trailer"
            );

            const { data: imageData } = await axios.get(
              `https://api.themoviedb.org/3/movie/${movie.id}/images`,
              { params: { api_key: API_KEY } }
            );

            const logo = imageData.logos?.find(
              (l) => l.iso_639_1 === "en"
            );

            return {
              ...movie,
              videoKey: trailer ? trailer.key : null,
              logoPath: logo ? logo.file_path : null,
            };
          })
        );

        setMovies(finalMovies);
      } catch (err) {
        console.log("Error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={1}
      centeredSlides={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="h-screen w-full"
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="relative text-white w-full h-screen overflow-hidden">

            {/* 🎬 Always autoplay muted video */}
            {movie.videoKey ? (
              <iframe
                className="h-screen w-full object-cover pointer-events-none"
                src={`https://www.youtube.com/embed/${movie.videoKey}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${movie.videoKey}`}
                allow="autoplay"
              />
            ) : (
              <img
                className="h-screen w-full object-cover"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
              />
            )}

            {/* 🎯 Overlay */}
            <div className="absolute bottom-10 left-6 max-w-lg">

              {movie.logoPath ? (
                <img
                  className="h-20 md:h-28 mb-4 object-contain"
                  src={`https://image.tmdb.org/t/p/original${movie.logoPath}`}
                  alt={movie.title}
                />
              ) : (
                <h1 className="text-3xl md:text-5xl font-bold">
                  {movie.title}
                </h1>
              )}

              <p className="text-white/80 mt-3 font-[inter] line-clamp-3">
                {movie.overview}
              </p>

              {/* 🔥 Buttons */}
              <div className="flex gap-3 mt-5">

                <button className="bg-white text-black px-6 py-2 font-semibold rounded hover:scale-105 transition-all duration-300">
                  ▶ Watch Now
                </button>

                {movie.videoKey && (
                  <a
                    href={`https://www.youtube.com/watch?v=${movie.videoKey}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/30 px-6 py-2 rounded font-semibold backdrop-blur hover:bg-white/50 hover:scale-105 transition-all duration-300"
                  >
                     Trailer
                  </a>
                )}

              </div>
            </div>

          </div>
        </SwiperSlide>
      ))}

      <div className="autoplay-progress" slot="container-end">
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default Swipe;