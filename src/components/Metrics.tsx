import React from "react";
import { MetricItem } from "../interfaces";
import Image from "next/image";
import { colephoto } from "../constants";

interface MetricsProps {
  metrics: MetricItem[];
}

const Metrics: React.FC<MetricsProps> = ({ metrics }) => {
  return (
    <section className="container h-full md:mx-auto md:px-20 py-12">
      <div className="grid md:grid-cols-2 md:gap-60 px-6 items-center">
        <div className="">
          <h2 className="text-3xl md:text-4xl mb-6 font-bold text-pink-600 mt-4">
            Valuable Metrics
          </h2>
          <p className="mb-6 text-2xl font-semibold text-black">
            Obtain useful data that will aid in the expansion of your company.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-xl text-justify">
                Our digital record keeping functionality embedded in the
                software creates digital files for all your relevant
                stakeholders(insurers & reinsurers) and stores all business
                information, offer, brokerage, security panel and payment
                information amongst others. This data can be accessed from the
                dashboard easily without difficulty hence granting you instant
                access to information.
              </span>
            </li>
            <span className="bg-pink-600 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3">
              ●
            </span>
          </ul>

          <div className="flex items-center mt-8">
            <span className="w-24 h-24 rounded-full mr-4 border border-red-500  flex justify-center items-center">
              <Image
                src={colephoto}
                alt={"colephoto"}
                width={96}
                height={96}
                className="w-auto h-24 p-2 rounded-full"
              />
            </span>
            <div>
              <h3 className="font-extrabold">Cole Baidoo</h3>
              <p className=" font-medium">CTO & Co-Founder</p>
            </div>
          </div>
        </div>

        <div className="md:grid flex flex-col md:grid-cols-2 gap-6 items-center mt-10">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-[30px] bg-gray-100 rounded-[40px] shadow-md flex flex-col items-center md:w-60 w-[350px]"
            >
              <div className="text-4xl mb-2 fill-red-800">{metric.icon}</div>
              <p className="text-5xl font-bold mt-2 p-0 text-gray-900">
                {metric.value}
                {index !== metrics.length - 1 && (
                  <span className="text-2xl">+</span>
                )}
              </p>
              <p className=" text-lg text-center mt-2">{metric.description} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
