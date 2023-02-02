import React from "react";

function Navbar() {
  return (
    <nav className="nav-wrapper absolute top-0 z-10 py-[1em] flex items-center justify-between mx-[5vw] w-[90vw]">
      <div className="w-full relative flex justify-between lg:w-auto">
        <a href="/">
          <img src="/logo.png" className="h-[4em]" />
        </a>
      </div>
      <div className="center-nav flex items-center justify-self-center">
        <ul className="flex flex-row list-none lg:ml-auto">
          <li className="nav-item cursor-pointer hover:opacity-50">
            <a href="/FindMatch">Find room/roommates</a>
          </li>
          <li className="nav-item ml-[3em] cursor-pointer hover:opacity-50">
            <a href="#">About us</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex">
          <li className="nav-item cursor-pointer hover:opacity-50">
            <a href="/Login">Log in</a>
          </li>
          <li className="nav-item ml-[3em] cursor-pointer hover:opacity-50">
            <a href="/Login">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
