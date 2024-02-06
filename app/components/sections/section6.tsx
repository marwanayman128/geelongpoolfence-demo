"use client";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  address: string;
};

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async (data: FormData) => {
    try {
      const rateLimitExceeded = checkRateLimit();
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
      if (!data.address) {
        throw new Error("Address is required");
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
      router.push("/thankyou");
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
      <div className="isolate bg-white px-6 py-32 max-[650px]:pt-6 max-[650px]:pb-12 lg:px-8 relative w-full justify-center max-[650px]:w-full ">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <br /> Book Now.
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
                htmlFor="address"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2.5">
                <input
                  type="address"
                  id="address"
                  autoComplete="address"
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    errors.address ? "border-red-500" : ""
                  }`}
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.address.message || "address is required"}
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="inspection"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Inspection
              </label>
              <div className="mt-2.5">
                <select
                  aria-label="Inspection"
                  className="w-full rounded-lg p-4 outline-gray-300 border-gray-300 border text-gray-400 "
                  name="inspection"
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
            {/*             <div className="sm:col-span-2">
              <div className="mt-2.5">
                <ReCAPTCHA
                  sitekey="6LecgwwpAAAAADXs9eQnQLSf3ieOUdE6uXr34Yjd"
                  ref={recaptchaRef}
                />
              </div>
            </div> */}
          </div>
          <div className="mt-10">
            <button
              disabled={isSubmitting ? true : false}
              type="submit"
              className="block w-full rounded-md bg-[#2FA8FD] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#6dbaf1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isSubmitting ? "Sending..." : "Book Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
