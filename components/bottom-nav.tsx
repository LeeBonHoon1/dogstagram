"use client";

import { Home, Heart, Plus, MessageCircle, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

const bottomNavList = [
  {
    id: 1,
    icon: Home,
    href: "/",
    active: false,
  },
  {
    id: 2,
    icon: Heart,
    href: "/heart",
    active: false,
  },
  {
    id: 3,
    icon: Plus,
    href: "/plus",
    active: false,
  },
  {
    id: 4,
    icon: MessageCircle,
    href: "/message",
    active: false,
  },
  {
    id: 5,
    icon: UserRound,
    href: "/user",
    active: false,
  },
];

const BottomNav = () => {
  return (
    <div className="absolute bottom-0 bg-transparent border-2 h-20 w-full rounded-t-[40px] shadow-2xl">
      <div className="flex h-full items-center justify-evenly">
        {bottomNavList.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className={cn()}>
              <IconComponent
                className={cn(
                  "w-6 h-6 text-white shadow-md rounded-full",
                  item.href === "/plus" ? "w-10 h-10 text-rose-500" : ""
                )}
                onClick={() => {
                  console.log(item.id);
                }}
                fill="#F43F5E"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
