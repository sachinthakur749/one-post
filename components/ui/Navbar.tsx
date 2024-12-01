import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import Link from "next/link";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="bg-white/85 border-b border-gray-30 sticky z-50 backdrop-blur-md top-0 py-2 ">
      <div className="flex max-w-[1200px] mx-auto px-4  py-2  justify-around items-center">
        <div className="w-1/3">
          <Link className="font-bold text-[30px]" href="/">
            <Image src="/logo-v3-p.png" width={100} height={100} alt="dsd" />
          </Link>
        </div>
        <div className="w-3/6"></div>
        <div className="w-1/3">
          <NavbarItem />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
