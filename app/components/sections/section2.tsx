import React from "react";
import Image from "next/image";
export default function section2() {
  return (
    <div
      id="about"
      className="BackgroundImageStyle h-full  flex flex-row  justify-around px-32  sm:px-0 sm:py-24 xs:px-0 xs:py-10 max-[900px]:flex-col max-[900px]:px-0"
    >
      {" "}
      <div className="max-[900px]:mx-10 mx-0 my-5 max-[400px]:mx-4">
        <Image
          src="/aboutus.png"
          alt="image"
          width={800}
          height={500}
          style={{ borderRadius: "20px" }}
        />
      </div>
      <div className="relative p-10 max-[400px]:p-4 ">
        <div className="bg-white w-[800px] max-[900px]:w-full max-[900px]:m-auto min-[900px]:absolute top-[20%] right-[0%] max-[600px]:mx-0    p-8 m-5  flex flex-col rounded-lg  ">
          <div className="flex flex-col border-gray-300 border rounded-lg p-10 max-[400px]:px-0 max-[400px]:border-none  ">
            <h1 className="text-5xl font-bold my-5 max-[600px]:text-3xl">
              About Us
            </h1>
            <p className="text-lg leading-8 max-[600px]:text-sm ">
              At Geelong Pool Fence Safety Inspections, we have a team of highly
              experienced Building Inspectors, registered with the Victorian
              Building Authority and with a wealth of knowledge in the swimming
              pool industry and Local Council. We provide a no fuss, stress free
              service to assist you in making your pool or spa barrier
              compliant, to ensure that you and your family get the enjoyment
              they deserve from your swimming pool or spa. Our staff are well
              versed in dealing with local councils, either having worked for a
              Council or in conjunction with a Council. We ensure your pool and
              spa safety is compliant with Victorian regulations, whilst
              offering a professional hassle free service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
