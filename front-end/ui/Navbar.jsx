import React from "react";

function Navbar() {
  return (
    <nav className="nav-wrapper absolute top-0 z-10 py-[1em] flex items-center justify-between mx-[5vw] w-[90vw]">
      <div className="w-full relative flex justify-between lg:w-auto">
        <img src="/logo.png" className="h-[4em]" />
      </div>
      <div className="center-nav flex items-center justify-self-center">
        <ul className="flex flex-row list-none lg:ml-auto">
          <li className="nav-item cursor-pointer hover:opacity-50">
            <a>Find room/roommates</a>
          </li>
          <li className="nav-item ml-[3em] cursor-pointer hover:opacity-50">
            <a>About us</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex">
          <li className="nav-item cursor-pointer hover:opacity-50">
            <a>Log in</a>
          </li>
          <li className="nav-item ml-[3em] cursor-pointer hover:opacity-50">
            <a>Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
