"use client";

import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="px-4 md:px-8 md:max-w-[1376px] m-auto box-content py-4 lg:py-8 xl:flex xl:gap-x-8 2xl:gap-x-14">
      <div className="px-4 md:px-8 md:max-w-[2000px] m-auto box-content py-6 md:py-2 lg:py-4">
        <div
          className="flex flex-col lg:flex-row gap-4 lg:gap-12 rounded-3xl p-4 lg:p-8 mt-0 relative items-center lg:mt-2 bg-zinc-100 lg:min-h-[270px] md:min-h-[460px] sm:min-h-[420px] min-h-[530px] md:pt-6"
          data-testid="quote-carousel"
        >
          <Image
            priority
            width={200}
            height={200}
            src="/jannerymichelle.webp"
            alt="jannerymichelle"
            className="w-full lg:w-60 lg:h-60 rounded-full max-w-[200px] lg:max-w-none place-self-center scale-110"
          />
          <div
            className="flex flex-col text-center break-words
              lg:text-left text-slate-800 items-center lg:items-start mt-5"
          >
            <div className="font-medium italic text-[16px]/[130%] md:text-2xl my-">
              "Alignable's been amazing! It's all about real connections, and
              it's seriously boosted my Growth Agency. I've grown my client
              base, met incredible people, and truly believe Alignable is the
              "Sleeping Giant" every business needs. So thankful for the
              growth!"
            </div>
            <div className="font-semibold mb-6 mt-3">
              — Jannery Michelle, StrongFoundation Marketing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
