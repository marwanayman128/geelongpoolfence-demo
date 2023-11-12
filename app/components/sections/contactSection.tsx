"use client";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

export type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const onSubmit = async (data: FormData) => {
    try {
      const rateLimitExceeded = checkRateLimit();
      const recaptchaValue = await recaptchaRef.current?.execute();
      if (rateLimitExceeded) {
        throw new Error("Too many requests. Please try again later.");
      }
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
      if (!recaptchaValue) {
        throw new Error("reCAPTCHA verification failed.");
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
      incrementRequestCount();
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
  const checkRateLimit = (): boolean => {
    const requestCount = parseInt(
      localStorage.getItem("requestCount") || "0",
      10
    );
    const lastRequestTimestamp = parseInt(
      localStorage.getItem("lastRequestTimestamp") || "0",
      10
    );
    const currentTime = new Date().getTime();

    // Check if the request count exceeds the limit
    if (
      requestCount >= 3 &&
      currentTime - lastRequestTimestamp < 15 * 60 * 1000
    ) {
      return true; // Rate limit exceeded
    }

    return false; // Rate limit not exceeded
  };
  const incrementRequestCount = (): void => {
    const requestCount =
      parseInt(localStorage.getItem("requestCount") || "0", 10) + 1;
    localStorage.setItem("requestCount", requestCount.toString());
    localStorage.setItem(
      "lastRequestTimestamp",
      new Date().getTime().toString()
    );
  };
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-between items-center max-[650px]:flex-col  ">
      <div className="px-6 py-24 sm:py-32 lg:px-8 w-1/2 flex flex-col justify-center gap-5 max-[650px]:w-full ml-32 max-[1650px]:ml-0">
        <h1 className="text-white text-5xl font-bold">Contact Us</h1>
        <p className="text-white font-bold ">
          Servicing the Greater Geelong, Surfcoast, Borough of Queenscliff,
          Western suburbs of Melbourne, Colac, Warrnambool and surrounding
          regions.
        </p>

        {/* <h2 className="text-white text-md">
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
        </h2> */}
        <h2 className="text-white text-md">
          <a href="tel:0404494904">
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
          </a>
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
        {/* <div className="flex gap-5 flex-col h-full  justify-end  min-w-fit  m-auto h-44  relative min-[500px]:hidden">
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
        </div> */}
        {/* <div className="flex gap-5 flex-col  mt-5  max-[500px]:hidden">
          <h1 className="text-white text-2xl font-bold  z-40">Follow us</h1>
          <div className=" pt-1 flex gap-5 ">
            {" "}
            <Insta />
            <Face />
            <Twitter />
          </div>
        </div> */}
      </div>
      <div className="isolate bg-white px-6 py-32 max-[650px]:pt-6 max-[650px]:pb-12 lg:px-8 relative w-1/2 justify-center max-[650px]:w-full ">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <br /> Let us know how to get back to you.
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Full name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="first-name"
                  autoComplete="given-name"
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message || "Name is required"}
                  </p>
                )}
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
                  id="email"
                  autoComplete="email"
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message || "Email is required"}
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone
              </label>
              <div className="mt-2.5">
                <input
                  type="phone"
                  id="phone"
                  autoComplete="email"
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message || "Email is required"}
                  </p>
                )}
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
                  id="message"
                  rows={4}
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message || "Message is required"}
                  </p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <ReCAPTCHA
                  sitekey="6LfwcQwpAAAAAPAkKVqFWurMB5hUF1UogWF6ekZ7"
                  ref={recaptchaRef}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              disabled={isSubmitting ? true : false}
              type="submit"
              className="block w-full rounded-md bg-[#2FA8FD] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#6dbaf1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
