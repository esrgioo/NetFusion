import Image from "next/image";

const Join = () => {
  return (
    <section className="px-4 md:px-20 md:max-w-screen-xl m-auto box-content py-10 lg:py-12 xl:flex xl:gap-x-8 2xl:gap-x-14">
      <div className="flex flex-col gap-y-4 xl:max-w-[600px] xl:my-auto">
        <h2 className="text-3xl font-semibold">Grow Your Network</h2>
        <span className="text-md lg:text-base text-left font-medium">
          Meet business owners who'll help you reach your goals
        </span>
        <p className="text-md">
          NetFusion is the go-to network for over 9 million business owners.
          These are the people who become clients, customers, and partners — or
          who introduce you to them.
        </p>
      </div>
      <div className="p-12 lg:-mt-6 flex justify-center order-first">
        <Image
          className="xl:shadow object-cover"
          width={1000}
          height={1000}
          src="/home-join.webp"
          alt="join"
        />
      </div>
    </section>
  );
};

export default Join;
