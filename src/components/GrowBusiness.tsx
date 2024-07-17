import { FaStar } from "react-icons/fa6";

const GrowBusiness = () => {
  return (
    <section className="px-4 md:px-20 md:max-w-[1920px] m-auto box-content py-20 bg-custom-gradient">
      <div className="flex flex-col gap-y-6 items-center">
        <h2 className="text-2xl font-semibold">Grow your business here.</h2>
        <span className="text-sm lg:text-base text-center font-medium">
          Unlock business opportunities in over 35,000 communities across North
          America.
        </span>
        <span className="flex gap-x-4 mt-7">
          <FaStar size={40} color="yellow" />
          <FaStar className="mt-5" size={40} color="yellow" />
          <FaStar size={40} color="yellow" />
          <FaStar className="mt-5" size={40} color="yellow" />
          <FaStar size={40} color="yellow" />
        </span>
      </div>
    </section>
  );
};

export default GrowBusiness;
