import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <section className="bg-primary text-white px-10 py-5">
        <div className="flex justify-between items-center md:px-20">
          <div className="w-[75%] flex flex-col">
            <img className="w-[250px]" src="weatherApp-logo.png" alt="" />
            <h2 className="md:ml-20 ml-17">WEATHERLY</h2>
          </div>

          <div className="hidden md:block">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-2xl ${isActive ? "text-white" : "text-red-300"} `
              }
            >
              Home
            </NavLink>
          </div>

          {!isMenuOpen && (
            <div
              onClick={() => setIsMenuOpen(true)}
              className="flex flex-col w-7 gap-1 pt-4 cursor-pointer md:hidden"
            >
              <span
                className={`block w-full h-1 bg-white rounded transition duration-300  `}
              ></span>
              <span
                className={`block w-full h-1 bg-white rounded transition duration-300 `}
              ></span>
              <span
                className={`block w-full h-1 bg-white rounded transition duration-300 `}
              ></span>
            </div>
          )}
        </div>

        {/* sideBar */}
        <div
          className={`fixed -left-[250px] top-0 w-[50%] md:hidden bg-secondary h-screen transition-all duration-300 ${
            isMenuOpen ? "left-0" : ""
          }`}
        >
          <div className="flex flex-col items-end">
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col w-7 gap-1 pt-4 cursor-pointer"
            >
              <span
                className={`block w-full h-1 bg-white rounded transition duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                } `}
              ></span>
              <span
                className={`block w-full h-1 bg-white rounded transition duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                } `}
              ></span>
              <span
                className={`block w-full h-1 bg-white rounded transition duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                } `}
              ></span>
            </div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block w-full text-2xl py-7 mt-10 text-center ${
                  isActive ? "text-primary bg-white" : "text-black"
                } `
              }
            >
              Home
            </NavLink>
          </div>
        </div>
        {/* ===sideBar=== */}
      </section>
    </>
  );
}

export default Navbar;
