function YourCustomIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
    >
      <path
        d="M5 8C3.4375 10.0875 2.5 12.6875 2.5 15.5C2.5 22.4 8.1 28 15 28C21.9 28 27.5 22.4 27.5 15.5C27.5 8.6 21.9 3 15 3C13.2125 3 11.5 3.375 9.9625 4.0625"
        stroke="#2499ED"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M13.5 18.7125L20.15 12.0625"
        stroke="#2499ED"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M9.84998 15.5L13.275 18.9375L16.4625 15.7625"
        stroke="#2499ED"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
export default function Section1() {
  return (
    <>
      <div className="relative">
        <video
          loop
          autoPlay
          muted
          playsInline
          className="w-full h-[90vh] top-0 left-0 z-0 object-cover  max-[850px]:h-[190vh] [400px]-h:h-[100vh]"
          src="/production.mp4"
        ></video>
        <div className="bg-black opacity-40 absolute top-0 left-0 w-full h-full "></div>
        <div className="text-white absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-32 max-[1300px]:px-10 max-[400px]:px-5">
          <div className="flex justify-between w-full max-[850px]:flex-col max-[850px]:mt-10">
            <div>
              <h1 className="text-7xl font-bold leading-tight max-[1100px]:text-5xl ">
                Pool & Spa{" "}
                <span className="text-blue-500 ">
                  Barrier <br /> Compliance
                </span>{" "}
                <br /> Inspection Specialist
              </h1>
              <div className="mt-10 text-2xl flex flex-col gap-4 max-[1100px]:text-lg">
                <div className="flex gap-4">
                  <YourCustomIcon />
                  <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2499ED] to-[#ffffff]">
                    {" "}
                    Comprehensive property inspection
                  </h3>
                </div>
                <div className="flex gap-4">
                  <YourCustomIcon />

                  <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2499ED] to-[#ffffff]">
                    {" "}
                    Same-day detailed report
                  </h3>
                </div>
                <div className="flex gap-4">
                  <YourCustomIcon />

                  <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2499ED] to-[#ffffff]">
                    {" "}
                    Proven experience & knowledge
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-[600px] h-[450px] bg-white rounded-lg relative max-[850px]:m-auto max-[850px]:my-16 max-[700px]:w-full max-[850px]:h-auto">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#29A0F4] px-14 py-5 rounded-lg z-50 w-64">
                <h2 className="text-center font-bold">Book Inspection</h2>
              </div>
              <form className="flex flex-col p-10 gap-4 my-5">
                <div className="flex gap-4 max-[850px]:flex-col max-[850px]:w-full ">
                  <input
                    type="text"
                    placeholder="Name"
                    className=" rounded-lg p-4 outline-gray-300 border-gray-300 border"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className=" rounded-lg p-4 outline-gray-300 border-gray-300 border"
                  />
                </div>
                <div className="flex gap-4 max-[850px]:flex-col max-[850px]:w-full">
                  <input
                    type="text"
                    placeholder="Email"
                    className=" rounded-lg p-4 outline-gray-300 border-gray-300 border"
                  />
                  <input
                    type="text"
                    placeholder="Property Address"
                    className=" rounded-lg p-4 outline-gray-300 border-gray-300 border"
                  />
                </div>
                <div className="flex gap-4 max-[850px]:flex-col max-[850px]:w-full">
                  <input
                    type="text"
                    placeholder="Agent Name"
                    className=" rounded-lg p-4 outline-gray-300 border-gray-300 border"
                  />
                  <input
                    type="text"
                    placeholder="Agent's Contact Number"
                    className=" rounded-lg p-4 outline-gray-300 border-gray-300 border"
                  />
                </div>
                <div className="flex gap-4 max-[850px]:flex-col max-[850px]:w-full">
                  <select className="w-full rounded-lg p-4 outline-gray-300 border-gray-300 border text-gray-400">
                    <option value="" disabled selected>
                      Job Type
                    </option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
                <button className="bg-[#29A0F4] text-white rounded-lg p-4">
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
