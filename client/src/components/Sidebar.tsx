"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import clsx from "clsx";
import useSidebarToggle from "@/hooks/use-sidebar-toogle";

const Sidebar = () => {
  const { isSidebarCollapsed, toggleSidebar } = useSidebarToggle();

  const sidebarCondition = clsx(
    "fixed flex flex-col bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40",
    {
      "w-0 md:w-16": isSidebarCollapsed,
      "w-72 md:w-64": !isSidebarCollapsed,
    }
  );

  return (
    <div className={sidebarCondition}>
      {/* Top Logo */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">LogistiQ</h1>
        <Button
          className=" px-3 py-3 bg-gray-700 rounded-full hover:bg-blue-500 z-50"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </Button>
      </div>

      {/* Links */}
      <div className="flex-grow mt-8">{/* Links here*/}</div>

      {/* Footer */}
      <div>
        <p className="text-center text-xs text-gray-500">
          &copy; 2024 Gupron
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
