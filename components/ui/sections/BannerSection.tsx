import Image from "next/image";
import React from "react";

const BannerSection = () => {
  return (
    <div className="mt-[100px]">
      <h1 className="text-[40px]   w-[80%] font-extrabold">
        Discover the latest trends and untold stories.
        <span className="font-semibold text-gray-800">
          Stay ahead with insights that matter.
        </span>
      </h1>
      <div className="relative mt-5">
        <Image
          alt="logo"
          src="/banner-image-1.jpg"
          width={500}
          height={500}
          className="w-full h-[450px] rounded-[10px] object-cover"
        />
        <div
          className="absolute flex justify-center items-center inset-0 rounded-[10px] bg-gradient-to-t from-black/60 to-transparent"
          style={{ zIndex: 1 }}
        >
          {/* <h1 className="text-[45px]  font-semibold">
            one post, <span className="text-black ">Endless Insights</span>
          </h1> */}
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
