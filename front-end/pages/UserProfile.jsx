import React from "react";
import Navbar from "@/ui/Navbar";
import InterestedHouses from "@/ui/InterestedHouses";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getUserById } from "./api";

const UserProfile = () => {
  const router = useRouter();
  const userDetail = {
    id: 1,
    username: "jane_doe",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-nL0vJZ5DiB1ShuTJgy4G6el4YCqpgcTPww&usqp=CAU",
    email: "jane_doe@gmail.com",
    password: "1234",
    habit: "None",
    contact_no: "9876987512",
    dob: "2000-01-01",
    age: 20,
    desc: "I am a passionate traveler who loves to explore new cultures and cuisines. I am a creative person and love to try new things in life.",
    health_description: "NA",
    message: "Looking for travel buddies",
    name: "Jane Doe",
    city: "Mumbai",
    status: "Unmarried",
    eat: "non-veg",
    gender: "male",
  };
  // const fetchHouseDetail = async () => {
  //   let { id } = router.query;
  //   if (!id) id = 3;
  //   console.log("id ", id);
  //   let data = await getUserById({ id });
  //   if (data) setUserDetail(data);
  //   console.log("userDetail: ", userDetail);
  // };

  // useEffect(() => {
  //   fetchHouseDetail();
  // }, []);

  return (
    <div className="user-profile-body">
      <Navbar />
      <main className="profile-page">
        <section className="relative block min-h-[75vh]">
          <div className="background-user absolute top-0 w-full h-full bg-center bg-cover">
            <span
              id="blackOverlay"
              className="w-full h-full absolute bg-[#f5f5dc]"
            ></span>
          </div>
          <div className="svg-wrapper top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="data:image/jpeg;base64,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"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-[5vw]">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center h-fit mb-[-6em]">
                  <div className="profile-pic-wrapper w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="profile-pic relative border-solid border-none ml-10">
                      {/* <img
                        alt="..."
                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      /> */}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-md px-6 py-3 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {userDetail?.age}
                        </span>
                        <span className="text-sm text-blueGray-400">Age</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block capitalize tracking-wide text-blueGray-600">
                          {userDetail?.gender}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Gender
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block capitalize tracking-wide text-blueGray-600">
                          {userDetail?.status}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Status
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    {userDetail?.name}
                  </h3>
                  <div className="text-m leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    {/* <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i> */}
                    {userDetail?.city}
                  </div>
                  <ul className="list-disc w-fit mx-auto">
                    <li className="mb-2 text-blueGray-600 text-left">
                      {userDetail?.message}
                    </li>
                    <li className="mb-2 text-blueGray-600 text-left">
                      Contact Number : {userDetail?.contact_no}
                    </li>
                    <li className="mb-2 text-blueGray-600 text-left">
                      Health problems: {userDetail?.health_description}
                    </li>
                    <li className="mb-2 text-blueGray-600 text-left">
                      Eats <b className="text-green-600">{userDetail?.eat}</b>{" "}
                      food
                    </li>
                    <li className="mb-2 text-blueGray-600 text-left">
                      Smokes or Drinking habits: {userDetail?.habit}
                    </li>
                  </ul>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {userDetail?.desc}
                      </p>
                      {/* <a href="#pablo" className="font-normal text-pink-500">
                        Show more
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Made with{" "}
                    <a
                      href="https://www.creative-tim.com/product/notus-js"
                      className="text-blueGray-500 hover:text-gray-800"
                      target="_blank"
                    >
                      Notus JS
                    </a>{" "}
                    by{" "}
                    <a
                      href="https://www.creative-tim.com"
                      className="text-blueGray-500 hover:text-blueGray-800"
                      target="_blank"
                    >
                      {" "}
                      Creative Tim
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </footer> */}
        </section>
      </main>
      <div className="interested-header flex justify-between items-center mb-[2.5em] mx-[5vw] ">
        <h4 className="text-3xl font-medium  ">Interested Rooms:</h4>
        <svg
          width="601"
          height="193"
          viewBox="0 0 601 193"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[2em] w-[5em]"
        >
          <path
            d="M596.203 105.714C601.28 100.637 601.28 92.4055 596.203 87.3287L513.472 4.59724C508.395 -0.479579 500.164 -0.479579 495.087 4.59724C490.01 9.67405 490.01 17.9052 495.087 22.982L568.626 96.5211L495.087 170.06C490.01 175.137 490.01 183.368 495.087 188.445C500.164 193.522 508.395 193.522 513.472 188.445L596.203 105.714ZM0.633911 109.521H587.011V83.5211H0.633911V109.521Z"
            fill="black"
          />
        </svg>
      </div>

      <InterestedHouses />
    </div>
  );
};

export default UserProfile;
