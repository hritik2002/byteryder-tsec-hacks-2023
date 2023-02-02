import React from "react";

const RoomCard = ({ roomDetail }) => {
  const toggleInterest = () => {
    // send roomDetail along with user authToken to the api
  };

  return (
    <div className="room-card-wrapper">
      <div class=" max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-lg" src="/house1.jpg" alt="house" />
        </a>
        <div class="p-6 ">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {roomDetail.location_string}
            </h5>
          </a>
          <div className="flex">
            <span class="mb-2 font-normal text-gray-700 dark:text-gray-400">
              Flat:
              <span className="font-medium text-[1.25rem] ml-[.5em] text-black">
                {roomDetail.area}
              </span>
            </span>
            <span class="ml-12 mb-2 font-normal text-gray-700 dark:text-gray-400">
              Rent:
              <span className="font-small text-[1rem] ml-[.5em] text-black">
                {roomDetail.price_level}
              </span>
            </span>
          </div>
          <span class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            No. of people interested:
            <span className="font-medium text-[1.25rem] ml-[.5em] text-black">
              {" "}
              10
            </span>
          </span>
          <div className="view-more mt-6 flex justify-between items-center">
            <a
              href="#"
              class="inline-flex items-center  px-5 py-3 text-sm font-medium text-center text-black bg-[#FEF3D3] rounded-lg hover:bg-[#FFE395] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <svg
              onClick={toggleInterest}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
