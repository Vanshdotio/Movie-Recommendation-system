import React from "react";

const Trending = () => {
  return (
    <>
      <div className="h-screen w-full font-[inter] p-10 px-12 text-white bg-black">
        <span>
          <h1 className="text-2xl font-semibold ">Trending</h1>
        </span>
        <div className="flex gap-10">
          <div className="flex font-[ROSSTEN] mt-5">
            <div className="flex tracking-[-10px]">
              <span className="text-[12rem]">1</span>
              <span className="object-fit h-50 w-40">
                <img
                  className="h-full w-full rounded-xl"
                  src="https://stat5.bollywoodhungama.in/wp-content/uploads/2025/11/Dhurandhar1.jpg"
                  alt=""
                />
              </span>
            </div>
          </div>
          <div className="font-[ROSSTEN] mt-5">
            <div className="flex tracking-[-10px]">
              <span className="text-[12rem]">2</span>
              <span className="object-fit h-50 w-40">
                <img
                  className="h-full w-full rounded-xl"
                  src="https://stat4.bollywoodhungama.in/wp-content/uploads/2025/10/Kis-Kisko-Pyaar-Karoon-2.jpg"
                  alt=""
                />
              </span>
            </div>
          </div>
          <div className="font-[ROSSTEN] mt-5">
            <div className="flex tracking-[-10px]">
              <span className="text-[12rem]">3</span>
              <span className="object-fit h-50 w-40">
                <img
                  className="h-full w-full rounded-xl"
                  src="https://stat5.bollywoodhungama.in/wp-content/uploads/2025/10/Mahayoddha-Rama-1.jpg"
                  alt=""
                />
              </span>
            </div>
          </div>
          <div className="font-[ROSSTEN] mt-5">
            <div className="flex tracking-[-10px]">
              <span className="text-[12rem]">4</span>
              <span className="object-fit h-50 w-40">
                <img
                  className="h-full w-full rounded-xl"
                  src="https://media5.bollywoodhungama.in/wp-content/uploads/2025/09/Paper-Leak.jpg"
                  alt=""
                />
              </span>
            </div>
          </div>
          <div className="font-[ROSSTEN] mt-5">
            <div className="flex tracking-[-10px]">
              <span className="text-[12rem]">5</span>
              <span className="object-fit h-50 w-40">
                <img
                  className="h-full w-full rounded-xl"
                  src="https://stat5.bollywoodhungama.in/wp-content/uploads/2025/08/Son-Of-Sardaar-2-005.jpg"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
