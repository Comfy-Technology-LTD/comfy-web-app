import React, { useState } from "react";
import { video } from "../constants";
import Image from "next/image";

type VideoSectionProps = {
  videoUrl: string;
  thumbnailUrl: string;
  altText: string;
};

const ProductVideo: React.FC<VideoSectionProps> = ({
  videoUrl,
  thumbnailUrl,
  altText,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="flex justify-center items-center w-full md:h-screen py-20 md:px-6">
      <div className=" absolute z-50 rounded-3xl py-8 md:h-[650px] h-[250px] bg-red-200 md:w-[1200px] w-[350px]"></div>
      <img
        src={video}
        alt="product video"
        className="rounded-[30px] md:w-[1296px] md:h-[600px] w-[360px] h-[230px] z-50"
      />
      <div className=" z-50 absolute w-20 h-20 flex items-center shadow-md justify-content-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400">
        <button className="flex items-center justify-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductVideo;
