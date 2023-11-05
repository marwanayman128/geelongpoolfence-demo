import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function section5() {
  return (
    <>
      <div className=" p-10 pt-24 flex flex-col justify-center items-center backgroundHeroSectionImage ">
        <h1 className="text-white text-center text-5xl font-bold">
          Services & Pricing
        </h1>
        <div className="w-full flex  justify-center items-center  text-black my-20 gap-5 max-[900px]:flex-col">
          {/* Step 2 */}
          <div className="max-w-[400px] min-w-[300px] p-4 bg-indigo-500 shadow-lg rounded-2xl dark:bg-[#ffffff]">
            <div className="flex items-center justify-between text-black max-[500px]:flex-col">
              <p className="mb-4 text-4xl font-medium">Re-Inspection</p>
              <p className="flex flex-col text-3xl font-bold">$150</p>
            </div>
            <p className="mt-4 text-black text-md">Plan include :</p>
            <ul className="w-full mt-6 mb-6 text-sm text-black">
              <li className="mb-3 flex items-center ">
                <CheckCircleIcon className="w-6 h-6 mr-2" />
                After the inspection, you have 60 days to rectify non-compliant
                elements.
              </li>
              <li className="mb-3 flex items-center ">
                <CheckCircleIcon className="w-6 h-6 mr-2" />
                Provides ample time for compliance
              </li>
              <li className="mb-3 flex items-center ">
                <CheckCircleIcon className="w-6 h-6 mr-2" />
                {
                  "Upon compliance, you'll receive a Form 23 'Certificate of Compliance"
                }
              </li>
              <li className="mb-3 flex items-center ">
                <CheckCircleIcon className="w-6 h-6 mr-2" />
                {
                  "Within 30 days, submit the 'Certificate of Compliance' to your local council."
                }
              </li>
              <li className="mb-3 flex items-center ">
                <CheckCircleIcon className="w-6 h-6 mr-2" />
                {
                  "Your next certificate will be due in 4 years, with reminders sent in advance."
                }
              </li>
            </ul>
            <button
              type="button"
              className="w-full px-3 py-3 text-sm text-white bg-black rounded-lg shadow hover:bg-[#2FA8FD] "
            >
              Book Now
            </button>
          </div>
          {/* Step 3 */}
          <div className="max-w-[400px] min-w-[300px] p-4 bg-indigo-500 shadow-lg rounded-2xl dark:bg-[#ffffff]">
            <div className="flex items-center justify-between text-black max-[500px]:flex-col">
              <p className="mb-4 text-4xl font-medium">
                Inspection (Compulsory)
              </p>
              <p className="flex flex-col text-3xl font-bold">$295</p>
            </div>
            <p className="mt-4 text-black text-md">Plan include :</p>
            <ul className="w-full mt-6 mb-6 text-sm text-black">
              <li className="mb-3 flex items-center ">
                <CheckCircleIcon className="w-6 h-6 mr-2" />
                Complete barrier inspection for your pool or spa.{" "}
              </li>
              <li className="mb-3 flex items-center ">
                <CheckCircleIcon className="w-6 h-6 mr-2" />

                {
                  "If the barrier is compliant, a Form 23 'Certificate of Compliance' will be issued along with a full report."
                }
              </li>
              <li className="mb-3 flex items-center ">
                <CheckCircleIcon className="w-6 h-6 mr-2" />
                {
                  "If there are rectification works needed to bring your barrier into compliance, a 'Notice of Non-Compliance' will be issued."
                }{" "}
              </li>
              <li className="mb-3 flex items-center ">
                <CheckCircleIcon className="w-6 h-6 mr-2" />
                {
                  "You'll receive a detailed report with photographs on how to rectify the non-compliance items."
                }{" "}
              </li>
              <li className="mb-3 flex items-center ">
                <CheckCircleIcon className="w-6 h-6 mr-2" />
                {
                  "A re-inspection is required within 60 days after this initial inspection"
                }{" "}
              </li>
              <li className="mb-3 flex items-center ">
                <CheckCircleIcon className="w-6 h-6 mr-2" />
                {
                  "If you require more time for compliance, consider the Pre-inspection Report as a viable option."
                }{" "}
              </li>
            </ul>
            <button
              type="button"
              className="w-full px-3 py-3 text-sm text-white bg-black rounded-lg shadow hover:bg-[#2FA8FD] "
            >
              Book Now
            </button>
          </div>

          {/* Step 1 */}
          <div className="max-w-[400px]  min-w-[300px] p-4 bg-indigo-500 shadow-lg rounded-2xl dark:bg-[#ffffff]">
            <div className="flex items-center justify-between text-black max-[500px]:flex-col">
              <p className="mb-4 text-4xl font-medium">Pre-Inspection Report</p>
              <p className="flex flex-col text-3xl font-bold">$220</p>
            </div>
            <p className="mt-4 text-black text-md">Plan include :</p>
            <ul className="w-full mt-6 mb-6 text-sm text-black">
              <li className="mb-3 flex items-center ">
                <CheckCircleIcon className="w-6 h-6 mr-2" />
                Comprehensive and detailed report with photographs
              </li>
              <li className="mb-3 flex items-center ">
                <CheckCircleIcon className="w-6 h-6 mr-2" />
                Provides ample time for compliance
              </li>
              <li className="mb-3 flex items-center ">
                <CheckCircleIcon className="w-6 h-6 mr-2" />
                Allows you to bring your barrier into compliance
              </li>
              <li className="mb-3 flex items-center ">
                <CheckCircleIcon className="w-6 h-6 mr-2" />
                Ensures preparedness for the compulsory inspection
              </li>
            </ul>
            <button
              type="button"
              className="w-full px-3 py-3 text-sm text-white bg-black rounded-lg shadow hover:bg-[#2FA8FD] "
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
