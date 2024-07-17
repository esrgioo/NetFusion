import Image from "next/image";

const Join = () => {
  return (
    <section className="px-4 md:px-20 md:max-w-screen-xl m-auto box-content py-10 lg:py-12 xl:flex xl:gap-x-8 2xl:gap-x-14">
      <div className="flex flex-col gap-y-4 xl:max-w-[600px] xl:my-auto">
        <h2 className="text-xl font-semibold">Grow Your Network</h2>
        <span className="text-md lg:text-base text-left font-medium xl:text-3xl">
          Join groups relevant to your business
        </span>
        <p className="text-md xl:text-lg">
          Meet like-minded business owners in networking groups that range from
          industry and location-based, to people who share your background or
          interests.
        </p>
      </div>
      <div className="p-12 lg:-mt-6 flex justify-center order-first">
        <Image
          priority
          className="xl:shadow object-cover"
          width={500}
          height={500}
          src="/home-join.webp"
          alt="join"
        />
      </div>
    </section>
  );
};

export default Join;
