import React from "react";
import Image from "next/image";
import { herobackground } from "@/constants";
import Header from "./Layout/Header";
import Circle from "./Circle";

const Hero: React.FC = () => {
  const goToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }  }
  return (
    <section
      className=" bg-cover h-[780px]  md:h-[870px] bg-center  bg-no-repeat flex flex-col items-center"
      style={{
        background: `url(${herobackground.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col  w-full container">
        <div className="relative z-20 mt-1">
          <Header />
        </div>
        <div className="w-full p-6 md:p-0 container mx-auto md:ms-36">
          <div className="row z-50 align-items-center md:flex md:justify-between mt-8  ">
            <div className="col-lg-6 flex flex-col md:justify-around">
              <Circle className="absolute border-[#ff9131] border-[48px] bottom-40 w-[220px] h-[220px]  animate-animate-bounce -left-20" />
              <div className="text-three z-20 w-[580px]">
                <h2 className="font-bold text-white text-4xl md:text-6xl md:leading-[72px] text-capitalize ">
                  Intuitive technology for your business.
                </h2>

                {/* <h2 className="font-bold text-4xl md:text-6xl pt-6 md:pt-0 text-buttoncolor md:leading-[72px]">
                  Step in and Let’s make your dreams come true.
                </h2> */}
                <p className="text-lg md:text-2xl pt-6 pb-10 text-white md:leading-[34px]">
                  We create outstanding and world-class digital products, web
                  design, apps, and branding.
                </p>
                <div className=" md:block  ">
                  <button onClick={goToServices} className="px-8 w-[235px] h-[58px] py-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-base font-bold font-sans rounded-full">
                    Discover Services
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 relative -bottom-10 -top-4 md:-top-0  z-10">
              <Circle className="absolute border-[#ffc32a] border-[24px] -z-30  w-[100px] h-[100px]  animate-animate-bounce right-96" />
              <div className="z-50">
                <Image
                  src={"/assets/images/png/hero-three-img.png"}
                  alt={"Hero Image"}
                  width={954}
                  height={761}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
