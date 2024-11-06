import React from "react";
import Image from "next/image";
import user from "@/public/assets/images/png/user.png"
const BusinessArticle: React.FC = () => {
  return (
    <section
      className="md:h-[820px] h-full md:relative p-6 flex justify-center items-center "
      style={{ backgroundImage: "url('/assets/images/png/background-1.png')" }}
    >
      <div className="container">
        <div className="mx-auto container flex flex-col py-12 md:px-12 md:mt-16">
          <div className="smb-5 ">
            <h1 className="text-[#F0346E] font-[900]">
              SOLUTIONS FOR ALL YOUR NEEDS
            </h1>
            <h2 className="hidden  w-[806px] md:flex mt-8 md:text-4xl font-[900] text-gray-900">
              Facultative Reinsurance
              Broking made simpler with CRBS.
            </h2>
            {/* <h2 className="md:hidden text-2xl mt-8 font-bold text-gray-900">
              Facultative Reinsurance
              Broking made simpler with Comfy
              Reinsurance Broking System.
            </h2> */}
          </div>

          {/* <div className="flex space-x-6">
          <a href="#" className="text-gray-500  hover:text-black font-medium border-b-4 hover:border-red-600">
            Digital Strategy
          </a>
          <a href="#" className="text-gray-500 border-b-4 hover:border-red-600 hover:text-black">
            Data and Technology
          </a>
          <a href="#" className="text-gray-500 hover:border-red-600 hover:text-black border-b-4">
            Experience and Brand
          </a>
        </div> */}

          <div className="flex flex-col md:flex-row items-center md:space-x-10  mt-8 relative">
            <div className="flex-1 mb-6 md:mb-0">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-pink-500 to-orange-400 p-4 rounded-full w-28 h-28 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    className="size-32"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                    />
                  </svg>
                </div>

              </div>
              <div className="md:max-w-[550px] w-full md:ms-20">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Digital Strategy
                </h3>
                <p className="mt-4 md:text-lg text-black text-justify">
                  At Comfy, convenience and comfort is key. Your days of
                  struggling with manual reinsurance Broking processes are over
                  when we take over the wheels with our Comfy reinsurance Broking
                  system. Manage & control the placement of facultative risk with
                  our interactive dashboard in & out of your office with worldwide
                  accessibility.
                </p>


              </div>
            </div>

            <div className="flex-1 md:absolute md:right-24 md:-bottom-60 md:p-4 ">
              <Image src={user} alt="systemDashboard" className="md:w-[600px] rounded-3xl shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessArticle;
