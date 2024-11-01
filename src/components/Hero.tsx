import React from "react";
import Image from "next/image";
import Header from "./Layout/Header";
import { herobackground } from "../constants";

const Hero: React.FC = () => {
  return (
    <section
      className=" bg-cover h-[780px] md:h-[870px] bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${herobackground})`}}
    >
      <div className="relative z-20">
        <Header />
      </div>
      <div className=" w-full p-6 md:p-0 container mx-auto md:ms-36">
        <div className="row align-items-center md:flex md:justify-between mt-8  ">
          <div className="col-lg-6 flex md:justify-around">
            <div className="text-three w-[580px] md:mt-16">
              <h2 className="font-bold text-white text-4xl md:text-6xl md:leading-[72px] text-capitalize ">
                Intuitive technology for your business.
              </h2>

              <h2 className="font-bold text-4xl md:text-6xl pt-6 md:pt-0 text-buttoncolor md:leading-[72px]">
                Step in and Let’s make your dreams come true.
              </h2>
              <p className="text-lg md:text-2xl pt-6 pb-10 text-white md:leading-[34px]">
                We create outstanding and world-class digital products, web
                design, apps, and branding.
              </p>
            </div>
          </div>

          <div className="col-lg-6 relative -bottom-10 -top-4 md:-top-0  z-10">
              <div className="">
                <Image src={'/assets/images/png/hero-three-img.png'} alt={'Hero Image'} width={954} height={761} />
               
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
