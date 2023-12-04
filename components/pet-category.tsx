"use client";

import { cn } from "@/lib/utils";
import { Dog, Cat, Bird, Rabbit } from "lucide-react";

const PetCategory = () => {
  const petCategoryList = [
    {
      id: 1,
      icon: Dog,
      href: "/dog",
      active: false,
      name: "Dog",
    },
    {
      id: 2,
      icon: Cat,
      href: "/cat",
      active: false,
      name: "Cat",
    },
    {
      id: 3,
      icon: Bird,
      href: "/bird",
      active: false,
      name: "Bird",
    },
    {
      id: 4,
      icon: Rabbit,
      href: "/rabbit",
      active: false,
      name: "Rabbit",
    },
  ];
  return (
    <div className="flex gap-5 carousel">
      {petCategoryList.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.id}
            className={cn(
              "border bg-slate-100 carousel-item rounded-3xl hover:bg-[#F43F5E] hover:text-white"
            )}
          >
            <div className="flex flex-col items-center p-5">
              <IconComponent className="w-10 h-10" />
              <div>{item.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PetCategory;
