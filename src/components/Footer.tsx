"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="shadow static bottom-0">
      <div className="px-4 md:px-15 md:max-w-[2050px] m-auto box-content bg-slate-700 py-6">
        <div className="flex flex-col items-center gap-y-2 md:flex-row sm:max-xl:justify-around xl:justify-between xl:px-14">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 23 24"
              role="img"
              height="1em"
              fill="currentColor"
              className="h-[50px] text-purple-800"
            >
              <path
                fillRule="evenodd"
                d="M21.861 7.782C20.341 3.259 16.154 0 11.237 0a10.924 10.924 0 0 0-3.686.641l.17.538c.276.871.564 1.78.865 2.686.177.531.36 1.058.545 1.577.591 1.644 1.228 3.181 1.919 4.335.304.508.62.933.945 1.268.47.484.963.774 1.48.774.757 0 1.46-.599 2.118-1.562.562 1.156 1.136 2.66 1.635 4.086-1.053.928-2.277 1.487-3.751 1.487h-.002c-1.12 0-2.091-.328-2.959-.884a6.894 6.894 0 0 1-1.166-.936c-1.038-1.043-1.897-2.475-2.652-4.116a32.353 32.353 0 0 1-.76-1.793c-.672-1.724-1.271-3.59-1.86-5.45A11.656 11.656 0 0 0 0 11.534a11.672 11.672 0 0 0 3.361 8.219c.405-1.179.788-2.39 1.149-3.532.481-1.527.969-3.06 1.496-4.524.8 1.533 1.727 2.848 2.843 3.817-.214.658-.42 1.31-.62 1.944-.494 1.56-.99 3.133-1.53 4.625.423.193.86.36 1.308.5 1.023.314 2.108.486 3.229.486 3.02 0 5.762-1.23 7.783-3.225.387-.381.744-.79 1.075-1.223-.125-.39-.248-.781-.372-1.171-.275-.87-.562-1.777-.864-2.681a75.577 75.577 0 0 0-.545-1.579c-.59-1.642-1.225-3.18-1.917-4.334a6.85 6.85 0 0 0-.945-1.269 3.73 3.73 0 0 0-.356-.325c-.361-.286-.733-.448-1.122-.448-.757 0-1.462.597-2.12 1.562-.563-1.158-1.136-2.66-1.635-4.086a7.18 7.18 0 0 1 .403-.331c.96-.73 2.059-1.157 3.35-1.157h.004c1.117 0 2.088.328 2.955.884.412.263.802.57 1.167.935 1.037 1.043 1.896 2.476 2.651 4.117.265.575.517 1.174.76 1.795.305.785.596 1.6.877 2.43.056-.468.09-.944.09-1.428a11.74 11.74 0 0 0-.615-3.752Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="self-center font-logo text-2xl font-semibold whitespace-nowra ptracking-wider dark:text-white text-purple-900 tracking-wider">
              NetFusion
            </span>
          </Link>

          <span className="block text-sm md:text-xl text-gray-500 sm:text-center dark:text-gray-400 tracking-wider">
            © 2024{" "}
            <Link href="#" className="hover:underline">
              NetFusion™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
