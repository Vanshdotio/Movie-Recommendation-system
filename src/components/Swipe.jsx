import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Swipe = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    // progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={1}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-screen w-full bg-black"
      >
        <SwiperSlide>
          <div className="relative text-white overflow-hidden w-full h-screen font-[Inter]">
            <div className="flex h-screen w-full brightness-65 ">
              <video
                autoPlay
                muted
                loop
                playsInline
                className=" h-screen w-full object-cover "
                src="https://ik.imagekit.io/wcmq9ntmo/JURASSIC%20WORLD%20DOMINION%20%EF%BD%9C%20Official%20Hindi%20Trailer%20(Universal%20Pictures)%20HD%20%EF%BD%9C%20In%20Cinemas%20June%2010th.mp4?updatedAt=1762979047561"
              ></video>
            </div>
            <div className="absolute flex flex-col bottom-10 left-0 ml-6 gap-5">
              <img
                className="h-40 w-54"
                src="https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/9166/1761311139166-t"
                alt=""
              />
              <h2 className="font-semibold">Relasing on Nov 14</h2>
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
              <button
                className="gradient-btn p-2 w-80 my-5 font-[600] rounded-sm items-center justify-center flex gap-2 cursor-pointer "
                type="submit"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 20H2V18H3V11.0314C3 6.04348 7.02944 2 12 2C16.9706 2 21 6.04348 21 11.0314V18H22V20ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path>
                </svg>{" "}
                Remind Me <span className="font-medium text-sm]">Nov 14</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative text-white w-full h-screen overflow-hidden font-[Inter] ">
            <div className="flex h-screen w-full brightness-60  ">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-screen w-full object-cover "
                src="https://ik.imagekit.io/wcmq9ntmo/Terrifier%202.mp4?updatedAt=1762979040967"
              ></video>
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
              <button
                className="gradient-btn p-2 w-80 my-5 font-bold rounded-sm items-center justify-center flex gap-2 cursor-pointer"
                type="submit"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path>
                </svg>{" "}
                Watch Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative text-white w-full h-screen overflow-hidden font-[Inter] ">
            <div className="flex h-screen w-full brightness-60  ">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-screen w-full object-cover "
                src="https://ik.imagekit.io/wcmq9ntmo/Final%20Destination%20Bloodlines%20%EF%BD%9C%20Official%20Trailer.mp4?updatedAt=1762979044221"
              ></video>
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
              <button
                className="gradient-btn p-2 w-80 my-5 font-bold rounded-sm items-center justify-center flex gap-2 cursor-pointer"
                type="submit"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path>
                </svg>{" "}
                Watch Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          {/* <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg> */}
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Swipe;
