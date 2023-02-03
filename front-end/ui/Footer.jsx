import React from "react";

function Footer() {
  return (
    <footer class=" bg-black sm:py-[2em] mt-[3em]">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="" class="flex items-center">
            <img src="/logo-4.png" class="h-[5em] mx-[5vw]" alt="Logo" />
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 ">
          <div className="mr-[6em]">
            <h2 class="mb-3 text-m font-semibold text-gray-900 uppercase text-white">
              Pages
            </h2>
            <ul class="text-gray-400 ">
              <li class="mb-4">
                <a href="/FindMatch" class="hover:underline">
                  find room/roomate
                </a>
              </li>
              <li class="mb-4">
                <a href="/" class="hover:underline">
                  About us
                </a>
              </li>
              <li class="mb-4">
                <a href="/" class="hover:underline">
                  Sign up
                </a>
              </li>
              <li>
                <a href="/Login" class="hover:underline">
                  Log in
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase text-white">
              Contact us
            </h2>
            <ul class="text-gray-400">
              <li class="mb-4">
                <a href="" class="hover:underline ">
                  5515
                </a>
              </li>
              <li>
                <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">
                  1412
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="text-center text-white">
        © 2023 Roomie.All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
