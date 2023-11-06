import React from "react";
import Image from "next/image";
export default function section3() {
  return (
    <>
      <div className="bg-white text-black p-10 text-center pt-20 flex flex-col justify-center">
        <h1 className="text-5xl font-bold max-[700px]:text-3xl">
          Trusted By leading Companies
        </h1>
        <h2 className="text-2xl my-5 w-[60%] m-auto max-[700px]:w-full max-[700px]:text-lg">
          We are trusted by leading realestate, property managers, hotels and
          other commercial clients to carry out building inspections.
        </h2>
        <div className="flex justify-center gap-20 my-20 max-[700px]:flex-col max-[700px]:m-auto ">
          <Image src="/Spasa.jpg" alt="image" width={300} height={300} />{" "}
          <Image src="/VBA.webp" alt="image" width={300} height={300} />
        </div>
      </div>
    </>
  );
}
