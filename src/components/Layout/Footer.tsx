import React from "react";
import { footerbackground } from "../../constants";
import {
  faFacebookF,
  faTwitter,
  faGithub,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-gray-100 py-10 md:px-32"
      style={{ backgroundImage: `url(${footerbackground})` }}
    >
      <section className=" container">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div className="ps-3">
          <h3 className="text-white font-semibold mb-4">SOLUTIONS</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white hover:text-green-500">
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-green-500">
                Analytics
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-green-500">
                Commerce
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-green-500">
                Insights
              </a>
            </li>
          </ul>
        </div>

        <div className="ps-3">
          <h3 className="text-white font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white hover:text-green-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-green-500">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-green-500">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-green-500">
                Press
              </a>
            </li>
          </ul>
        </div>

        <div className="ps-3">
          <h3 className="text-white font-semibold mb-4">LEGAL</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white hover:text-green-500">
                Claim
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-green-500">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-green-500">
                Terms
              </a>
            </li>
          </ul>
        </div>

        <div className="p-3 gap-4">
          <h3 className="text-white font-semibold mb-4">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>
          <p className="text-white mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <form className="flex flex-col space-y-2">
           
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-4 w-full border border-gray-300 rounded-full focus:outline-none"
            />

           
            <button
              type="submit"
              className="bg-green-600 text-white px- py-4 rounded-full hover:bg-green-700 w-40 "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t mt-8 pt-4 text-white text-sm flex flex-col md:flex-row justify-between items-left gap-4 container mx-auto">
        <p className="text-left ps-3 md:text-left">
          &copy; 2024 Comfy Technology. All rights reserved.
        </p>

        <div className="flex ps-3 md:justify-end space-x-4">
          <a
            href="#"
            className="text-white hover:text-gray-900  bg-gray-900 hover:bg-white border flex justify-center items-center w-10 h-10 rounded-full"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-900  bg-gray-900 hover:bg-white border flex justify-center items-center w-10 h-10 rounded-full"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-900  bg-gray-900 hover:bg-white border flex justify-center items-center w-10 h-10 rounded-full"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {/* <a
            href="#"
            className="text-white hover:text-gray-900 bg-gray-900 hover:bg-white border flex justify-center items-center w-10 h-10 rounded-full"
          >
            <FontAwesomeIcon icon={faDribbble} />
          </a> */}
        </div>
      </div>
      </section>

    </footer>
  );
};

export default Footer;
