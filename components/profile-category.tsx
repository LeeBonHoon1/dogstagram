"use client";

import { cn } from "@/lib/utils";

interface ProfileCategoryProps {
  data: {
    age: string;
    color: string;
    gender: string;
    name: string;
    weight: string;
  };
}

const ProfileCategory = ({ data }: ProfileCategoryProps) => {
  return (
    <div className="flex gap-5 carousel">
      {Object.entries(data).map(([key, value], idx) => {
        return (
          <div
            key={idx}
            className={cn(
              "border bg-slate-100 carousel-item rounded-3xl hover:bg-[#F43F5E] hover:text-white"
            )}
          >
            <div className="flex flex-col items-center p-5">
              <div className="flex flex-col items-center space-y-1">
                <span className="font-bold">{key}</span>
                <span className="text-sm">{value}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileCategory;
