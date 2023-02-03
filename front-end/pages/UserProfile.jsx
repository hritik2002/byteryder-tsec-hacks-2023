import React from "react";
import Navbar from "@/ui/Navbar";
import InterestedHouses from "@/ui/InterestedHouses";

const UserProfile = () => {
  const userData = {};
  return (
    <div className="user-profile-body">
      <Navbar />
      <main className="profile-page">
        <section className="relative block min-h-[75vh]">
          <div className="background-user absolute top-0 w-full h-full bg-center bg-cover">
            <span
              id="blackOverlay"
              className="w-full h-full absolute bg-[rgb(181, 140, 17)]"
            ></span>
          </div>
          <div className="svg-wrapper top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
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
                    <div className="profile-pic relative border-solid border-none">
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
                          {userData.age}
                        </span>
                        <span className="text-sm text-blueGray-400">Age</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block capitalize tracking-wide text-blueGray-600">
                          {userData.gender}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Gender
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block capitalize tracking-wide text-blueGray-600">
                          {userData.status}
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
                    {userData.name}
                  </h3>
                  <div className="text-m leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    {/* <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i> */}
                    {userData.city}
                  </div>
                  <ul className="list-disc w-fit mx-auto">
                    <li className="mb-2 text-blueGray-600 text-left">
                      {userData.message}
                    </li>
                    <li className="mb-2 text-blueGray-600 text-left">
                      Contact Number : {userData.contact_no}
                    </li>
                    <li className="mb-2 text-blueGray-600 text-left">
                      Health problems: {userData.health_description}
                    </li>
                    <li className="mb-2 text-blueGray-600 text-left">
                      Eats <b className="text-green-600">{userData.eat}</b> food
                    </li>
                    <li className="mb-2 text-blueGray-600 text-left">
                      Smokes or Drinking habits: {userData.drinking}
                    </li>
                  </ul>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {userData.desc}
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
