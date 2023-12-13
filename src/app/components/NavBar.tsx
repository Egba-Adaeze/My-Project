import Image from "next/image";
import React from "react";
import ICONS from "../asset/icons";

function NavBar() {
  return (
    <header className="flex justify-between pt-3">
      <div className="flex items-center">
        <div className="flex">
          <Image alt="siteicon" width={31} src={ICONS.main} />
          <span className="uppercase text-3xl font-black ml-1">Academy</span>
        </div>
        <ul className="flex gap-3 ml-5 md:text-base text-sm">
          <li>Categories</li>
          <li>Teach</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
      <section className="flex items-center">
        <div className="flex relative border p-1 h-min bg-gray-50">
          <input
            type="text"
            placeholder="search anything"
            className="bg-gray-50 pr-4"
          />
          <Image
            className="absolute right-0.5"
            alt="search"
            width={20}
            src={ICONS.search}
          />
        </div>
        <div className="ml-3 items-center md:flex hidden">
          <div className="flex">
            <Image
              className="rounded-md"
              alt="search"
              width={64}
              src={ICONS.coverImage}
            />
            <div className="ml-1 flex flex-col justify-between py-7">
              <p className="font-medium">Behzad pashaei</p>
              <p className="mt-2 text-gray-400 text-sm">Ui & Ux designer</p>
            </div>
          </div>
          <button className="bg-purple-50 ml-5 w-[64px] h-[64px] grid place-items-center rounded-md">
            <Image
              className=""
              alt="search"
              width={20}
              src={ICONS.notification}
            />
          </button>
        </div>
      </section>
    </header>
  );
}

export default NavBar;
