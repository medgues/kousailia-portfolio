import React from "react";
import { CgProfile } from "react-icons/CG";
import { TbHome2 } from "react-icons/Tb";
import { BsCamera2 } from "react-icons/Bs";
import { MdOutlineRoomService } from "react-icons/Md";
import { TiContacts } from "react-icons/Ti";

const Navigation = () => {
  return (
    <div className="glassmorphism w-[80%] sm:w-[30%] h-[3rem] bottom-8 px-4 right-0 left-0 m-auto absolute rounded-full  flex justify-evenly items-center">
      <TbHome2
        size={45}
        className="p-2 hover:bg-[#06223F] hover:text-white rounded-[1.3rem] transition-all ease-in-out duration-300"
      />
      <CgProfile
        size={45}
        className="p-2 hover:bg-[#06223F] hover:text-white rounded-[1.3rem] transition-all ease-in-out duration-300"
      />
      <BsCamera2
        size={45}
        className="p-2 hover:bg-[#06223F] hover:text-white rounded-[1.3rem] transition-all ease-in-out duration-300 "
      />
      <MdOutlineRoomService
        size={45}
        className="p-2 hover:bg-[#06223F] hover:text-white rounded-[1.3rem] transition-all ease-in-out duration-300"
      />
      <TiContacts
        size={45}
        className="p-2 hover:bg-[#06223F] hover:text-white rounded-[1.3rem] transition-all ease-in-out duration-300"
      />
    </div>
  );
};

export default Navigation;
