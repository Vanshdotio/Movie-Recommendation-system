import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navRef = useRef(null);
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      let navbar = navRef.current;
      let currentScroll = window.pageYOffset;

      if (currentScroll > lastScrollTop && currentScroll > 100) {
        navbar.style.top = "-90px"; // Hide navbar
      } else {
        navbar.style.top = "0"; // Show navbar
      }
      lastScrollTop = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        ref={navRef}
        className="fixed top-0 font-[Inter] left-0 w-full text-white  bg-transparent justify-between flex items-center px-4 pr-7 py-2 transition-all duration-300 z-50 "
      >
        <img
          src="/assets/Pi7_Tool_movie recommendation logo.png"
          alt="Logo"
          className="h-13"
        />
        <div className="flex gap-10">
        <Link to="/explore">Explore</Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="search h-6 w-6 cursor-pointer"
        >
          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
        </svg>
        </div>
      </div>
    </>
  );
};

export default Nav;
