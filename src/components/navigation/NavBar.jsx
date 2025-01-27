"use client";
import React, { useState, useEffect } from "react";

const links = [
  { label: "الرئيسية" },
  { label: "السيارات" },
  { label: "تواصل معنا" },
  { label: "من نحن" },
];

const NavBar = () => {
  //track scrolling position
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar fixed top-0 text-white z-10 duration-300 ${
        isScrolled ? " bg-bg bg-opacity-60 backdrop-blur-sm" : "bg-transparent"
      } `}
    >
      <div className="container w-full">
        <div className="flex-1">
          <a className=" font-bold text-xl">
            <span className="text-brand">السيارة</span> الذهبية
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal text-lg px-1">
            {links.map((link, index) => (
              <li key={index} className="hover:text-brand">
                <a className="px-2 mx-2">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
