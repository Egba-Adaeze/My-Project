import Image from "next/image";
import React from "react";
import ICONS from "../asset/icons";
import IMAGES from "../asset/images";

function Footer() {
  return (
    <div className="mt-20 bg-[#FAFAFA]">
      <section className="flex justify-between bg-[#F5F2FA] m-5 p-2 mt-4 rounded">
        <h3 className="text-sm mr-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam
          maecenas sed enim. Velit ut tortor pretium
        </h3>
        <div className="flex flex-col items-center">
          <Image alt="siteicon" width={31} src={ICONS.main} />
          <span className="uppercase text-3xl font-black ml-1">Academy</span>
        </div>
      </section>
      <section className="grid md:grid-cols-2 gap-7 mt-10 m-5">
        <div className="flex gap-7">
          <div>
            <p className="mb-3 font-semibold text-xl uppercase">
              Membership Certificate
            </p>
            <Image
              className="rounded-md"
              alt="certificate"
              width={468}
              src={IMAGES.certificate}
            />
          </div>
          <div className="">
            <p className="mb-3 font-semibold text-xl uppercase">Categories</p>
            <ul>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-7">
          <div>
            <div className="">
              <p className="mb-3 font-semibold text-xl uppercase">
                quick access
              </p>
              <ul>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
              </ul>
            </div>
          </div>
          <div className="">
            <p className="mb-3 font-semibold text-xl uppercase">new comment</p>
            <ul className="space-y-6">
              {[..."   "].map(() => (
                <li key={Math.random()} className="bg-[#F5F5F5] p-4">
                  <p key={Math.random()} className="font-medium text-[#3E3232]">
                    Ellsmartx
                  </p>
                  <p className="text-xs text-[#3E3232BF]">
                    How nice does this look 😍 I feel it should be delicious,
                    thank you
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[#F5F5F5] flex justify-between p-3 m-5 mt-10">
        <div className="">Privacy Policy | terms & conditions</div>
        <div className="">All copyright &copy; 2022 reserved</div>
      </section>
    </div>
  );
}

export default Footer;
