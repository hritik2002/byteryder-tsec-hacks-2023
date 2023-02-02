import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Navbar() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!typeof window || !typeof localStorage) {
      setLoading(true);
      return <></>;
    } else setLoading(false);
  }, []);
  if(loading) return <div>Loading...</div>
  if (!typeof window) {
    return <></>;
  }

  return (
    <nav className="nav-wrapper absolute top-0 z-10 py-[1em] flex items-center justify-between mx-[5vw] w-[90vw]">
      <div className="w-full relative flex justify-between lg:w-auto">
        <a href="/">
          <img src="/logo-3.png" className="h-[3.5em]" />
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
        {localStorage.getItem("Token") ? (
          <a href="/UserProfile">Profile</a>
        ) : (
          <ul className="flex">
            <li className="nav-item cursor-pointer hover:opacity-50">
              <a href="/Login">Log in</a>
            </li>
            <li className="nav-item ml-[3em] cursor-pointer hover:opacity-50">
              <a href="/Login">Register</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
