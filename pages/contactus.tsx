import React from "react";
import { herobackground, banner } from "@/src/constants";
import Header from "@/src/components/Layout/Header";
import Image from "next/image";
import Footer from "@/src/components/Layout/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faGithub,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
const ContactUs: React.FC = () => {
  return (
    <section className="">
      <div
        className="bg-cover h-[564px]  md:h-[564px] bg-center bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${herobackground})` }}
      >
        <div className="container">
          <Header />
        </div>

        <div className="flex items-center justify-between text-white ">
          <div className="">
            <p className="text-[70px] font-extrabold">Contact Us</p>
            <p className="w-[600px] text-[20px] font-semibold">
              We create outstanding and world-class digital products, web
              design, apps, and branding.
            </p>
          </div>
          <div className="p-10">
            <Image src={banner} alt={"Hero Image"} width={590} height={464} />
          </div>
        </div>
      </div>

      <div className="mb-20">
        <div className=" h-full flex items-center relative justify-center ">
          <div className="container bg-[#fff8e1] relative flex flex-col justify-center h-screen mx-40 mt-72 px-24 py-96 rounded-[80px]">
            <div className="flex items -center justify-center gap-10 absolute -top-[150px]">
              <div className="border-[3px] group hover:border-[#ef326f] duration-700 ease-in transition-all cursor-pointer flex gap-4 flex-col items-center justify-center border-[#d8d8d8] w-[363px] h-[299px] bg-white rounded-[50px]">
                <div className="w-[120px] h-[120px] flex justify-center items-center group-hover:bg-gradient-to-tl group-hover:from-[#ef326f] group-hover:to-[#fe6c4e] transition-all duration-700  ease-linear  rounded-full  border-2 border-[#ef326f] group-hover:border-[#fe6c4e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="size-16 group-hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>{" "}
                <h4 className="text-xl font-bold">Phone No.</h4>
                <p className="text-xl">+233 26000389</p>
              </div>
              <div className="border-[3px] group hover:border-[#ef326f] duration-700 ease-in transition-all cursor-pointer flex gap-4 flex-col items-center justify-center border-[#d8d8d8] w-[363px] h-[299px] bg-white rounded-[50px]">
                <div className="w-[120px] h-[120px] flex justify-center items-center group-hover:bg-gradient-to-tl group-hover:from-[#ef326f] group-hover:to-[#fe6c4e] transition-all duration-75  ease-linear  rounded-full  border-2 border-[#ef326f] group-hover:border-[#fe6c4e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="size-16 group-hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>{" "}
                <h4 className="text-xl font-bold">Location</h4>
                <p className="text-xl text-center">
                  GE-0207-0448, East Legon - Accra (Ghana)
                </p>
              </div>
              <div className="border-[3px] group cursor-pointer hover:border-[#ef326f] duration-700 ease-in transition-all flex gap-4 flex-col items-center justify-center border-[#d8d8d8] w-[363px] h-[299px] bg-white rounded-[50px]">
                <div className="w-[120px] h-[120px] flex justify-center items-center group-hover:bg-gradient-to-tl group-hover:from-[#ef326f] group-hover:to-[#fe6c4e] transition-all duration-700  ease-linear  rounded-full  border-2 border-[#ef326f] group-hover:border-[#fe6c4e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="size-16 group-hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold">Email Address</h4>
                <p className="text-xl">info@comfytechnology.tech</p>
              </div>
            </div>

            <div className="container flex mt-32 justify-between">
              <div className=" w-[470px] flex flex-col gap-5">
                <h3 className="text-lg font-semibold text-[#f0356e]">
                  MEET OUR PROFESSIONALS
                </h3>
                <p className="text-[50px] font-extrabold leading-none text-black">
                  We&#39;d Love to Hear From You!
                </p>
                <p className="text-lg">
                  If you need information or support, feel free to contact us
                </p>
                <div>
                  <h3 className="text-lg font-bold uppercase">
                    Social Networking:
                  </h3>
                  <div className="flex md:justify-start space-x-4 mt-3">
                    <Link
                      href="#"
                      className="text-black hover:text-gray-900 hover:shadow-md transition-shadow delay-75 ease-out  bg-white hover:bg-white border flex justify-center items-center w-[50px] h-[50px] shadow-xl rounded-full"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </Link>
                    <Link
                      href="#"
                      className="text-black hover:text-gray-900 hover:shadow-md transition-shadow delay-75 ease-out   bg-white hover:bg-white border flex justify-center items-center w-[50px] h-[50px] shadow-xl rounded-full"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link
                      href="#"
                      className="text-black hover:text-gray-900 hover:shadow-md transition-shadow delay-75 ease-out  bg-white hover:bg-white border flex justify-center items-center w-[50px] h-[50px] shadow-xl rounded-full"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </Link>
                    <Link
                      href="#"
                      className="text-black hover:text-gray-900 hover:shadow-md transition-shadow delay-75 ease-out bg-white hover:bg-white border flex justify-center items-center w-[50px] h-[50px] shadow-xl rounded-full"
                    >
                      <FontAwesomeIcon icon={faDribbble} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <input
                    type="text"
                    placeholder="Complete Name"
                    className="w-[556px] h-[60px] rounded-[52px] px-6 border border-[#c1c1c1]"
                  />
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="w-[556px] h-[60px] rounded-[52px] px-6 border border-[#c1c1c1]"
                  />
                  <input
                    type="text"
                    placeholder="Phone No"
                    className="w-[556px] h-[60px] rounded-[52px] px-6 border border-[#c1c1c1] "
                  />
                </div>
                <textarea
                  name=""
                  placeholder="Your Message"
                  id=""
                  className="w-[556px] border border-[#c1c1c1] p-6 h-[160px] rounded-[32px]"
                ></textarea>
                <div className="hidden md:block">
                  <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-base font-bold font-sans rounded-full">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactUs;
