import React from "react";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Insta from "@/app/components/social/insta";
import Face from "@/app/components/social/face";
import Twitter from "@/app/components/social/twitter";
export default function contactSection() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-between items-center max-[650px]:flex-col  ">
      <div className="px-6 py-24 sm:py-32 lg:px-8 w-1/2 flex flex-col justify-center gap-5 max-[650px]:w-full ml-32 max-[1650px]:ml-0">
        <h1 className="text-white text-5xl font-bold">Contact Us</h1>
        <p className="text-white font-bold ">
          Servicing the Greater Geelong, Surfcoast, Borough of Queenscliff,
          Western suburbs of Melbourne, Colac, Warrnambool and surrounding
          regions.
        </p>
        <h2 className="text-white text-md">
          <span>
            <ApartmentOutlinedIcon
              style={{
                color: "black",
                marginRight: "10px",
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "9px",
                height: "40px",
                width: "40px",
              }}
            />
          </span>
          Address
        </h2>
        <h2 className="text-white text-md">
          <span>
            <LocalPhoneOutlinedIcon
              style={{
                color: "black",
                marginRight: "10px",
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "9px",
                height: "40px",
                width: "40px",
              }}
            />
          </span>
          0404 494 904
        </h2>
        <h2 className="text-white text-md">
          <span>
            <EmailOutlinedIcon
              style={{
                color: "black",
                marginRight: "10px",
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "9px",
                height: "40px",
                width: "40px",
              }}
            />
          </span>
          mick@geelongpoolfence.com.au
        </h2>
        <div className="flex gap-5 flex-col h-full  justify-end  min-w-fit  m-auto h-44  relative min-[500px]:hidden">
          <div className="blurryComp"></div>
          <h1 className="text-white text-3xl font-bold text-center z-40 mt-3">
            Follow us
          </h1>
          <div className=" p-5 flex gap-5 justify-center">
            {" "}
            <Insta />
            <Face />
            <Twitter />
          </div>
        </div>
        <div className="flex gap-5 flex-col  mt-5  max-[500px]:hidden">
          <h1 className="text-white text-2xl font-bold  z-40">Follow us</h1>
          <div className=" pt-1 flex gap-5 ">
            {" "}
            <Insta />
            <Face />
            <Twitter />
          </div>
        </div>
      </div>
      <div className="isolate bg-white px-6 py-32 max-[650px]:pt-6 max-[650px]:pb-12 lg:px-8 relative w-1/2 justify-center max-[650px]:w-full ">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <br /> Let us know how to get back to you.
          </h2>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-[#2FA8FD] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#6dbaf1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {"Send message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
