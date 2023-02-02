import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Navbar from "@/ui/Navbar";

const HomePage = () => {
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
    <div className="home-body">
      <Navbar />
      <div className="relative opacity-0 hero-wrapper box-border overflow-x-hidden flex justify-between min-w-[100vw] min-h-[100vh] items-center sm:px-[5vw]">
        <div className="w-3/5">
          <h1 className="text-5xl font-bold pb-6">
            Find the perfect roommates in the place
          </h1>
          <p className="pb-6 w-4/5">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text
          </p>
          <div className="btn-wrapper w-full flex justify-left pt-[2em]">
            <button className="cursor-pointer py-[1em] px-[2.5em] rounded bg-[#FEF3D3] shadow-2xl font-medium hover:bg-[#FFE395]">
              Find rooms
            </button>
            <button className="ml-[4em] cursor-pointer py-[1em] px-[2.5em] rounded bg-[#FEF3D3] shadow-2xl font-medium hover:bg-[#FFE395]">
              Find room mates
            </button>
          </div>
        </div>
        <div className="img-wrapper absolute right-[5vw] w-[36%] translate-y-[20vh]">
          <img className="w-11/12" src="/hero-img-2.png"></img>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
