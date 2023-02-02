import React from 'react'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-2 py-3 mb-3">
      <div className="container px-4 flex items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <img src="/Logo.png" className='h-[4em]'/> 
        </div>
        <div className={"flex items-center "} >
          <ul className="flex flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs  leading-snug  hover:opacity-75"
                href="#pablo"
              >
              <span className="ml-2">find room/roomate</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs  leading-snug  hover:opacity-75"
                href="#pablo"
              >
              <span className="ml-2">About us</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs leading-snug  hover:opacity-75"
                href="#pablo"
              >
            <span className="ml-2">Log in</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar




