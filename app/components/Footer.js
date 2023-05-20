"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="flex pt-7 px-7 mt-4 flex-col justify-between items-center font-Abhaya bg-[#9c9996]">
      <div className="flex flex-col sm:flex-row w-3/4 justify-between items-center">
        <div className="flex gap-4">
          <a className="hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out cursor-pointer">
            Home
          </a>
          <a className="hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out cursor-pointer">
            About
          </a>
          <a className="hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out cursor-pointer">
            Portfolio
          </a>
          <a className="hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out cursor-pointer">
            Contacts
          </a>
        </div>
        <div className="text-center cursor-pointer my-2">
          <p className="text-[15px] font-[50] ">Photographer</p>
          <p className="text-[20px] italic  font-extrabold">Koussaila Mehdi</p>
        </div>
        <div className="flex  ">
          <SocialIcon
            onClick={() => window.open("https://www.linkedin.com/in/med-gues/")}
            network="email"
            fgColor="currentColor"
            bgColor=" transparent"
            className="cursor-pointer  text-gray-800 rounded-full pr-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
          />
          <SocialIcon
            onClick={() => window.open("https://www.linkedin.com/in/med-gues/")}
            network="pinterest"
            fgColor="currentColor"
            bgColor=" transparent"
            className="cursor-pointer text-gray-800 rounded-full pr-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
          />
          <SocialIcon
            onClick={() => window.open("https://github.com/medgues")}
            network="instagram"
            fgColor="currentColor"
            bgColor="transparent"
            className="cursor-pointer text-gray-800  rounded-full p-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
          />
          <SocialIcon
            onClick={() => window.open(" fb://page/100873834998317")}
            network="behance"
            fgColor="currentColor"
            bgColor="transparent"
            className="cursor-pointer  text-gray-800 rounded-full p-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
          />
          <SocialIcon
            onClick={() =>
              window.open(
                "https://wa.me/+213698179358?text=hey%2C%0Ai%20am%20interested%20in%20your%20services%2C"
              )
            }
            network="whatsapp"
            fgColor="currentColor"
            bgColor="transparent"
            className="cursor-pointer text-gray-800  rounded-full p-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col justify-center items-center before:content-[''] before:w-[250px] sm:before:w-[800px] before:h-[2px] before:self-center before:bg-black">
        2023 ⒸKoussaila Mehdi, All rights Reserved
      </div>
    </div>
  );
};

export default Footer;
