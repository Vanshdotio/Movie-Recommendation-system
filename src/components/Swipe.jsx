import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Swipe = () => {
  const progressContent = useRef(null);
  const swiperRef = useRef(null);
  const [mutedStates, setMutedStates] = useState([true, true, true]); // mute state for each slide

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const handleSlideChange = () => {
      const slides = swiper.slides;

      slides.forEach((slide, index) => {
        const video = slide.querySelector("video");
        if (video) {
          video.muted = mutedStates[index]; // set current mute state
          if (index === swiper.activeIndex) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      });
    };

    handleSlideChange();
    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [mutedStates]);

  // toggle mute for a specific slide
  const toggleMute = (index) => {
    setMutedStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });

    const video = swiperRef.current.swiper.slides[index].querySelector("video");
    if (video) {
      video.muted = !video.muted;
    }
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={1}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-screen w-full bg-black cursor-grab active:cursor-grabbing"
      >
        {/* ===== Slide 1 ===== */}
        <SwiperSlide>
          <div className="relative text-white overflow-hidden w-full h-screen font-[Inter]">
            <div className="flex h-screen w-full brightness-65">
              <video
                loop
                playsInline
                preload="auto"
                className="h-screen w-full object-cover"
                src="https://ik.imagekit.io/wcmq9ntmo/JURASSIC%20WORLD%20DOMINION%20%EF%BD%9C%20Official%20Hindi%20Trailer%20(Universal%20Pictures)%20HD%20%EF%BD%9C%20In%20Cinemas%20June%2010th.mp4?updatedAt=1762979047561"
              ></video>
              {/* 🔇 Mute/Unmute Button */}
              <button
                onClick={() => toggleMute(0)}
                className="absolute bottom-10 right-6 cursor-pointer bg-white/60 p-2 rounded-full text-white hover:bg-white/30 transition"
              >
                {mutedStates[0] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76ZM32,96H72v64H32ZM144,207.64,88,164.09V95.89l56,61.6Zm42-63.77a24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.57,40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.59Zm-80.16-76a8,8,0,0,1,1.4-11.23l39.85-31A8,8,0,0,1,160,32v74.83a8,8,0,0,1-16,0V48.36l-26.94,21A8,8,0,0,1,105.84,67.91ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"></path>
                  </svg>
                )}
              </button>
            </div>

            <div className="absolute flex flex-col bottom-10 left-0 ml-6 gap-5">
              <img
                className="h-40 w-54"
                src="https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/9166/1761311139166-t"
                alt=""
              />
              <span className="font-semibold flex items-center gap-2">
                <h3>• 2025</h3>
                <h3>• U/A 13+</h3>
                <h3>• 2h 13m </h3>
                <h3>• 4 Language</h3>
              </span>
              <p className="w-90 text-white/80 max-w-lg">
                A new era is born in the iconic Jurassic World series as a
                covert extraction team makes a dangerous discovery on a hidden
                island of deadly dinosaurs.
              </p>
              <h2 className="flex gap-2 font-semibold text-[.9rem]">
                <span>Animals</span> | <span>Adventure</span> |{" "}
                <span>Science Fiction</span> | <span>Thriller</span>
              </h2>
              <button className="gradient-btn p-2 w-80 my-5 font-bold rounded-sm items-center justify-center flex gap-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                </svg>
                <span>Watch Now</span>
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== Slide 2 ===== */}
        <SwiperSlide>
          <div className="relative text-white w-full h-screen overflow-hidden font-[Inter] ">
            <div className="flex h-screen w-full brightness-60">
              <video
                loop
                playsInline
                preload="auto"
                className="h-screen w-full object-cover"
                src="https://ik.imagekit.io/wcmq9ntmo/Terrifier%202.mp4?updatedAt=1762979040967"
              ></video>
              <button
                onClick={() => toggleMute(1)}
                className="absolute bottom-10 right-6 cursor-pointer bg-white/60 p-2 rounded-full text-white hover:bg-white/30 transition"
              >
                {mutedStates[1] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76ZM32,96H72v64H32ZM144,207.64,88,164.09V95.89l56,61.6Zm42-63.77a24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.57,40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.59Zm-80.16-76a8,8,0,0,1,1.4-11.23l39.85-31A8,8,0,0,1,160,32v74.83a8,8,0,0,1-16,0V48.36l-26.94,21A8,8,0,0,1,105.84,67.91ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"></path>
                  </svg>
                )}
              </button>
            </div>
            <div className="absolute flex flex-col bottom-10 left-0 ml-6 gap-5">
              <img
                className="h-18 w-72"
                src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/5806/1750075675806-t"
                alt=""
              />
              <span className="font-semibold flex items-center gap-2">
                <h3>• 2022</h3>
                <h3>• A</h3>
                <h3>• 2h 12m </h3>
                <h3>• Hindi</h3>
              </span>
              <p className="w-90 text-white/80 max-w-lg">
                On a creepy Halloween, Art the Clown unleashes his terror on
                siblings Sienna and Jonathan. This leads to a deadly face-off,
                and all hells break loose!
              </p>
              <h2 className="flex font-semibold text-[.9rem] gap-2 items-center">
                <span>Thriller</span> | <span>Horror</span> |{" "}
                <span>Dark Humour</span> | <span>Psychological</span>
              </h2>
              <button className="gradient-btn p-2 w-80 my-5 font-bold rounded-sm items-center justify-center flex gap-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                </svg>
                <span>Watch Now</span>
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== Slide 3 ===== */}
        <SwiperSlide>
          <div className="relative text-white w-full h-screen overflow-hidden font-[Inter] ">
            <div className="flex h-screen w-full brightness-60  ">
              <video
                loop
                playsInline
                preload="auto"
                className="h-screen w-full object-cover"
                src="https://ik.imagekit.io/wcmq9ntmo/Final%20Destination%20Bloodlines%20%EF%BD%9C%20Official%20Trailer.mp4?updatedAt=1762979044221"
              ></video>
              <button
                onClick={() => toggleMute(2)}
                className="absolute bottom-10 cursor-pointer right-6 bg-white/60 p-2 rounded-full text-white hover:bg-white/30 transition"
              >
                {mutedStates[2] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76ZM32,96H72v64H32ZM144,207.64,88,164.09V95.89l56,61.6Zm42-63.77a24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.57,40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.59Zm-80.16-76a8,8,0,0,1,1.4-11.23l39.85-31A8,8,0,0,1,160,32v74.83a8,8,0,0,1-16,0V48.36l-26.94,21A8,8,0,0,1,105.84,67.91ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"></path>
                  </svg>
                )}
              </button>
            </div>
            <div className="absolute flex flex-col bottom-10 left-0 ml-6 gap-5">
              <img
                className="h-20 w-72"
                src="https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/8074/1759315258074-t"
                alt=""
              />
              <span className="font-semibold flex items-center gap-2">
                <h3>• 2025</h3>
                <h3>• A</h3>
                <h3>• 1h 49m </h3>
                <h3>• 4 Language</h3>
              </span>
              <p className="w-90 text-white/80 max-w-lg">
                Stefani heads home to track down the one person who might be
                able to save her family.
              </p>
              <h2 className="flex font-semibold text-[.9rem] gap-2 items-center">
                <span>Thriller</span> | <span>Horror</span> |{" "}
                <span>Supernatural</span> | <span>Blood & Gore</span>
              </h2>
              <button className="gradient-btn p-2 w-80 my-5 font-bold rounded-sm items-center justify-center flex gap-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                </svg>
                <span>Watch Now</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className="relative text-white w-full h-screen overflow-hidden font-[Inter] ">
            <div className="flex h-screen w-full brightness-60  ">
              <video
                loop
                playsInline
                preload="auto"
                className="h-screen w-full object-cover"
                src="https://ik.imagekit.io/6k8kxavyw5/EVIL%20DEAD%20RISE%20-%20Official%20Trailer%20-%20(Redband).mp4?updatedAt=1763149635220"
              ></video>
              <button
                onClick={() => toggleMute(3)}
                className="absolute bottom-10 cursor-pointer right-6 bg-white/60 p-2 rounded-full text-white hover:bg-white/30 transition"
              >
                {mutedStates[3] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76ZM32,96H72v64H32ZM144,207.64,88,164.09V95.89l56,61.6Zm42-63.77a24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.57,40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.59Zm-80.16-76a8,8,0,0,1,1.4-11.23l39.85-31A8,8,0,0,1,160,32v74.83a8,8,0,0,1-16,0V48.36l-26.94,21A8,8,0,0,1,105.84,67.91ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"></path>
                  </svg>
                )}
              </button>
            </div>
            <div className="absolute flex flex-col bottom-10 left-0 ml-6 gap-5">
              <img
                className="h-50 w-90 -ml-10"
                src="/public/assets/evil-dead-rise.png"
                alt="evil dead rise"
                loading="lazy"
              />
              <span className="font-semibold flex items-center gap-2">
                <h3>• 2023</h3>
                <h3>• U/A 18+</h3>
                <h3>• 1h 36m </h3>
                <h3>• 4 Language</h3>
              </span>
              <p className="w-90 text-white/80 max-w-lg">
                A young woman's reunion with her estranged sisters becomes a
                blood-soaked fight for survival when an earthquake uncovers a flesh-possesing ancient evil.
              </p>
              <h2 className="flex font-semibold text-[.9rem] gap-2 items-center">
                <span>Thriller</span> | <span>Horror</span> |{" "}
                <span>Violence</span> | <span>Blood & Gore</span>
              </h2>
              <button className="gradient-btn p-2 w-80 my-5 font-bold rounded-sm items-center justify-center flex gap-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                </svg>
                <span>Watch Now</span>
              </button>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Swipe;
