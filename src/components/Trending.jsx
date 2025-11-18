import React from "react";

const Trending = () => {
  return (
    <>
      <div className="explore h-screen w-full overflow-y-auto font-[inter] p-10 px-12 text-white bg-black">
        <span>
          <h1 className="text-2xl md:text-3xl font-medium ">Trending</h1>
        </span>
        <div className="flex gap-13">
          <div className="flex font-[ROSSTEN] mt-5">
            <div className="flex tracking-[-25px]">
              <span className="text-[12rem] select-none pt-2 z-9 ">1</span>
              <span className="object-fit h-50 w-40">
                <img
                  className="h-full w-full rounded-xl"
                  src="https://stat5.bollywoodhungama.in/wp-content/uploads/2025/11/Dhurandhar1.jpg"
                  alt=""
                  onContextMenu={(e) => e.preventDefault()}
                />
              </span>
            </div>
          </div>
          <div className="font-[ROSSTEN] mt-5">
            <div className="flex tracking-[-25px]">
              <span className="text-[12rem] select-none pt-2 z-9 ">2</span>
              <span className="object-fit h-50 w-40">
                <img
                  className="h-full w-full rounded-xl"
                  src="https://m.media-amazon.com/images/M/MV5BMTk2ZmFhYjctYWZiYy00N2IxLWEzMWItZGRiMDY4ZDQwZWFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                  alt=""
                  onContextMenu={(e) => e.preventDefault()}
                />
              </span>
            </div>
          </div>
          <div className="font-[ROSSTEN] mt-5">
            <div className="flex tracking-[-25px]">
              <span className="text-[12rem] select-none pt-2 z-9 ">3</span>
              <span className="object-fit h-50 w-40">
                <img
                  className="h-full w-full rounded-xl"
                  src="https://stat5.bollywoodhungama.in/wp-content/uploads/2025/10/Mahayoddha-Rama-1.jpg"
                  alt=""
                  onContextMenu={(e) => e.preventDefault()}
                />
              </span>
            </div>
          </div>
          <div className="font-[ROSSTEN] mt-5">
            <div className="flex tracking-[-25px]">
              <span className="text-[12rem] select-none pt-2 z-9 ">4</span>
              <span className="object-fit h-50 w-40">
                <img
                  className="h-full w-full rounded-xl"
                  src="https://media5.bollywoodhungama.in/wp-content/uploads/2025/09/Paper-Leak.jpg"
                  alt=""
                  onContextMenu={(e) => e.preventDefault()}
                />
              </span>
            </div>
          </div>
          <div className="font-[ROSSTEN] mt-5">
            <div className="flex tracking-[-25px]">
              <span className="text-[12rem] select-none pt-2 z-9 ">5</span>
              <span className="object-fit h-50 w-40">
                <img
                  className="h-full w-full rounded-xl"
                  src="https://stat5.bollywoodhungama.in/wp-content/uploads/2025/08/Son-Of-Sardaar-2-005.jpg"
                  alt=""
                  onContextMenu={(e) => e.preventDefault()}
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
