import React, { useState } from "react";
import Navbar from "@/ui/Navbar";
import RoomCard from "@/ui/RoomCard";
import UserCard from "@/ui/UserCard";
import { getPlacesData } from "./api";
import { locationArr } from "@/lib/location";
import { useEffect } from "react";
import { getUserById } from "./api";
import { getAllUser } from "./api";

function FindMatch() {
  const [isRooms, setIsRooms] = useState(true);
  const [searchLocation, setSearchLocation] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [totalRooms, setTotalRooms] = useState([]);
  const [roomData, setRoomData] = useState([]);
  const [tempRoomData, setTempRoomData] = useState([]);
  const [userData, setUserData] = useState();
  const [tempUserData, setTempUserData] = useState();

  const handleClick = (loc) => {
    setSearchLocation(loc);
    setWordEntered(loc);
    setFilteredData([]);
  };

  useEffect(() => {
    if (wordEntered.length == 0) {
      setRoomData(totalRooms);
    }
  }, [wordEntered]);

  const getLocationBasedOnSearch = (e) => {
    e.preventDefault();
    if (isRooms) {
      const roomArray = roomData?.filter((value) => {
        console.log(
          value.address.includes(wordEntered),
          "value.address.includes(wordEntered)"
        );
        return value.address.includes(wordEntered);
      });
      // console.log(roomArray, "roomArray");
      setTempRoomData(roomArray);
    } else {
      const userArray = userData?.filter((value) => {
        console.log(
          value.city.includes(wordEntered),
          "value.address.includes(wordEntered)"
        );
        return value.city.includes(wordEntered);
      });
      console.log(userArray, "userArray");
      setTempUserData(userArray);
    }
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord, locationArr, "searchWord");

    setWordEntered(searchWord);
    const newFilter = locationArr.filter((value) => {
      return value.label?.toLowerCase().includes(searchWord.toLowerCase());
    });

    console.log(newFilter);
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const getAllPlacesFn = async () => {
    const data = await getPlacesData();
    setTempRoomData(data);
    setRoomData(data);
    setTotalRooms(data);
  };

  React.useEffect(() => {
    getAllPlacesFn();
  }, []);

  const getAllUsersFn = async () => {
    const data = await getAllUser();
    setTempUserData(data);
    setUserData(data);
  };

  React.useEffect(() => {
    getAllUsersFn();
  }, []);

  return (
    <div className="find-match-body">
      <Navbar />
      {/* <h1>wtf</h1> */}
      {/* <div className="px-8 mt-12 sm:px-12 w-full h-[40vh] bg-blue-800 px-[7.5vw]">
        <div className="bg-red-500">
          <input className="w-[80px]" placeholder="Search Location" />
          <button>View on map</button>
        </div>
      </div> */}
      <div className="find-match-wrapper mt-[20vh] px-[5vw]">
        <form class="flex items-center justify-center w-full relative">
          <label for="voice-search" class="sr-only">
            Search
          </label>
          <div class="relative w-1/2">
            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-5">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg block w-full py-5 px-[4em] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos, Design Templates..."
              required
              onChange={handleFilter}
              value={wordEntered}
            />
            <button
              type="button"
              class="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <svg
                aria-hidden="true"
                class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {filteredData.length != 0 && (
            <div className="dataResult absolute left-[60px] top-[80px] bg-white w-1/2 z-10 border-2 border-solid gray-600-black pl-[1em] rounded py-[1em]">
              {filteredData.slice(0, 15).map((value) => {
                return (
                  <p
                    className="dataItem hover:text-blue-700 hover:bg-gray-100 w-full cursor-pointer py-[3px]"
                    value={value.label}
                    onClick={() => handleClick(value.label)}
                    target="_blank"
                  >
                    <p>{value.label} </p>
                  </p>
                );
              })}
            </div>
          )}

          <button
            // type="submit"
            onClick={getLocationBasedOnSearch}
            class="w-auto inline-flex items-center justify-center px-[2em] py-[1.25em] ml-2 text-md font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 "
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 mr-2 -ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            Search
          </button>
          <a
            href="http://localhost:3001"
            target={"_blank"}
            class="w-auto inline-flex items-center justify-center px-[2em] py-[1.25em] ml-2 text-md font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 "
          >
            View on Map
          </a>
        </form>
      </div>
      <div className="toggle-wrapper flex justify-center mt-[4em] mb-[3em]">
        <button
          type="submit"
          class="w-auto inline-flex items-center justify-center px-[3em] py-[1em] ml-2 text-md font-medium text-white bg-blue-700 rounded-lg border-none focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 "
          onClick={() => {
            setIsRooms(true);
          }}
          style={{
            backgroundColor: isRooms ? "rgb(29 78 216)" : "transparent",
            color: isRooms ? "white" : "black",
          }}
        >
          Rooms
        </button>
        <button
          type="submit"
          class="ml-[10em] w-auto inline-flex items-center justify-center px-[3em] py-[1em] ml-2 text-md font-medium text-white bg-blue-700 rounded-lg border-none focus:outline-none bg-transparent"
          onClick={() => {
            setIsRooms(false);
          }}
          style={{
            backgroundColor: isRooms ? "transparent" : "rgb(29 78 216)",
            color: isRooms ? "black" : "white",
          }}
        >
          Room mates
        </button>
      </div>
      <div className="content-wrapper px-[5vw] mb-[5vh]">
        {isRooms &&
          tempRoomData &&
          tempRoomData.map((room) => <RoomCard roomDetail={room} />)}
        {!isRooms &&
          tempUserData &&
          tempUserData.length != 0 &&
          tempUserData.map((user) => <UserCard userData={user} />)}
      </div>
    </div>
  );
}

export default FindMatch;
