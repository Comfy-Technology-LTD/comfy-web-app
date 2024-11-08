import {
  securityIcon,
  working,
  clock,
  call,
} from "@/constants";
import Image from "next/image";

const Services: React.FC = () => {

  return (
    <section  id="services" className="py-12 md:px-32 px-6 flex justify-center ">
      <div className="container">
        <div className="flex flex-col gap-6 mb-8 px-6">
          <p className="text-pink-600 font-semibold uppercase tracking-wide">
            Solutions for all your needs
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Creating World Class Digital Solutions
          </h2>
        </div>

        <div className="flex gap-8">
          <div className="p-6 group cursor-pointer hover:bg-blue-900 transition-all duration-500 ease-linear  bg-white rounded-[40px] shadow-lg hover:shadow-xl hover:shadow-red-600  relative md:w-96 h-[500px]">
            <div className="text-pink-600 text-6xl mb-4 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-400 w-[100px] h-[100px]">
              <Image
                src={clock}
                alt=""
                width={60}
                height={100}
                className="text-white"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-white">
              24/7 Hours Fast Support
            </h3>

            <p className="text-gray-600 mb-4 group-hover:text-white">
              Our dedicated customer service team together with our team of
              skilled developers remain at the disposal of our product owners
              during and after each product development.
            </p>

            <ul className=" text-gray-800 space-y-2 group-hover:text-white">
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
                Immediate Assistance
              </li>
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
                Expert Developers on Hand
              </li>
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
                Support After Development
              </li>
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
                Clear Communication Channels
              </li>
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
                Focus on Customer Satisfaction
              </li>
            </ul>
          </div>

          <div className="p-6 group cursor-pointer hover:bg-blue-900 transition-all duration-500 ease-linear  bg-white rounded-[40px] shadow-lg hover:shadow-xl hover:shadow-red-600  relative md:w-96 h-[500px]">
            <div className="text-pink-600 text-6xl mb-4  rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-400 w-[100px] h-[100px]">
              <Image src={securityIcon} alt="" width={100} height={100} />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-white">
              Start to End Security
            </h3>

            <p className="text-gray-600 mb-4 group-hover:text-white">
              At Comfy, security is our topmost priority. All our project data
              and third party data are fully protected with start to end
              encryption security.
            </p>

            <ul className="list-disc list-inside text-gray-800 space-y-2 group-hover:text-white">
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
                Data Protection
              </li>
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
                Continuous Monitoring
              </li>
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
                Regular Updates
              </li>
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
                Secure Access Controls
              </li>
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
                Transparent Communication
              </li>
            </ul>
          </div>

          <div className="p-6 group cursor-pointer hover:bg-blue-900 transition-all duration-500 ease-linear  bg-white rounded-[40px] shadow-lg hover:shadow-xl hover:shadow-red-600  relative md:w-96 h-[500px]">
            <div className="text-pink-600 text-6xl mb-4  rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-400 w-[100px] h-[100px]">
              <Image src={call} alt="" width={60} height={100} />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-white">
              IT Consulting
            </h3>

            <p className="text-gray-600 mb-4 group-hover:text-white">
              We offer IT guidance and support, using the latest advancements to
              meet the evolving needs of businesses.
            </p>

            <ul className="list-disc list-inside text-gray-800 space-y-2 group-hover:text-white">
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
                Expert Advice
              </li>
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
                Customized Solutions
              </li>
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
                Adaptability to Business Changes
              </li>
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
                Cost Efficiency
              </li>
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
                Security & Risk Management
              </li>
            </ul>
          </div>

          <div className="p-6 group cursor-pointer hover:bg-blue-900 transition-all duration-500 ease-linear  bg-white rounded-[40px] shadow-lg hover:shadow-xl hover:shadow-red-600  relative md:w-96 h-[500px]">
            <div className="text-pink-600 text-6xl mb-4  rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-400 w-[100px] h-[100px]">
              <Image src={working} alt="" width={60} height={100} />
            </div>

            <h3 className="text-xl group-hover:text-white font-semibold text-gray-900 mb-2">
              Virtual Workstation
            </h3>

            <p className="text-gray-600 mb-4 group-hover:text-white">
              We provide high-speed, cloud workstations, enabling global
              employee access to tools and info online.
            </p>

            <ul className="list-disc list-inside text-gray-800 space-y-4 group-hover:text-white">
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
                Global Access
              </li>
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
                High-Speed Performance
              </li>
              <li className="font-[900] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
                Up-to-Date Software
              </li>
              <li className=" font-[900] flex flex-col gap-2">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>{" "}
                  Enhanced Security
                </div>
                {/* <div className="w-0 group-hover:w-48 transition-all duration-500 ease-in ml-2 -mt-2 h-1 bg-gradient-to-r from-[#ef326f] to-[#fe6c4e]"></div> */}
              </li>
              <li  className="cursor-pointer font-[900] flex flex-col gap-2">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  Scalable Solutions
                </div>
                {/* <div className="w-0 group-hover:w-48 transition-all duration-500 ease-in ml-2 -mt-2 h-1 bg-gradient-to-r from-[#ef326f] to-[#fe6c4e]"></div> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
