"use client";

import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleLinkClick = () => {
    setIsPopoverOpen(false);
  };

  return (
    <Popover className="md:max-w-[2080px] mx-auto flex items-center border-b-2 px-4 bg-[#E4F0F6] sticky top-0 z-10">
      <div className="w-full mx-auto bg-[#E4F0F6] flex justify-between items-center border-b-2 px-6 xl:px-10 2xl:px-14 py-2 h-24">
        <Link
          className={`link ${pathname === "/" ? "active" : ""}`}
          href="/"
          onClick={handleLinkClick}
        >
          <div className="flex gap-x-3 items-center align-center">
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
            <span className="font-logo text-3xl font-bold tracking-wider text-purple-900">
              NetFusion
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center justify-center gap-2 md:gap-10 text-lg">
          <Link href="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link href="/about" onClick={handleLinkClick}>
            About us
          </Link>
          <Link href="/services" onClick={handleLinkClick}>
            Services
          </Link>
          <Link href="/teams" onClick={handleLinkClick}>
            Teams
          </Link>
        </div>

        <div className="flex grow items-center justify-end md:hidden ">
          <PopoverButton
            className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring focus:ring-inset focus:ring-purple-800"
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              height="1em"
              fill="currentColor"
              className="h-[38px] cursor-pointer text-purple-800"
            >
              <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1Zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1ZM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1Z"></path>
            </svg>
          </PopoverButton>
        </div>

        <PopoverBackdrop
          className={`fixed inset-0 bg-slate-900/40 ${
            isPopoverOpen ? "block" : "hidden"
          }`}
        />

        <Transition
          as={Fragment}
          show={isPopoverOpen}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-10"
          >
            <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
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
                  <div className="-mr-2">
                    <PopoverButton
                      className="inline-flex items-center justify-center rounded-md bg-white p-2 text-purple-800 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-inset focus:ring-purple-800"
                      onClick={() => setIsPopoverOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon
                        className="h-[50px] w-[50px]"
                        aria-hidden="true"
                      />
                    </PopoverButton>
                  </div>
                </div>

                <div className="mt-6">
                  <nav className="grid gap-y-20 justify-center text-center text-xl font-medium pb-7">
                    <Link
                      className="focus-outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-3 py-3 rounded-lg"
                      href="/"
                      onClick={handleLinkClick}
                    >
                      Home
                    </Link>
                    <Link
                      className="focus-outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-3 py-3 rounded-lg"
                      href="/about"
                      onClick={handleLinkClick}
                    >
                      About us
                    </Link>
                    <Link
                      className="focus-outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-3 py-3 rounded-lg"
                      href="/services"
                      onClick={handleLinkClick}
                    >
                      Services
                    </Link>
                    <Link
                      className="focus-outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-3 py-3 rounded-lg"
                      href="/teams"
                      onClick={handleLinkClick}
                    >
                      Teams
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </Transition>
      </div>
    </Popover>
  );
};

export default Navbar;
