import Image from "next/image";
import React from "react";
import { Badge } from "./badge";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const ShortBlogCard = ({ title, body, imageUrl, authorName }: any) => {
  return (
    <>
      <div className=" space-y-3 h-[500px] ">
        <Image
          src={imageUrl}
          alt="sds"
          width={200}
          height={300}
          className="w-full h-[40%] object-cover  "
        />

        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <Avatar className="h-8 w-8 aspect-square">
              <AvatarImage
                sizes="medium"
                src={imageUrl}
                className="h-full w-full object-cover"
              />
              <AvatarFallback className="h-full w-full text-lg">
                {authorName}
              </AvatarFallback>
            </Avatar>
            <p className="text-[15px]">{authorName}</p>
          </div>
          <h2 className="font-bold">{title}</h2>

          <div
            dangerouslySetInnerHTML={{ __html: body }}
            className="line-clamp-2 text-[14px] text-justify"
          />
        </div>
        <div className="flex justify-between items-center">
          <Badge variant="secondary">Nov 12,2025</Badge>
        </div>
      </div>
    </>
  );
};

export default ShortBlogCard;
