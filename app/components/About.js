"use client";
import Image from "next/image";
import React from "react";
import about from "../../public/img/about/about.webp";
import { SocialIcon } from "react-social-icons";

const About = () => {
  return (
    <div className="flex self-center gap-4 flex-col sm:flex-row-reverse justify-evenly items-center w-4/5 m-auto">
      <div className="sm:w-1/2">
        <Image
          src={about}
          alt="hero-image"
          className="animate relative mx-auto h-[300px] w-[450px]"
          priority={true}
        />
      </div>
      <div className="sm:w-1/2 flex flex-row gap-4 items-center justify-center ">
        <div className="flex flex-col before:content-[''] before:w-[2px] before:h-[40px] before:mt-8 before:self-center before:bg-black after:content-[''] after:w-[2px] after:h-[50px] after:self-center after:bg-black">
          {" "}
          {/* social icons */}
          <SocialIcon
            onClick={() => window.open("https://www.linkedin.com/in/med-gues/")}
            network="email"
            fgColor="currentColor"
            bgColor=" transparent"
            className="cursor-pointer  hover:text-gray-800 text-gray-500 rounded-full pr-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
          />
          <SocialIcon
            onClick={() => window.open("https://www.linkedin.com/in/med-gues/")}
            network="pinterest"
            fgColor="currentColor"
            bgColor=" transparent"
            className="cursor-pointer  hover:text-gray-800 text-gray-500 rounded-full pr-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
          />
          <SocialIcon
            onClick={() => window.open("https://github.com/medgues")}
            network="instagram"
            fgColor="currentColor"
            bgColor="transparent"
            className="cursor-pointer  hover:text-gray-800 text-gray-500 rounded-full p-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
          />
          <SocialIcon
            onClick={() => window.open(" fb://page/100873834998317")}
            network="behance"
            fgColor="currentColor"
            bgColor="transparent"
            className="cursor-pointer  hover:text-gray-800 text-gray-500 rounded-full p-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
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
            className="cursor-pointer  hover:text-gray-800 text-gray-500 rounded-full p-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
          />
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="text-[50px]  font-extrabold font-Abhaya ">Meet Me</h1>
          <div className="flex before:content-[''] before:w-[80px] before:h-[2px] before:self-center before:bg-black ">
            <h2 className=" text-[30px] font-[50] italic pl-4 font-Abhaya">
              i am a Photographer
            </h2>
          </div>

          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in.{" "}
          </p>
          <div>
            <button className="cta">
              <span className="hover-underline-animation font-Abhaya">
                {" "}
                contact me{" "}
              </span>
              <svg
                viewBox="0 0 46 16"
                height="10"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
                id="arrow-horizontal"
              >
                <path
                  transform="translate(30)"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  dataName="Path 10"
                  id="Path_10"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
