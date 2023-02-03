import React from "react";
import Navbar from "@/ui/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getOneHouseDetailFn } from "./api";

const HouseProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [houseDetail, setHouseDetail] = useState({});

  const fetchHouseDetail = async () => {
    let data = await getOneHouseDetailFn({ id });
    if (data) setHouseDetail(data);
  };

  useEffect(() => {
    fetchHouseDetail();
  }, []);

  return (
    <div className="house-profile-body">
      <Navbar />
      <main class="profile-page">
        <section class="relative block min-h-[75vh]">
          <div class="background-house absolute top-0 w-full h-full bg-center bg-cover">
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
                    <div class="house-pic relative border-solid border-none">
                      {/* <img
                        alt="..."
                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                        class="shadow-xl rounded-full h-auto align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      /> */}
                    </div>
                  </div>

                  <div class="w-full lg:w-4/12 px-4 lg:order-1 mr-[3em]">
                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                      <div class="mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {houseDetail?.address_obj?.state}
                        </span>
                        <span class="text-sm text-blueGray-400">State</span>
                      </div>
                      <div class="mr-4 p-3 text-center">
                        <span class="text-xl font-bold block capitalize tracking-wide text-blueGray-600">
                          {houseDetail?.address_obj?.city}
                        </span>
                        <span class="text-sm text-blueGray-400">City</span>
                      </div>
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-3 flex ml-[3em] translate-x-[1em] relative">
                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                      <div class="lg:mr-4 p-3 text-center">
                        <span class="text-xl font-bold block capitalize tracking-wide text-blueGray-600">
                          {houseDetail?.address_obj?.postalcode}
                        </span>
                        <span class="text-sm text-blueGray-400">Pincode</span>
                      </div>
                    </div>
                    {/* <div class="flex justify-center py-4 lg:pt-4 pt-8">
                      <div class="lg:mr-4 p-3 text-center">
                        <span class="text-xl font-bold block capitalize tracking-wide text-blueGray-600">
                          400051
                        </span>
                        <span class="text-sm text-blueGray-400">Pincode</span>
                      </div>
                    </div> */}
                    <div class="w-full lg:w-4/12 px-4 lg:text-right lg:self-center">
                      <div class="py-6 px-3 sm:mt-0">
                        <button
                          class=" border-solid border-2 border-black-100 bg-white hover:bg-blue-300 uppercase text-black font-bold hover:shadow-md shadow text-md px-6 py-3 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Interested
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center mt-2">
                  <h3 class="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    Maple Crest{" "}
                    <p className="text-2xl font-normal">4.5 stars</p>
                  </h3>
                  <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {houseDetail?.address}
                  </div>
                  <ul className="list-disc w-fit mx-auto">
                    <li class="mb-2 text-blueGray-600 mt-10 text-left">
                      {/* <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i> */}
                      <b>{houseDetail?.interested_users?.length}</b> People are
                      currently interested in renting this room
                    </li>
                    <li class="mb-2 text-blueGray-600 text-left">
                      {/* <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i> */}
                      Safety Rating: <b>{houseDetail?.safety_rating}</b>
                    </li>
                  </ul>
                </div>
                <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4">
                      <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {houseDetail?.nearbyfoodplaces}
                      </p>
                      <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {houseDetail?.nearbyshops}
                      </p>
                      <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {houseDetail?.landmark}
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
        </section>
      </main>
    </div>
  );
};

export default HouseProfile;
