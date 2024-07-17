"use client";

import Image from "next/image";
import { FC } from "react";

interface galleryabout {
  image: string;
}

export const Abouthero: FC<galleryabout> = ({ image }) => {
  return (
    <div className="w-full lg:max-w-5xl">
      <Image
        priority
        className="rounded-lg drop-shadow-xl md:rounded-xl w-full h-auto object-cover"
        width={2000}
        height={1429}
        src={`https:${image}`}
        alt="NetFusion team deeply cares for and empowers business owners to use networking to grow their business"
      />
    </div>
  );
};

export default Abouthero;
