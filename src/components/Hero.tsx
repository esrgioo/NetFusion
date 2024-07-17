import Image from "next/image";

const Hero = () => {
  return (
    <section className="px-4 md:px-20 md:max-w-[1920px] m-auto box-content py-24 bg-mobile-custom-gradient xl:bg-desktop-custom-gradient flex flex-col xl:flex-row gap-y-8 xl:grid xl:grid-cols-12 relative border-b border-zinc-50/30">
      <h2 className="text-zinc-100 font-medium md:font-normal text-start md:text-pretty text-3xl md:text-5xl md:leading-tight xl:col-span-7 xl:h-max xl:-mt-10">
        Discover why millions of business owners trust NetFusion as their
        networking platform.
      </h2>

      <div className="w-full h-full md:size-[400px] md:mx-auto xl:order-first xl:col-span-5 xl:-translate-x-10 object-cover">
        <Image
          priority={false}
          className="xl:scale-125"
          width={1000}
          height={1000}
          src="/home-globe.webp"
          alt="globe"
        />
      </div>
      <div className="text-white sm:ml-14 flex flex-col gap-y-6 md:flex-row md:grid md:grid-cols-2 md:grid-rows-2 md:mx-auto md:gap-14 xl:col-span-6 xl:absolute xl:bottom-0 xl:right-1/4 xl:translate-x-1/4 2xl:translate-x-7 xl:-translate-y-16 xl:-mr-6">
        <div className="flex flex-col px-4 border-l-2 gap-y-2 md:max-w-max">
          <span className="font-semibold text-3xl">100%</span>
          <p className="text-md">built for entrepreneurs</p>
        </div>
        <div className="flex flex-col px-4 border-l-2 gap-y-2 md:max-w-max">
          <span className="font-semibold text-3xl">25%</span>
          <p className="text-md">of total US business owners</p>
        </div>
        <div className="flex flex-col px-4 border-l-2 gap-y-2 md:max-w-max">
          <span className="font-semibold text-3xl">8.5 Million</span>
          <p className="text-md">members in North Americas</p>
        </div>
        <div className="flex flex-col px-4 border-l-2 gap-y-2 md:max-w-max">
          <span className="font-semibold text-3xl">140 Million</span>
          <p className="text-md">relationships formed</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
