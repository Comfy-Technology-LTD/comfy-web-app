import React from "react";
import visal from "@/public/assets/images/png/visal.webp";
import { kek, firmus, irisk, deli } from "../constants";
import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <section className="py-10 bg-white flex items-center w-full justify-center overflow-scroll">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h5 className="text-xl font-semibold text-gray-700">
            BUSINESS WE HAVE TRANSFORMED
          </h5>
        </div>

        <div className="grid md:grid-cols-4  grid-flow-col w-full space-x-6  items-center justify-center sm:grid-cols-2 overflow-scroll">
          <div className="md:w-[234px] w-[366px] md:h-[123px] rounded-full px-5 py-[30px] place-content-center border border-dashed flex items-center hover:border-red-500">
            <Image
              src={kek}
              alt="KEK-logo"
              width={100}
              height={48}
              className="h-12 md:h-16 object-contain"
            />
          </div>

          <div className="md:w-[234px] w-[366px]  h-[123px] rounded-full px-5 py-[30px] place-content-center border border-dashed flex items-center hover:border-red-500">
            <Image
              src={firmus}
              alt="firmus-logo"
              width={100}
              height={48}
              className="h-12 md:h-16 object-contain"
            />
          </div>

          <div className="md:w-[234px] w-[366px] h-[123px] rounded-full px-5 py-[30px] place-content-center border border-dashed flex items-center hover:border-red-500">
            <Image
              src={irisk}
              alt="irisk-logo"
              width={100}
              height={48}
              className="h-12 md:h-16 object-contain"
            />
          </div>

          <div className="md:w-[234px] w-[366px] h-[123px] rounded-full px-5 py-[30px] place-content-center border border-dashed flex items-center hover:border-red-500">
            <Image
              src={visal}
              alt="visal-logo"
              width={100}
              height={48}
              className="h-12 md:h-16 object-contain"
            />
          </div>

          <div className="md:w-[234px] w-[366px] h-[123px] rounded-full px-5 py-[30px] place-content-center border border-dashed flex items-center hover:border-red-500">
            <Image
              src={deli}
              alt="deli-logo"
              width={100}
              height={48}
              className="h-12 md:h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
