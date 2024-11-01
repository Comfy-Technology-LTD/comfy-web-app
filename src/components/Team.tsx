import React from 'react';
import { TeamMember } from '../interfaces';
import { colephoto } from '../constants';

const teamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    contact: '+1234567890',
    email: 'john.doe@example.com',
    position: 'CEO',
    picture: colephoto, 
  },
  {
    name: 'Jane Smith',
    contact: '+1234567891',
    email: 'jane.smith@example.com',
    position: 'CTO',
    picture: colephoto,
  },
  {
    name: 'Michael Johnson',
    contact: '+1234567892',
    email: 'michael.johnson@example.com',
    position: 'Lead Developer',
    picture: colephoto,
  },
  {
    name: 'Emily Davis',
    contact: '+1234567893',
    email: 'emily.davis@example.com',
    position: 'UI/UX Designer',
    picture: colephoto,
  },
];

const Team: React.FC = () => {
  return (
    <section className="md:py-24 bg-white">
      <div className="container mx-auto md:px-24">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className=" flex flex-col items-start md:text-center md:p-6 ps-3 relative z-50"
            >
              <img
                src={member.picture}
                alt={member.name}
                className="w-64 h-64 rounded-[30px] md:mx-auto mb-4 object-cover "
              />
              <div className='w-full flex flex-col items-start md:ms-5'>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className=" text-gray-500 mb-2">{member.position}</p>
              <p className=" text-gray-700 mb-2">{member.contact}</p>
              <p className="text-center text-gray-700 ">{}</p>
              </div>
              <div className="w-[320px] hidden md:block h-52 bg-gray-50 rounded-[200px] absolute top-[210px] -z-10  -left-1"></div>
            </div>
          ))}
          {/* <div className=" hidden w-[350px] h-52 bg-gray-100 rounded-full absolute top-[210px]  -left-5"></div>  */}
        </div>
      </div>
    </section>
  );
};

export default Team;
