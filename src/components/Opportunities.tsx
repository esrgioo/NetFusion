import Image from "next/image";

const Opportunities = () => {
  return (
    <section className="px-4 md:px-20 md:max-w-screen-xl m-auto box-content py-10 lg:py-12 xl:flex xl:gap-x-8 2xl:gap-x-14">
      <div className="flex flex-col gap-y-4 xl:max-w-[600px] xl:my-auto">
        <h2 className="text-3xl font-semibold">
          Discover New Opportunities from Existing Contacts
        </h2>
        <span className="text-md lg:text-base text-left font-medium">
          Because business networking isn't just about who you know — it's about
          who they know
        </span>
        <p className="text-md">
          Our technology connects you to your existing contacts, and shows you
          the opportunities their networks can give you. Your next best customer
          could be just one introduction away. Join now to unlock the power of
          your connections!
        </p>
      </div>
      <div className="p-12 lg:-mt-6 flex justify-center order-first">
        <Image
          className="xl:shadow-xl object-cover"
          width={1000}
          height={1000}
          src="/home-discover.webp"
          alt="Opportunities"
        />
      </div>
    </section>
  );
};

export default Opportunities;
