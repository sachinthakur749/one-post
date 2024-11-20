import Image from "next/image";
import React from "react";

const BannerSection = () => {
  return (
    <div className="mt-5">
      <h1 className="text-[35px] font-semibold ">
        one post, <span className="text-gray-500">Endless Insights</span>{" "}
      </h1>
      <div>
        <Image
          alt="logo"
          src="/banner-image.jpg"
          width={500}
          height={500}
          className="w-full h-[450px] rounded-[10px] object-cover "
        />
      </div>
    </div>
  );
};

export default BannerSection;
