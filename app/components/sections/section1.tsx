"use client";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  address: string;
  inspection: string;
};
export default function Section1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      if (!data.name) {
        throw new Error("Name is required");
      }
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (!nameRegex.test(data.name)) {
        throw new Error("Invalid name format");
      }

      if (!data.email) {
        throw new Error("Email is required");
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        throw new Error("Invalid email address");
      }

      if (!data.message) {
        throw new Error("Message is required");
      }

      if (!data.phone) {
        throw new Error("Phone number is required");
      }

      const phoneNumberRegex = /^\d{10}$/;
      if (!phoneNumberRegex.test(data.phone)) {
        throw new Error("Invalid phone number");
      }

      if (!data.address) {
        throw new Error("Address is required");
      }

      if (!data.inspection) {
        throw new Error("Inspection is required");
      }

      const apiEndpoint = "/api/email";

      await toast.promise(
        fetch(apiEndpoint, {
          method: "POST",
          body: JSON.stringify(data),
        }).then(async (res) => {
          if (!res.ok) {
            const errorMessage = await res.text();
            throw new Error(errorMessage || "Failed to send message");
          }

          const responseData = await res.json();
          return responseData.message;
        }),
        {
          pending: "Sending...",
          success: "Message sent successfully!",
          error: "Failed to send message",
        }
      );
    } catch (error) {
      // Handle validation errors
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        console.error("Error submitting form:", error);
        toast.error("Error submitting form");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("/api/resend/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       alert("Data sent successfully");
  //     } else {
  //       alert("Error sending data from the form");
  //     }
  //   } catch (error) {
  //     console.error("Error sending data", error);
  //   }
  // };
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
              <h1 className="text-7xl font-bold leading-tight max-[1500px]:text-6xl max-[1100px]:text-5xl max-[500px]:text-4xl ">
                Pool & Spa{" "}
                <span className="text-blue-500 ">
                  Barrier <br /> Compliance
                </span>{" "}
                <br /> Inspection Specialist
              </h1>
              <div className="mt-10 text-2xl flex flex-col gap-4 max-[1100px]:text-lg">
                <div className="flex gap-4 items-center">
                  <CheckCircleOutlineIcon />
                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2499ED] to-[#ffffff]">
                    {" "}
                    Comprehensive property inspection
                  </h2>
                </div>
                <div className="flex gap-4">
                  <CheckCircleOutlineIcon />

                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2499ED] to-[#ffffff]">
                    {" "}
                    Same-day detailed report
                  </h2>
                </div>
                <div className="flex gap-4">
                  <CheckCircleOutlineIcon />

                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2499ED] to-[#ffffff]">
                    {" "}
                    Proven experience & knowledge
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-[600px] h-[auto] bg-white rounded-lg relative max-[850px]:m-auto max-[850px]:my-16 max-[700px]:w-full max-[850px]:h-auto">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#29A0F4] px-14 py-5 rounded-lg z-50 w-64">
                <h2 className="text-center font-bold">Book Inspection</h2>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col p-10 gap-4 my-5"
              >
                <div className="flex gap-4 max-[850px]:flex-col max-[850px]:w-full">
                  <input
                    aria-label="Name"
                    type="text"
                    placeholder="Name"
                    className={`rounded-lg p-4 text-black outline-gray-300 border-gray-300 border ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    {...register("name", { required: true })}
                  />
                  <input
                    aria-label="Phone"
                    type="text"
                    placeholder="Phone"
                    className={`rounded-lg p-4 text-black outline-gray-300 border-gray-300 border ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                    {...register("phone", { required: true })}
                  />
                </div>
                <div className="flex gap-4 max-[850px]:flex-col max-[850px]:w-full">
                  <input
                    aria-label="Email"
                    type="text"
                    placeholder="Email"
                    className={`rounded-lg p-4 text-black outline-gray-300 border-gray-300 border ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    {...register("email", { required: true })}
                  />
                  <input
                    aria-label="Address"
                    type="text"
                    placeholder="Address"
                    className={`rounded-lg p-4 text-black outline-gray-300 border-gray-300 border ${
                      errors.address ? "border-red-500" : ""
                    }`}
                    {...register("address", { required: true })}
                  />
                </div>
                <div className="flex gap-4 max-[850px]:flex-col max-[850px]:w-full">
                  <select
                    aria-label="Inspection"
                    className={`w-full rounded-lg p-4 outline-gray-300 border-gray-300 border text-gray-400 ${
                      errors.inspection ? "border-red-500" : ""
                    }`}
                    {...register("inspection", { required: true })}
                  >
                    <option className="text-black" value="Pre-Inspection">
                      Pre-Inspection
                    </option>
                    <option className="text-black" value="Inspection">
                      Inspection
                    </option>
                    <option className="text-black" value="Re-Inspection">
                      Re-Inspection
                    </option>
                  </select>
                </div>
                <div className="flex gap-4 max-[850px]:flex-col max-[850px]:w-full">
                  <textarea
                    aria-label="Message"
                    placeholder="Message"
                    rows={3}
                    className={`rounded-lg p-4 text-black outline-gray-300 border-gray-300 border w-full ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    {...register("message", { required: true })}
                  ></textarea>
                </div>

                <button
                  disabled={isSubmitting ? true : false}
                  type="submit"
                  className="bg-[#29A0F4] text-white rounded-lg p-4"
                >
                  {isSubmitting ? "Sending..." : "Book Now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
