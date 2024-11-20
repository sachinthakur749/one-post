import Image from "next/image";
import React from "react";

interface BlogCardProps {
  title: string;
  body: string;
  imageUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, body, imageUrl }) => {
  return (
    <>
      <div className="w-[300px] group relative rounded-md overflow-hidden h-[400px] bg-slate-400">
        <Image
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:cursor-pointer"
          alt={title}
          width={300}
          height={400}
          src={imageUrl || "/demo-img.avif"} // Fallback to a demo image if no image URL is provided
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20 group-hover:cursor-pointer"></div>
        <div className="absolute bottom-0 left-0 right-0">
          <p className="text-white break-words w-[80%] mx-auto mb-6">{title}</p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
