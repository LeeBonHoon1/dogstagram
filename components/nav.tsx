"use client";

import { usePathname, useRouter } from "next/navigation";
import { AlignJustify, ChevronLeft } from "lucide-react";

const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isRoot = pathname === "/";
  return (
    <div className="h-16 px-5 flex items-center justify-between">
      {isRoot ? (
        <AlignJustify className="w-6 h-6" />
      ) : (
        <ChevronLeft className="w-6 h-6" onClick={() => router.back()} />
      )}
    </div>
  );
};

export default Nav;
