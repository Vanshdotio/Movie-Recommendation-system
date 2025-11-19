import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { OrbitProgress } from "react-loading-indicators";

// 🔥 Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const UpComing = () => {
    const [movies, setMovies] = useState([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const fetchPopular = async () => {
          try {
            setLoading(true);
    
            const url =
              "https://api.themoviedb.org/3/movie/upcoming?api_key=de46fde30b264ae545e53353d2a99a98";
    
            
            const page2 = await axios.get(`${url}&page=2&language=hi-IN`);
            const page1 = await axios.get(`${url}&page=1&language=en-US`);
    
            const all = [
              ...page2.data.results,
              ...page1.data.results,
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
      <div className="flex bg-black p-10 px-12  text-white flex-col font-[Inter] w-full">
        <h1 className="text-3xl font-medium  ">Up Coming</h1>

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
  )
}

export default UpComing