import { Timeimage, advisory, consultant, continuous, agile, datasecurity, working } from "../constants";
import Image from "next/image";
const Services: React.FC = () => {
  return (
    <section className="py-12 md:px-32 px-6 flex justify-center ">
      <div className="container">
        <div className="flex flex-col gap-6 mb-8 px-6">
          <p className="text-pink-600 font-semibold uppercase tracking-wide">
            Solutions for All Your Needs
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">Why Comfy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-4 ">
          <div className="p-6 bg-white rounded-[40px] shadow-lg hover:shadow-red-600 border relative md:w-96 h-[500px]">
            <div className="text-pink-600 text-6xl mb-4 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-400 w-[100px] h-[100px]">
              <Image src={Timeimage} alt="" width={60} height={100} className="text-white" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              24/7 Hours Fast Support
            </h3>

            <p className="text-gray-600 mb-4">
              Our dedicated customer service team together with our team of
              skilled developers remain at the disposal of our product owners
              during and after each product development.
            </p>

            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>point</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-[40px] shadow-lg hover:shadow-red-600 border relative md:w-96 h-[500px]">
            <div className="text-pink-600 text-6xl mb-4  rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-400 w-[100px] h-[100px]">
              <Image src={datasecurity} alt="" width={60} height={100} />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Start to End Security
            </h3>

            <p className="text-gray-600 mb-4">
              At Comfy, security is our topmost priority. All our project data and
              third party data are fully protected with start to end encryption
              security.
            </p>

            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>point</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-[40px] shadow-lg hover:shadow-red-600 border relative md:w-96 h-[500px]">
            <div className="text-pink-600 text-6xl mb-4  rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-400 w-[100px] h-[100px]"><Image src={advisory} alt="" width={60} height={100} /></div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              IT Consulting
            </h3>

            <p className="text-gray-600 mb-4">
              We offer consulting services in all information technology related
              areas. Our team of experts constantly assess the IT space to
              identify new and improved technology that are adaptable to the ever
              changing business environment.
            </p>

            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>point</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-[40px] shadow-lg hover:shadow-red-600 border relative md:w-96 h-[500px]">
            <div className="text-pink-600 text-6xl mb-4  rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-400 w-[100px] h-[100px]"><Image src={working} alt="" width={60} height={100} /></div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Virtual Workstation
            </h3>

            <p className="text-gray-600 mb-4">
              We provide state of the art, high speed, cloud based workstations
              that can allow your employees access from anywhere in the world via
              the internet the required tools and information needed for execution
              of a particular task.
            </p>

            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>point</li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
