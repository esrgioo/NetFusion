import { FaCheck } from "react-icons/fa";

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row md:pt-7 md:gap-x-3 xl:col-span-3 xl:px-14 xl:ml-8 gap-y-8">
      <div className="pt-5 space-y-7 divide-y-2 border rounded-xl basis-1/2 px-3">
        <div className="flex justify-between">
          <h3 className="font-semibold">Basic plan</h3>
          <div>
            <span className="text-lg font-medium text-slate-800 tracking-wider">
              €49
            </span>
            <span className="text-sm font-medium text-slate-500">/mo</span>
          </div>
        </div>
        <div className="grid grid-rows-7 px-2 py-6">
          <div className="flex gap-x-4 py-2 self-center font-medium text-slate-700">
            <FaCheck size={18} color="#6b21a8" />
            Individual configuration
          </div>
          <div className="flex gap-x-4 py-2 self-center font-medium text-slate-700">
            <FaCheck size={18} color="#6b21a8" />
            Use our specialized AI
          </div>
          <div className="flex gap-x-4 py-2 self-center font-medium text-slate-700">
            <FaCheck size={18} color="#6b21a8" />
            No setup, or hidden fees
          </div>
          <div className="flex gap-x-4 py-2 self-center line-through text-slate-700/60 font-medium">
            <FaCheck size={18} color="#94a3b8" />
            Team size: 10 developers
          </div>
          <div className="flex gap-x-4 py-2 self-center line-through text-slate-700/60 font-medium">
            <FaCheck size={18} color="#94a3b8" />
            Premium support: 24 months
          </div>
          <div className="flex gap-x-4 py-2 self-center line-through text-slate-700/60 font-medium">
            <FaCheck size={18} color="#94a3b8" />
            Powered by GPT-4
          </div>
          <button
            type="button"
            className="text-white bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 translate-y-4"
          >
            Choose plan
          </button>
        </div>
      </div>
      <div className="pt-5 space-y-7 divide-y-2 border rounded-xl md:basis-1/2 px-3">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Premium plan</h3>
          <div>
            <span className="text-lg font-medium text-slate-800 tracking-wider">
              €99
            </span>
            <span className="text-sm font-medium text-slate-500">/mo</span>
          </div>
        </div>
        <div className="grid grid-rows-7 px-2 py-6">
          <div className="flex gap-x-4 py-2 self-center font-medium text-slate-700">
            <FaCheck size={18} color="#6b21a8" />
            Individual configuration
          </div>
          <div className="flex gap-x-4 py-2 self-center font-medium text-slate-700">
            <FaCheck size={18} color="#6b21a8" />
            Use our specialized AI
          </div>
          <div className="flex gap-x-4 py-2 self-center font-medium text-slate-700">
            <FaCheck size={18} color="#6b21a8" />
            No setup, or hidden fees
          </div>
          <div className="flex gap-x-4 py-2 self-center font-medium text-slate-700">
            <FaCheck size={18} color="#6b21a8" />
            Team size: 10 developers
          </div>
          <div className="flex gap-x-4 py-2 self-center font-medium text-slate-700">
            <FaCheck size={18} color="#6b21a8" />
            Premium support: 24 months
          </div>
          <div className="flex gap-x-4 py-2 self-center font-medium text-slate-700">
            <FaCheck size={18} color="#6b21a8" />
            Powered by GPT-4
          </div>
          <button
            type="button"
            className="text-white bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 translate-y-4"
          >
            Choose plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
