import React from "react";

const Navbar = () => {
  return (
    <div className="flex  py-2 px-1 justify-around items-center">
      <div className="w-1/3">
        <a className="font-bold text-[30px]" href="/">
          One<span className="text-primary font-extrabold">Post</span>
        </a>
      </div>
      <div className="w-3/6">
        <input
          className=" bg-[#ededed] w-full rounded-[25px] pl-[15px] py-[8px] border-[#948f8f]"
          type="search"
          placeholder="search..."
        />
      </div>
      <div className="w-1/3">
        <button className="w-full">Search</button>
      </div>
    </div>
  );
};

export default Navbar;
