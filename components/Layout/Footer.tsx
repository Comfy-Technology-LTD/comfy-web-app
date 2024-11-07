import React from "react";
import {
  footerbackground,
  comfyLogo,
  kek,
  irisk,
  visal,
} from "../../constants";
import {
  faFacebookF,
  faTwitter,
  faGithub,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-gray-100 text-black pt-[120px] md:px-32 flex  justify-center"
      style={{ backgroundImage: `url(${footerbackground})` }}
    >
      <section className=" container flex flex-col">
        <div className="container mx-auto flex gap-8 text-sm items-center justify-between mb-20">
          <div className="w-[430px]">
            <div>
              <Image src={comfyLogo} alt="" width={100} height={50} />
            </div>
            <p className="text-white mt-5 text-lg">
              The best solution for your IT startup business. We offer top-notch
              services with a focus on excellence. Elevate your business with a
              trusted partner.
            </p>
            <div className="flex gap-3 mt-3">
              <div className="w-[60px] h-[50px] flex items-center justify-center rounded-lg bg-white">
                <Image src={visal} alt="" width={50} height={20} />
              </div>
              <div className="w-[60px] h-[50px] flex items-center justify-center rounded-lg bg-white">
                <Image src={irisk} alt="" width={50} height={20} />
              </div>
              <div className="w-[80px] h-[50px] flex items-center justify-center rounded-lg bg-white">
                <Image src={kek} alt="" width={70} height={20} />
              </div>
            </div>
          </div>
          <div className="ps-3">
            <h3 className="text-white text-[28px] underline-offset-8 font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-[60px] after:h-[3px] after:bg-[#fb6057]">
              Useful Links
            </h3>

            <ul className="space-y-2 mt-5">
              <li>
                <Link href="" className="text-white text-lg font-semibold hover:text-[#F34566]">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="" className="text-white text-lg font-semibold hover:text-[#F34566]">
                  About us
                </Link>
              </li>
              <li>
                <Link href="" className="text-white text-lg font-semibold hover:text-[#F34566]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="" className="text-white text-lg font-semibold hover:text-[#F34566]">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="p-3 gap-4">
            <h3 className="text-white text-[28px] font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-[60px] after:h-[3px] after:bg-[#fb6057]">
              Subscribe Newsletter
            </h3>
            <p className="text-white mb-4 mt-5">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>

            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-4 w-full border border-gray-300 rounded-full focus:outline-none"
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-orange-400 text-white text-lg font-bold px- py-4 rounded-full  w-[173px] h-[60px] "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t mt-8 pt-4 text-white text-sm flex flex-col md:flex-row justify-between items-left gap-4 container mx-auto">
          <p className="text-left text-lg ps-3 md:text-left">
           Copyright &copy; <span className="text-lg font-bold">Comfy Technology</span> 2024.  All Rights Reserved.
          </p>

          <div className="flex ps-3 md:justify-end space-x-4">
            <Link
              href="#"
              className="text-white hover:text-gray-900  bg-gray-900 hover:bg-white border flex justify-center items-center w-10 h-10 rounded-full"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-900  bg-gray-900 hover:bg-white border flex justify-center items-center w-10 h-10 rounded-full"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-900  bg-gray-900 hover:bg-white border flex justify-center items-center w-10 h-10 rounded-full"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-900 bg-gray-900 hover:bg-white border flex justify-center items-center w-10 h-10 rounded-full"
            >
              <FontAwesomeIcon icon={faDribbble} />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
