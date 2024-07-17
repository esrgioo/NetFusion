import Image from "next/image";

const Growdiscover = () => {
  return (
    <section className="px-4 md:px-20 md:max-w-screen-xl m-auto box-content py-10 lg:py-12 xl:flex xl:gap-x-8 2xl:gap-x-14 xl:py-6">
      <div className="flex flex-col gap-y-4 xl:max-w-[600px] xl:my-auto">
        <h2 className="text-4xl font-semibold">Grow Your Network</h2>
        <span className="text-md lg:text-base text-left font-medium xl:text-2xl">
          Discover untapped business potential in your network
        </span>
        <p className="text-md xl:text-lg">
          Experience the power of precision networking on Alignable. Our
          technology takes your specific business goals, and helps you connect
          with the most valuable people. And our AI tools help you make
          personalized introductions at scale.
        </p>
      </div>
      <div className="p-12 lg:-mt-6 flex justify-center">
        <Image
          priority
          className="xl:shadow-md object-cover"
          width={500}
          height={500}
          src="/home-growdiscover.webp"
          alt="growdiscover"
        />
      </div>
    </section>
  );
};

export default Growdiscover;
