import React from "react";
import visal from "@/public/assets/images/png/visal.webp";
import irisk from "@/public/assets/images/png/irisk.webp";
import kek from "@/public/assets/images/png/kek.webp";
import firmus from "@/public/assets/images/png/firmus.png";
import Image from "next/image";
import deli from "@/public/assets/images/png/deli.webp";
const Partners: React.FC = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h5 className="text-xl font-semibold text-gray-700">
            BUSINESS WE HAVE TRANSFORMED
          </h5>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center ">
          <Image
            src={kek}
            alt="KEK-logo"
            className="h-12 md:h-16 object-contain"
          />

          <Image
            src={firmus}
            alt="firmus-logo"
            className="h-12 md:h-16 object-contain"
          />

          <Image
            src={irisk}
            alt="irisk-logo"
            className="h-12 md:h-16 object-contain"
          />

          <Image
            src={visal}
            alt="visal-logo"
            className="h-12 md:h-16 object-contain"
          />

          <Image
            src={deli}
            alt="deli-logo"
            className="h-12 md:h-16 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
