import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { OrbitProgress } from "react-loading-indicators";

// 🔥 Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const CurrentPopular = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        setLoading(true);

        const url =
          "https://api.themoviedb.org/3/movie/popular?api_key=de46fde30b264ae545e53353d2a99a98";

        const page1 = await axios.get(`${url}&page=1&language=en-US`);
        const page2 = await axios.get(`${url}&page=2&language=en-US`);
        const page3 = await axios.get(`${url}&page=3&language=en-US`);

        const all = [
          ...page1.data.results,
          ...page2.data.results,
          ...page3.data.results,
        ];

        setMovies(all.slice(0, 10)); // only 10 movies
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPopular();
  }, []);

  return (
    <>
      <div className="flex bg-black p-10 px-12 -mt-15 text-white flex-col font-[Inter] w-full">
        <h1 className="text-2xl font-medium  ">Popular</h1>

        {/* 🔥 Swiper Slider */}
        <div className=" select-none py-6">
          {loading ? (
            <span className="flex items-center justify-center w-full">
              <OrbitProgress color="#cbcaca" size="medium" />
            </span>
          ) : (
            <Swiper
              modules={[FreeMode]}
              freeMode={true}
              grabCursor={true}
              spaceBetween={20}
              slidesPerView={"auto"}
              className="mySwiper"
            >
              {movies.map((movie) => (
                <SwiperSlide
                  key={movie.id}
                  style={{ width: "180px" }} // card width
                >
                  <MovieCard movie={movie} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

export default CurrentPopular;
