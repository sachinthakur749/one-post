import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";

const InfoBar = () => {
  return (
    <div className="py-5">
      <div className="flex flex-col gap-2 justify-center items-center max-w-[400px] m-auto ">
        <h1 className="text-[25px] font-bold">Latest Tech Blogs</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>
          collection by <span className="font-medium">Sachin Thakur</span>
        </p>
        <Button className="rounded-full">View Profile</Button>
      </div>
    </div>
  );
};

export default InfoBar;
