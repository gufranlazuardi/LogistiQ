"use client";

import React from "react";
import { Button } from "./ui/button";
import { Bell, Menu, Search, Settings, Sun } from "lucide-react";
import { Input } from "./ui/input";
import Link from "next/link";
import useSidebarToggle from "@/hooks/use-sidebar-toogle";

const Navbar = () => {
  const { toggleSidebar } = useSidebarToggle();
  return (
    <>
      <div className="flex justify-between items-center w-full mb-7">
        {/* left side */}
        <div className="flex justify-between items-center gap-5">
          <Button
            className=""
            onClick={toggleSidebar}
            variant={"outline"}
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>
        <div className="relative">
          <Input
            type="search"
            placeholder="Search your groups and products"
            className="w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />
          <Search
            className="absolute right-0 top-0 mt-2 mr-4"
            size={18}
            color="grey"
          />
        </div>

        {/* right side */}
        <div className="flex justify-between items-center gap-5">
          <div className="hidden md:flex justify-between items-center gap-5">
            <div>
              <Sun className="cursor-pointer" onClick={() => {}} />
            </div>
            <div className="relative">
              <Bell
                className="cursor-pointer text-gray-500"
                size={24}
              />
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
                3
              </span>
            </div>
            <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-9 h-9">image</div>
              <span className="font-semibold ">gupron</span>
            </div>
          </div>
          <Link href="/settings">
            <Settings
              className="cursor-pointer text-gray-500"
              size={24}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
