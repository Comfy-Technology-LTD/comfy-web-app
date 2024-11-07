import Header from "@/src/components/Layout/Header";
import Partners from "@/src/components/Partners";
import SolutionCard from "@/src/components/SolutionsCard";
import Team from "@/src/components/Team";
import { solutionData } from "@/src/constants/data";
import {
  herobackground,
  banner,
  intelligent,
  AboutVideo,
  business,
  dots,
  back,
} from "@/src/constants";
import Image from "next/image";
import Footer from "@/src/components/Layout/Footer";

const AboutUs: React.FC = () => {
  return (
    <section className="">
      <div
        className=" bg-cover h-[564px]  md:h-[564px] bg-center  bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${herobackground})` }}
      >
        <div className="container">
          <Header />
        </div>

        <div className="flex items-center justify-between text-white ">
          <div className="">
            <p className="text-[70px] font-extrabold">About</p>
            <p className="w-[600px] text-[20px]">
              We create outstanding and world-class digital products, web
              design, apps, and branding.
            </p>
          </div>
          <div className="p-10">
            <Image src={banner} alt={"Hero Image"} width={590} height={464} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-white text-black">
        <div className="container flex justify-center gap-20 pt-28">
          <div className="w-[600px]">
            <div>
              <p className="text-[50px] font-bold pb-20">
                Intelligent Apps for Every Business Model
              </p>
            </div>
            <div className="bg-gradient-to-r relative flex items-center from-pink-500 to-orange-400 w-[600px] h-[600px] rounded-[40px]">
              <div className="absolute -top-14">
                <Image
                  src={intelligent}
                  width={589}
                  height={658}
                  alt={"intelligent"}
                  className=""
                />
              </div>
            </div>
          </div>

          <div className=" w-[636px]">
            <div className="text-[18px] flex flex-col gap-10">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed
                eius to massa. Lorem ipsum dolor sit amet,to mod tempor
                incididunt Lorem incididunt ut labore et dolore magna aliqua. Ut
                enims ad minim veni massa.Lorem ipsum dolor sit amet,to mod
                tempor incididunt
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed
                eius to incididunt ut labore et dolore magna aliqua. Ut enims ad
                minim veni massa. Lorem ipsum dolor sit amet,to mod tempor
                incididunt
              </p>
            </div>

            <div className="flex gap-10 justify-between mt-10 mb-10">
              <div className=" flex flex-col gap-4">
                <div className="bg-[#ef2569] rounded-full w-20 h-20"></div>
                <div>
                  <p className="text-[22px] font-bold">Secuity Certified</p>
                  <p className="text-[18px]">
                    adipisicing elit,sed eius to inci didunt ut labore et dolore
                  </p>
                </div>
              </div>

              <div className=" flex flex-col gap-4">
                <div className="bg-[#31c071] rounded-full w-20 h-20"></div>
                <div>
                  <p className="text-[22px] font-bold">Cloud</p>
                  <p className="text-[18px]">
                    adipisicing elit,sed eius to inci didunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={AboutVideo}
                alt=""
                width={636}
                height={348}
                className="rounded-[30px]"
              />
              <div className="z-50 absolute bottom-[135px] right-[280px] w-20 h-20 flex items-center shadow-md justify-center rounded-full bg-gradient-to-r from-pink-500 p-5 to-orange-400">
                <div className="relative w-24 h-24 flex items-center justify-center rounded-full">
                  <div className="animate-ping duration-[20ms] absolute -stop-6 -sleft-8 z-50 sbottom-[135px] sright-[280px] w-20 h-20 flex items-center shadow-md justify-content-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400"></div>
                  <button className="flex items-center justify-center w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team />

      <section className="flex items-center justify-center relative p-32 bg-white text-black">
        <div className="container flex items-center justify-between">
          <div className="px-3">
            <div>
              <p className="text-[50px] ms-8 font-bold w-[500px]">
                We’re Here To Do Better Business.
              </p>
            </div>

            <div className="flex flex-col gap-10  ps-[100px] mt-10">
              <p className="text-lg w-[482px]">
                Lorem ipsum dolor sit amet, consectetur adipis icing elit,sed
                eius to incididunt ut labore et dolore magna aliqua. Ut enims ad
                minim venimassa. Lor em ipsum d olor sit amet,to mod tempor
                incididunt g elit,sed eiu eius to incididus to inci.
              </p>
              <div className="w-[536px] h-[260px] rounded-[150px] p-5 bg-white shadow-lg shadow-red-300 border flex items-center justify-between">
                <div className="w-[220px] h-[220px] flex items-center justify-center  rounded-full bg-gradient-to-r  from-pink-500 to-orange-400">
                  <div className="w-[210px] h-[210px] rounded-full flex flex-col items-center justify-center bg-white">
                    <span>
                      <p className="text-[60px] font-bold text-center">
                        45 <sup className="">k</sup>
                      </p>
                    </span>
                    <p className="text-[14px] w-[156px] text-center ">
                      Project has been completed
                    </p>
                  </div>
                </div>
                <div className="w-[220px] h-[220px] flex items-center justify-center  rounded-full bg-gradient-to-r  from-pink-500 to-orange-400">
                  <div className="w-[210px] h-[210px] rounded-full flex items-center justify-center flex-col bg-white">
                    <span>
                      <p className="text-[60px] font-bold text-center">
                        5 <sup className="">%</sup>
                      </p>
                    </span>
                    <p className="text-[14px] w-[156px] text-center ">
                      Project has been completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" z-50">
            <div className=" relative top-16 -left-10 z-50">
              <Image src={business} alt="" width={670} height={528} />
            </div>
            <div className="w-[843px] absolute bottom-0 right-0 h-[500px] bg-gradient-to-r  rounded-l-full from-[#ef326f] to-[#fe6c4e]">
              <div className="absolute z-50 right-20 top-44 animate-animate-bounce">
                <Image src={dots} alt="" width={63} height={202} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="bg-white text-black py-[120px] flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="container">
          <div className="flex flex-col items-center justify-center mb-10">
            <p className="text-lg font-[900] text-[#f0356e] text-center">
              Solutions for all your needs
            </p>
            <p className="text-[50px] font-[800] text-center w-[900px] leading-0">
              The best application features you won&#39;t find anywhere
            </p>
          </div>
          <div className="flex mx-auto justify-center gap-8 w-full">
            <div className=" space-y-10">
              <SolutionCard
                title={solutionData[0].title}
                description={solutionData[0].description}
                img={solutionData[0].img}
              />
              <SolutionCard
                title={solutionData[3].title}
                description={solutionData[3].description}
                img={solutionData[3].img}
              />
            </div>
            <div className=" flex items-end py-8">
              <SolutionCard
                title={solutionData[2].title}
                description={solutionData[2].description}
                img={solutionData[2].img}
              />
            </div>
            <div className=" space-y-10">
              <SolutionCard
                title={solutionData[1].title}
                description={solutionData[1].description}
                img={solutionData[1].img}
              />
              <SolutionCard
                title={solutionData[4].title}
                description={solutionData[4].description}
                img={solutionData[4].img}
              />
            </div>
          </div>
        </div>
      </div>

      <Partners />
      <Footer />
    </section>
  );
};

export default AboutUs;
