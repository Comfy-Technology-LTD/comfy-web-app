import React from "react";
import { TeamMember } from "@/interfaces";
import { colephoto,  comfyLogo, prince, kwaw, emma} from "@/constants";
import Image from "next/image";

const teamMembers: TeamMember[] = [
  {
    name: "Cole Baidoo",
    contact: "+1234567890",
    email: "john.doe@example.com",
    position: "CTO/Co-Partner",
    picture: colephoto,
  },
  {
    name: "Prince Asamoah",
    contact: "+1234567891",
    email: "jane.smith@example.com",
    position: "Backend Developer",
    picture: prince,
  },
  {
    name: "Emmanuel Baidoo",
    contact: "+1234567892",
    email: "michael.johnson@example.com",
    position: "Frontend Developer",
    picture: emma,
  },
  {
    name: "Francis Baidoo",
    contact: "+1234567893",
    email: "emily.davis@example.com",
    position: "Tech Asst.",
    picture: kwaw,
  },
];

const Team: React.FC = () => {
  return (
    <section className="md:py-24 bg-white text-black">
      <div className="container mx-auto md:px-24">
        <div className="flex items-center justify-center mb-5">
        <Image src={comfyLogo} alt="" width={100} height={83}/>
        </div>
        <h2 className="text-xl font-[900] text-[#F0346E] text-center mb-8 uppercase">team behind everything we do</h2>
        <h2 className="text-7xl font-[900] text-center mb-8">Meet Our Experts Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-8 relative">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className=" flex flex-col items-start md:text-center md:p-6 ps-3 relative z-50"
            >
              <Image
                src={member.picture}
                alt={member.name}
                width={256}
                height={256}
                className="w-64 h-64 rounded-[30px] md:mx-auto mb-4 object-cover "
              />
              <div className="w-full flex flex-col items-start md:ms-5 relative">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className=" text-[#F0366F] mb-2">{member.position}</p>
                {/* <p className=" text-gray-700 mb-2">{member.contact}</p> */}
                <p className="text-center text-gray-700 ">{}</p>
                <div className="border-4 hover:bg-[#F0366F] transition-all duration-500 ease-in-out group p-2 rounded-full cursor-pointer border-[#F0366F] absolute -bottom-20 bg-white left-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 group-hover:text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-[320px] shadow-sm  hidden md:block h-52 bg-gray-50 rounded-[200px] absolute top-[210px] -z-10  -left-1"></div>
            </div>
          ))}
          {/* <div className=" hidden w-[350px] h-52 bg-gray-100 rounded-full absolute top-[210px]  -left-5"></div>  */}
        </div>
      </div>
    </section>
  );
};

export default Team;
