"use client";

import { UserButton } from "@clerk/nextjs";
import HeaderList from "./header-list";

import { AlignJustify } from "lucide-react";
const Nav = () => {
  return (
    <div className="h-20 px-5 flex items-center justify-between">
      <AlignJustify className="w-6 h-6" />
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Nav;
