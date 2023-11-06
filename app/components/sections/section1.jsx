import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
export default function Section1() {
  return (
    <>
      <div className="relative  h-[90vh] max-[850px]:h-[100%] w-full overflow-hidden ">
        <video
          loop
          autoPlay
          muted
          playsInline
          className="videoFilter absolute top-0 left-0 w-full h-full object-cover   "
          src="/production.mp4"
        ></video>
        <div className="bg-black opacity-40 absolute top-0 left-0 w-full h-full "></div>
        <div className="text-white h-full z-50  w-full px-32 max-[1300px]:px-10 max-[400px]:px-5 flex justify-center items-center">
          <div className="flex justify-between w-full max-[850px]:flex-col  items-center">
            <div className=" rounded-lg relative max-[850px]:m-auto max-[850px]:my-16 max-[700px]:w-full max-[850px]:h-auto">
              <h1 className="text-7xl font-bold leading-tight max-[1100px]:text-5xl max-[500px]:text-4xl ">
                Pool & Spa{" "}
                <span className="text-blue-500 ">
                  Barrier <br /> Compliance
                </span>{" "}
                <br /> Inspection Specialist
              </h1>
              <div className="mt-10 text-2xl flex flex-col gap-4 max-[1100px]:text-lg">
                <div className="flex gap-4 items-center">
                  <CheckCircleOutlineIcon />
                  <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2499ED] to-[#ffffff]">
                    {" "}
                    Comprehensive property inspection
                  </h3>
                </div>
                <div className="flex gap-4">
                  <CheckCircleOutlineIcon />

                  <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2499ED] to-[#ffffff]">
                    {" "}
                    Same-day detailed report
                  </h3>
                </div>
                <div className="flex gap-4">
                  <CheckCircleOutlineIcon />

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
                    className=" rounded-lg p-4 text-black outline-gray-300 border-gray-300 border"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className=" rounded-lg p-4 text-black outline-gray-300 border-gray-300 border"
                  />
                </div>
                <div className="flex gap-4 max-[850px]:flex-col max-[850px]:w-full">
                  <input
                    type="text"
                    placeholder="Email"
                    className=" rounded-lg p-4 text-black outline-gray-300 border-gray-300 border"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className=" rounded-lg p-4 text-black outline-gray-300 border-gray-300 border"
                  />
                </div>
                <div className="flex gap-4 max-[850px]:flex-col max-[850px]:w-full">
                  <select className="w-full rounded-lg p-4  outline-gray-300 border-gray-300 border text-gray-400">
                    <option value="" disabled selected>
                      Inspection
                    </option>
                    <option className="text-black" value="Option 1">
                      Pre-Inspection
                    </option>
                    <option className="text-black" value="Option 2">
                      Inspection
                    </option>
                    <option className="text-black" value="Option 3">
                      Re-Inspection
                    </option>
                  </select>
                </div>
                <div className="flex gap-4 max-[850px]:flex-col max-[850px]:w-full">
                  <textarea
                    placeholder="Message"
                    rows="2"
                    columns="20"
                    className=" rounded-lg p-4 text-black outline-gray-300 border-gray-300 border w-full"
                  ></textarea>
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
