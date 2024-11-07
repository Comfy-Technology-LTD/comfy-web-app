import React from "react";
import Image from "next/image";
import frame from "../../public/assets/images/png/frame.webp";
const BusinessArticle: React.FC = () => {
  return (
    <section
      className="md:h-[820px] h-full p-6 smd:mt-32 flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/images/png/background-1.png')" }}
    >
      <div className="container ">
        <div className="flex flex-col md:flex-row items-center relative">
          <div className=" md:absolute md:bottom-20 smd:left-28">
            <Image src={frame} alt="systemDashboard" className="w-[746px]" />
          </div>
          <div className="container flex flex-col items-end mx-auto py-12 md:px-12 md:mt-16">
            <div className=" mb-5 w-full md:w-[600px]">
              <h1 className="text-red-600 font-semibold ">
                SOLUTIONS FOR ALL YOUR NEEDS
              </h1>
              <h2 className="text-3xl mt-8 md:text-4xl font-[900] text-gray-900 ">
                Stay on top of Treaty Broking
              </h2>
            </div>

            {/* <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500  hover:text-black font-medium border-b-4 hover:border-red-600"
            >
              Digital Strategy
            </a>
            <a
              href="#"
              className="text-gray-500 border-b-4 hover:border-red-600 hover:text-black"
            >
              Data and Technology
            </a>
            <a
              href="#"
              className="text-gray-500 hover:border-red-600 hover:text-black border-b-4"
            >
              Experience and Brand
            </a>
          </div> */}

            <div className="flex flex-col md:flex-row items-center md:space-x-10 md:mt-8">
              <div className="flex-1 mb-6 md:mb-0">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-400 p-4 rounded-full w-28 h-28 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="size-32"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="max-w-[550px] md:ms-20 ">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Digital Strategy
                  </h3>
                  <p className="mt-4 md:text-lg text-black text-justify">
                    As a reinsurance broker, proper management of treaty programs
                    is necessary for the protection of your clients risk
                    portfolio. Our system helps you manage and generate treaty
                    cover notes, handle excess of loss recoveries and generate
                    quarterly treaty statements from bordereaux submissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessArticle;
