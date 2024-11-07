import { errorpage,footerbackground } from "@/src/constants";
import Link from "next/link";
const ErrorPage: React.FC = () => {
  return (
    <>
      <section
        className="h-screen w-full bg-no-repeat bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${footerbackground})` }}
      >
        <div className="flex flex-col items-center justify-center text-white gap-3">
          <h1 className="text-3xl font-bold">Sorry the page does not exit</h1>
          <div className="flex flex-col items-center justify-center gap-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>

            <Link href="/">
              <button
                
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md w-[200px]"
              >
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]  group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-3  w-[200px] transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white">Click to go Home</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
