import React, { useState } from "react";
import RoomCard from "@/ui/RoomCard";
import { getPlacesData } from "../pages/api";

const InterestedHouses = () => {
  const [isRooms, setIsRooms] = useState(true);
  const [searchLocation, setSearchLocation] = useState("");
  const [roomData, setRoomData] = useState([]);

  const getAllPlacesFn = async () => {
    const data = await getPlacesData();
    console.log(data);
    setRoomData(data);
  };

  React.useEffect(() => {
    getAllPlacesFn();
  }, []);

  return (
    <div className="interested-body">
      <div className="slider w-full flex gap-10 px-[5vw] overflow-x-scroll pb-[5vw] bg-blueGray-200">
        {roomData && roomData.map((room) => <RoomCard roomDetail={room} />)}
      </div>
    </div>
  );
};

export default InterestedHouses;
