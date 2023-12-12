import Image from "next/image";
import React from "react";
import IMAGES from "../asset/images";

function CallToAction() {
  return (
    <div className="flex justify-between mt-4">
      <section className="mt-28">
        <div className="text-4xl font-extrabold space-y-4 max-w-[601px]">
          🙌 Hello friends <br /> I am Sofia and we want to start <br /> A
          <span className="bg-gradient-to-r from-[#B176F2] to-[#FAC1F1] inline-block text-transparent bg-clip-text px-2">
             Web Design
          </span>
          course together. Do you like it too 😍 ?
        </div>
      </section>
      <Image className="rounded-md -mb-20 -ml-14" alt="search" width={747} src={IMAGES.cto} />
    </div>
  );
}

export default CallToAction;
