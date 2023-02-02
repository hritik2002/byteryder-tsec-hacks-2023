import React from "react";
import Navbar from "@/ui/Navbar";

const UserProfile = () => {
  return (
    <div className="user-profile-body">
      <Navbar />
      <main class="profile-page">
        <section class="relative block min-h-[75vh]">
          <div class="background absolute top-0 w-full h-full bg-center bg-cover">
            <span
              id="blackOverlay"
              class="w-full h-full absolute bg-[rgb(181, 140, 17)]"
            ></span>
          </div>
          <div class="svg-wrapper top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section class="relative py-16 bg-blueGray-200">
          <div class="container mx-auto px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-xl rounded-lg -mt-64">
              <div class="px-6">
                <div class="flex flex-wrap justify-center h-fit mb-[-6em]">
                  <div class="profile-pic-wrapper w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div class="profile-pic relative border-solid border-none">
                      {/* <img
                        alt="..."
                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                        class="shadow-xl rounded-full h-auto align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      /> */}
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div class="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        class="bg-blue-500 hover:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-md px-6 py-3 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-1">
                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                      <div class="mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          20
                        </span>
                        <span class="text-sm text-blueGray-400">Age</span>
                      </div>
                      <div class="mr-4 p-3 text-center">
                        <span class="text-xl font-bold block capitalize tracking-wide text-blueGray-600">
                          Male
                        </span>
                        <span class="text-sm text-blueGray-400">Gender</span>
                      </div>
                      <div class="lg:mr-4 p-3 text-center">
                        <span class="text-xl font-bold block capitalize tracking-wide text-blueGray-600">
                          unmarried
                        </span>
                        <span class="text-sm text-blueGray-400">Status</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center mt-2">
                  <h3 class="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    Jenna Stones
                  </h3>
                  <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Bandra West, Mumbai
                  </div>
                  <ul className="list-disc w-fit mx-auto">
                    <li class="mb-2 text-blueGray-600 mt-10 text-left">
                      {/* <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i> */}
                      Currently working as a Software Developer
                    </li>
                    <li class="mb-2 text-blueGray-600 text-left">
                      {/* <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i> */}
                      Undergraduate, Studying Computer engineering at TSEC
                    </li>
                    <li class="mb-2 text-blueGray-600 text-left">
                      {/* <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i> */}
                      Looking for rooms and currently interested in <b>10</b>{" "}
                      places
                    </li>
                    <li class="mb-2 text-blueGray-600 text-left">
                      {/* <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i> */}
                      Eats <b className="text-green-600">Veg</b> food
                    </li>
                  </ul>
                </div>
                <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4">
                      <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      {/* <a href="#pablo" class="font-normal text-pink-500">
                        Show more
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <footer class="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div class="container mx-auto px-4">
              <div class="flex flex-wrap items-center md:justify-between justify-center">
                <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div class="text-sm text-blueGray-500 font-semibold py-1">
                    Made with{" "}
                    <a
                      href="https://www.creative-tim.com/product/notus-js"
                      class="text-blueGray-500 hover:text-gray-800"
                      target="_blank"
                    >
                      Notus JS
                    </a>{" "}
                    by{" "}
                    <a
                      href="https://www.creative-tim.com"
                      class="text-blueGray-500 hover:text-blueGray-800"
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
    </div>
  );
};

export default UserProfile;
