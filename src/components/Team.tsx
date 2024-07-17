"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  phone: string;
}

export const Team = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const getRandomUser = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=6");
        const data = await response.json();
        setTeamMembers(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomUser();
  }, []);

  return (
    <div className="flex flex-col gap-y-8 md:gap-y-10 py-10 mb-12">
      <h2 className="mt-11 md:mt-14 text-2xl md:text-3xl xl:mb-4 font-semibold text-[#055A8C]">
        Meet the Team
      </h2>
      <div className="grid grid-cols-2 gap-8 xl:grid-cols-6">
        <div className="flex flex-col gap-y-2 items-center text-center justify-between">
          <Image
            priority
            className="max-w-[130px] md:max-w-[175px] rounded-full shadow-lg shadow-slate-700 mb-4 object-cover"
            width={200}
            height={200}
            src={teamMembers?.[0]?.picture.large}
            alt="Teams"
          />
          <span className="text-lg font-medium text-slate-800">
            {teamMembers?.[0]?.name.first} {teamMembers?.[0]?.name.last}
          </span>
          <span className="text-md font-medium text-slate-400">
            {teamMembers?.[0]?.phone}
          </span>
        </div>
        <div className="flex flex-col gap-y-2 items-center text-center justify-between">
          <Image
            priority
            className="max-w-[130px] md:max-w-[175px] rounded-full shadow-lg shadow-slate-700 mb-4 object-cover"
            width={200}
            height={200}
            src={teamMembers?.[1]?.picture.large}
            alt="Teams"
          />
          <span className="text-lg font-medium text-slate-800">
            {teamMembers?.[1]?.name.first} {teamMembers?.[1]?.name.last}
          </span>
          <span className="text-md font-medium text-slate-400">
            {teamMembers?.[1]?.phone}
          </span>
        </div>
        <div className="flex flex-col gap-y-2 items-center text-center justify-between">
          <Image
            priority
            className="max-w-[130px] md:max-w-[175px] rounded-full shadow-lg shadow-slate-700 mb-4 object-cover"
            width={200}
            height={200}
            src={teamMembers?.[2]?.picture.large}
            alt="Teams"
          />
          <span className="text-lg font-medium text-slate-800">
            {teamMembers?.[2]?.name.first} {teamMembers?.[2]?.name.last}
          </span>
          <span className="text-md font-medium text-slate-400">
            {teamMembers?.[2]?.phone}
          </span>
        </div>
        <div className="flex flex-col gap-y-2 items-center text-center justify-between">
          <Image
            priority
            className="max-w-[130px] md:max-w-[175px] rounded-full shadow-lg shadow-slate-700 mb-4 object-cover"
            width={200}
            height={200}
            src={teamMembers?.[3]?.picture.large}
            alt="Teams"
          />
          <span className="text-lg font-medium text-slate-800">
            {teamMembers?.[3]?.name.first} {teamMembers?.[3]?.name.last}
          </span>
          <span className="text-md font-medium text-slate-400">
            {teamMembers?.[3]?.phone}
          </span>
        </div>
        <div className="flex flex-col gap-y-2 items-center text-center justify-between">
          <Image
            priority
            className="max-w-[130px] md:max-w-[175px] rounded-full shadow-lg shadow-slate-700 mb-4 object-cover"
            width={200}
            height={200}
            src={teamMembers?.[4]?.picture.large}
            alt="Teams"
          />
          <span className="text-lg font-medium text-slate-800">
            {teamMembers?.[4]?.name.first} {teamMembers?.[4]?.name.last}
          </span>
          <span className="text-md font-medium text-slate-400">
            {teamMembers?.[4]?.phone}
          </span>
        </div>
        <div className="flex flex-col gap-y-2 items-center text-center justify-between">
          <Image
            priority
            className="max-w-[130px] md:max-w-[175px] rounded-full shadow-lg shadow-slate-700 mb-4 object-cover"
            width={200}
            height={200}
            src={teamMembers?.[5]?.picture.large}
            alt="Teams"
          />
          <span className="text-lg font-medium text-slate-800">
            {teamMembers?.[5]?.name.first} {teamMembers?.[5]?.name.last}
          </span>
          <span className="text-md font-medium text-slate-400">
            {teamMembers?.[5]?.phone}
          </span>
        </div>
      </div>
    </div>
  );
};
