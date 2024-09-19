"use client";

import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Sidebar = () => {
  return (
    <div>
      {/* Top Logo */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">LogistiQ</h1>
        <Button
          className="md:hidden px-3 py-3 bg-gray-700 rounded-full hover:bg-blue-500"
          onClick={() => {}}
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
