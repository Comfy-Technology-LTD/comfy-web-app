import React from "react";
import Image from "next/image";
import { comfyLogo } from "@/constants";
import { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent p-8 flex justify-between items-center">
      <section className="container flex md:justify-around justify-between items-center">
        <div className="flex items-center">
          <Image src={comfyLogo} alt="ComfyLogo" width={100} height={56} />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <nav
          className={`${
            isMenuOpen ? "flex flex-col" : "hidden"
          } md:flex md:space-x-8 gap-6 absolute md:static top-0  left-0 w-full md:w-auto md:text-white bg-white text-black md:h-auto h-screen md:bg-transparent p-8 md:p-0 z-10`}
        >
          <span   onClick={toggleMenu} className="md:hidden absolute top-3 right-6 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="red"
              className="size-10 transition-transform duration-500 hover:rotate-180"
            
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </span>
          <Link href="/" className="md:mt-0 text-base font-[900] mt-8 hover:text-[#F34566]">
            Home
          </Link>
          <Link href="/aboutus" className="text-base font-[900] hover:text-[#F34566]">
            About Us
          </Link>
          <Link href="/contactus" className="text-base font-[900] hover:text-[#F34566]">
            Contact Us
          </Link>
          <button className="px-4 py-2 md:hidden bg-gradient-to-r from-pink-500 to-orange-400 text-white text-base font-bold font-sans rounded-full w-full ">
            Request Demo
          </button>
        </nav>

        <div className="hidden md:block">
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-base font-bold font-sans rounded-full">
            Request Demo
          </button>
        </div>

        {/* Request Demo Button (for mobile view) */}
        {/* <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden p-4 text-center bg-gray-900`}
        >
          <button className="px-4 py-2 bg-green-900 text-white text-base font-bold font-sans rounded-full w-full hover:bg-buttoncolor">
            Request Demo
          </button>
        </div> */}
      </section>
    </header>
  );
};

export default Header;
