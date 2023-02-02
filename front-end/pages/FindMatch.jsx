import React from "react";

function FindMatch() {
  return (
    <div className="px-8 mt-12 sm:px-12 w-full h-[40vh] bg-blue-800 px-[7.5vw]">
      <div className="bg-red-500">
        <input className="w-[80px]" placeholder="Search Location" />
        <button>View on map</button>
      </div>
    </div>
  );
}

export default FindMatch;
