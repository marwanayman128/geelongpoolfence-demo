import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Image from "next/image";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
export default function footer() {
  return (
    <>
      {/* <div>
        <div className="w-full h-[200px] bg-[#000000] flex flex-col justify-center items-center text-white relative">
          <Image
            src="/AboveFooter.jpg"
            alt="image"
            fill
            className="object-cover absolute "
          />
          <div className="text-center z-30 flex items-center justify-between w-full">
            <h1 className="text-xl font-bold m-auto">
              {" "}
              <LocalPhoneIcon className=" rounded-full p-2 w-10 h-10 font-bold bg-white text-black" />{" "}
              0404 494 904
            </h1>
            <img
              src="https://cdn-ejglc.nitrocdn.com/QAeRyrjHNnUJcHbZjRPEBlMkdHoJVLxJ/assets/static/optimized/wp-content/uploads/2021/08/28a74356e493b6ca0540c9907768fdd2.GPFSI-LOGO-300x93.png"
              className="h-20 ml-32"
              alt="Flowbite Logo"
            />
            <h1 className="text-xl font-bold m-auto">
              {" "}
              <EmailIcon className=" rounded-full p-2 w-10 h-10 font-bold bg-white text-black" />{" "}
              mick@geelongpoolfence.com.au
            </h1>
          </div>
        </div>
      </div> */}
      <footer id="contact" className="bg-[#000000] text-white p-10 text-center">
        © 2023 Geelong Pool Fence Safety Inspections. All rights reserved <br />
        Designed by{" "}
        <a className="text-[#2FA8FD]" href="https://quadsolution.com/">
          Quad Solution
        </a>
      </footer>
    </>
  );
}
