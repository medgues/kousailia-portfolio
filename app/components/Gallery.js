import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="relative flex justify-between items-center h-screen pb-10">
      <div className="w-[45%] ml-36 z-10">
        <h1 className="text-[70px]  leading-none font-extrabold font-Abhaya mb-8 pt-[130px]">
          Beautiful Moment is everything
        </h1>
        <p className="w-[70%] font-Abhaya  italic">
          Thought years of experience, I have honed my skills in composition,
          lighting, and post-production to produce stunning visuals that
          showcase the beauty of my subjects. Whether it's a portrait,
          landscape, or event, I approach each project with passion and
          dedication, striving to deliver images that exceed my clients'
          expectations.{" "}
        </p>
        <button className="cta mt-8">
          <span className="hover-underline-animation font-Abhaya">
            {" "}
            Gallery{" "}
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
      <div>
        <Image
          src={"/img/gallery/1.jpg"}
          height={300}
          width={300}
          className="-z-0 absolute left-[45%] top-[20%] border border-slate-400 px-4 pt-4 pb-10 rounded-sm  bg-white"
        />
        <Image
          src={"/img/gallery/1.jpg"}
          height={300}
          width={300}
          className="-z-0 absolute -rotate-[25deg] left-[60%] top-[9%] border border-slate-400 px-4 pt-4 pb-10 rounded-sm  bg-white"
        />
        <Image
          src={"/img/gallery/2.jpg"}
          height={300}
          width={300}
          className="-z-0 rotate-12 absolute left-[45%] top-[20%] border border-slate-400 px-4 pt-4 pb-10 rounded-sm  bg-white"
        />
        <Image
          src={"/img/gallery/3.jpg"}
          height={300}
          width={300}
          className="-z-0 rotate-12 absolute left-[85%] top-[20%] border border-slate-400 px-4 pt-4 pb-10 rounded-sm  bg-white"
        />
        <Image
          src={"/img/gallery/4.jpg"}
          height={250}
          width={250}
          className="-z-0 rotate-[23deg] absolute left-[65%] top-[50%] border border-slate-400 px-4 pt-4 pb-10 rounded-sm  bg-white"
        />
      </div>
    </div>
  );
};

export default Gallery;
