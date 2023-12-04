"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import useGetDogProfile from "@/hooks/useGetDogProfile";
import ProfileCategory from "@/components/profile-category";

const DogDetailPage = () => {
  const param = useParams();
  const { dogId } = param || {};

  const { data, error, isFetching, isLoading } = useGetDogProfile(
    Number(dogId)
  );

  if (error) return null;
  if (isFetching || isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="h-[300px] w-full relative">
        <Image
          src={`/images/pet5.jpg`}
          layout="fill"
          alt="dog-image"
          objectFit="cover"
        />
      </div>
      <div className="h-full px-5 pt-5">
        <div className="font-bold text-[24px]">Boston Terrier</div>
        <div className="text-slate-400 text-sm pt-2">Dog Description</div>
        <div className="flex flex-col space-y-5 pt-5">
          <ProfileCategory data={data} />
        </div>
      </div>
    </div>
  );
};

export default DogDetailPage;
