import Head from "next/head";
import React, { useEffect } from "react";
import { AppProvider } from "../context";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";

export default function Home() {
  useEffect(() => {
    // let tl1 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".home-services-body",
    //     start: "top 75%",
    //   },
    // });
    // tl1.to(".home-services-body .desc", {
    //   opacity: 1,
    //   duration: 1,
    //   ease: "power4.out",
    // });
    gsap.to(".hero-wrapper", {
      opacity: 1,
      duration: 2,
    });
  }, []);
  return (
    <AppProvider>
      <Head>
        <title>Roomie</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-body relative">
        <Navbar />
        <div className="relative opacity-0 hero-wrapper box-border overflow-x-hidden flex justify-between min-w-[100vw] min-h-[100vh] items-center sm:pl-[5vw]">
          <div className="w-3/5">
            <h1 className="text-[3rem] font-bold pb-[0.5em] leading-[1.1] w-5/6">
              Come and Find your perfect shared living space.
            </h1>
            <p className="pb-[0.5em] w-4/5">
              Experience the comfort of a hassle-free room search and matching
              process with us and find an ideal living experience anywhere in
              the world.
            </p>
            <div className="btn-wrapper w-[full] flex justify-left pt-[2em]">
              <button className="cursor-pointer py-[1.5em] px-[3.5em] rounded bg-[#FEF3A1] text-[1.1rem] shadow-2xl font-medium hover:bg-[#FFE395] relative left-0 translate-x-[-5vw]">
                <Link
                  href="/FindMatch"
                  className="flex justify-center items-center relative"
                >
                  <p className="mr-[2em]">Find rooms/roommates</p>

                  {/* <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Choose plan
                    
                  </button> */}
                  <svg
                    width="73"
                    height="14"
                    viewBox="0 0 73 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-[-40%]"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M64.7949 0.292786C64.9825 0.105315 65.2368 0 65.5019 0C65.7671 0 66.0214 0.105315 66.2089 0.292786L72.209 6.29279C72.3964 6.48031 72.5017 6.73462 72.5017 6.99979C72.5017 7.26495 72.3964 7.51926 72.209 7.70679L66.2089 13.7068C66.0203 13.8889 65.7677 13.9897 65.5055 13.9875C65.2433 13.9852 64.9925 13.88 64.8071 13.6946C64.6217 13.5092 64.5165 13.2584 64.5143 12.9962C64.512 12.734 64.6128 12.4814 64.7949 12.2928L69.0879 7.99979L47 8.5L24.5 9C24.2348 9 9.99998 9 9.49998 9C9.31245 8.81246 1 9.26522 1 9C1 8.73478 0.814252 7.68754 1.00179 7.5C1.18932 7.31246 29.7365 7 30.0017 7L69.0879 5.99979L64.7949 1.70679C64.6075 1.51926 64.5022 1.26495 64.5022 0.999786C64.5022 0.734622 64.6075 0.480314 64.7949 0.292786Z"
                      fill="black"
                    />
                  </svg>

                  {/* <img src="/arrow.png" className="scale-[0.2]" /> */}
                </Link>
              </button>
              {/* <button className="ml-[4em] cursor-pointer py-[1em] px-[2.5em] rounded bg-[#FEF3D3] shadow-2xl font-medium hover:bg-[#FFE395]">
                Find room mates
              </button> */}
            </div>
          </div>
          {/* translate-y-[20vh] */}
          <div className="img-wrapper absolute right-[5vw] w-[36%] mt-[10vh] ">
            <img
              className="w-11/12"
              src="/hero-img-3.png"
              alt="house and roommate image"
            ></img>
          </div>
        </div>
        <section className="mt-[3em] px-[5vw] pb-[10vh]">
          <h2 className="text-4xl font-medium">What we provide . . .</h2>

          <div className="services-wrapper flex justify-between">
            <div className="card mt-[25vh] max-w-[25vw] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center pb-10 relative">
                <div className="h-[150px] w-[150px] absolute top-[-50px] ">
                  <img src="/service-1-1.png" alt="service-1" />
                </div>
                <h4 className="mb-1 mt-[4.5em] text-2xl font-semibold text-gray-900 dark:text-white">
                  Find Rooms
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400 px-[3em] mt-[1em]">
                  Find rooms that best suite your needs and comfort at the palm
                  of your hand
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
            <div className="card mt-[25vh] max-w-[25vw] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center pb-10 relative">
                <div className="max-h-[150px] w-[150px] absolute top-[-50px]">
                  <img src="/service-1.png" alt="service-1" />
                </div>
                <h4 className="mb-1 mt-[4.5em] text-2xl font-semibold text-gray-900 dark:text-white">
                  Find Roommates
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400 px-[3em] mt-[1em]">
                  Easily find the roommate that best matches with your interests
                  in any locality of choice
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
            <div className="card mt-[25vh] max-w-[25vw]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center pb-10 relative">
                <div className="max-h-[150px] w-[150px] absolute top-[-50px]">
                  <img src="/service-3.png" alt="service-1" />
                </div>
                <h4 className="mb-1 mt-[4.5em] text-2xl font-semibold text-gray-900 dark:text-white">
                  An ideal combination
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400 px-[3em] mt-[1em]">
                  Use various filters and narrow it down to the best combination
                  of rooms and room mates
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </AppProvider>
  );
}
