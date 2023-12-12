import Image from "next/image";
import React from "react";
import ICONS from "../asset/icons";

function HeaderMenu() {
  return (
    <div className="flex justify-between mt-5">
      <section className="flex items-center gap-3">
        <Image
          className="rounded-md"
          alt="search"
          width={32}
          src={ICONS.code}
        />
        <ul className="flex gap-3">
          <li className="bg-[#FAFAFA] px-3 py-2 rounded-md">Python</li>
          <li className="bg-[#FAFAFA] px-3 py-2 rounded-md">React</li>
          <li className="bg-[#FAFAFA] px-3 py-2 rounded-md">Unity</li>
        </ul>
      </section>
      <section className="flex items-center gap-3">
        <Image
          className="rounded-md"
          alt="search"
          width={32}
          src={ICONS.uiUx}
        />
        <ul className="flex gap-3">
          <li className="bg-[#FAFAFA] px-3 py-2 rounded-md">Ui & Ux</li>
          <li className="bg-[#FAFAFA] px-3 py-2 rounded-md">Vector</li>
        </ul>
      </section>
      <section className="flex items-center gap-3">
        <Image
          className="rounded-md"
          alt="search"
          width={32}
          src={ICONS.video}
        />
        <ul className="flex gap-3">
          <li className="bg-[#FAFAFA] px-3 py-2 rounded-md">Python</li>
          <li className="bg-[#FAFAFA] px-3 py-2 rounded-md">React</li>
          <li className="bg-[#FAFAFA] px-3 py-2 rounded-md">Unity</li>
        </ul>
        <button>
          <Image
            className="rounded-md"
            alt="search"
            width={24}
            src={ICONS.caret}
          />
        </button>
      </section>
    </div>
  );
}

export default HeaderMenu;
