"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface PetCardProps {
  id: number;
  name: string;
  src: string;
  weight: string;
  gender: string;
}

const PetCard = ({ id, name, src, weight, gender }: PetCardProps) => {
  const router = useRouter();
  return (
    <div
      className="flex border rounded-3xl"
      onClick={() => router.push(`/profile/${id}`)}
    >
      <Image
        src={`/images${src}`}
        width={120}
        height={120}
        alt="dog"
        className="rounded-3xl"
      />
      <div className="flex flex-col ml-5 pt-4 space-y-2">
        <div>{name}</div>
        <div>{weight}</div>
        <div>{gender}</div>
      </div>
    </div>
  );
};

export default PetCard;
