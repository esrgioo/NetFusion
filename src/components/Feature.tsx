import Image from "next/image";

const Feature = () => {
  return (
    <section className="px-4 md:px-20 md:max-w-[1920px] m-auto box-content py-10 md:py-14 xl:bg-desktop-custom-gradient bg-[#2D008F]">
      <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-3 xl:flex xl:flex-row xl:gap-x-8 xl:justify-center md:place-items-center items-center gap-y-8 xl:py-6">
        <span className="uppercase text-sm font-semibold text-zinc-100 -mt-2 md:hidden">
          Featured In
        </span>
        <Image
          priority
          className="max-w-[175px] md:max-w-[180px] lg:max-w-[233px] xl:max-w-[180px] md:scale-125 xl:mr-14 object-cover"
          width={939}
          height={100}
          src="/huffpost.webp"
          alt="partner-huffpost"
        />
        <Image
          priority
          className="max-w-[175px] md:max-w-[180px] lg:max-w-[233px] xl:max-w-[180px] md:scale-125 xl:mr-14 object-cover"
          width={939}
          height={100}
          src="/thewallstreetjournal.webp"
          alt="partner-thewallstreetjournal"
        />
        <Image
          priority
          className="max-w-[175px] md:max-w-[180px] lg:max-w-[233px] xl:max-w-[180px] md:scale-125 object-cover"
          width={939}
          height={100}
          src="/techcrunch.webp"
          alt="partner-techcrunch"
        />
        <Image
          priority
          className="max-w-[175px] md:max-w-[180px] lg:max-w-[233px] xl:max-w-[180px] md:scale-125 object-cover"
          width={939}
          height={100}
          src="/fastcompany.webp"
          alt="partner-fastcompany"
        />
        <Image
          priority
          className="hidden xl:block max-w-[175px] md:max-w-[180px] lg:max-w-[233px] xl:max-w-[180px] md:scale-125 object-cover"
          width={939}
          height={100}
          src="/forbes.webp"
          alt="partner-forbes"
        />
      </div>
      <Image
        priority
        className="max-w-[175px] md:max-w-[180px] lg:max-w-[233px] mt-[32px] md:-mt-[35px] mx-auto md:scale-150 xl:hidden object-cover"
        width={939}
        height={100}
        src="/forbes.webp"
        alt="partner-forbes"
      />
    </section>
  );
};

export default Feature;
