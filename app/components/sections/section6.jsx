'use client'
import emailjs from '@emailjs/browser';
import { Alert } from "@mui/material";
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import React, { useRef, useState } from 'react'; // Import useRef and useState from React
import { useForm } from 'react-hook-form'; // Assuming you are using react-hook-form
import { toast } from "react-toastify";



export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef(null);
  const [emailSent, setEmailSent] = useState(false); // Add state for emailSent
  const [open, setOpen] = useState(true); // Add state for open
  const onSubmit = async (data) => {
    try {
      const rateLimitExceeded = checkRateLimit();
      if (rateLimitExceeded) {
        throw new Error("Too many requests. Please try again later.");
      }
      setIsSubmitting(true);
      const recaptchaValue = recaptchaRef.current?.getValue();
      if (!recaptchaValue) {
        throw new Error("reCAPTCHA verification failed.");
      }
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
  const checkRateLimit = () => {
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
  const incrementRequestCount = () => {
    const requestCount =
      parseInt(localStorage.getItem("requestCount") || "0", 10) + 1;
    localStorage.setItem("requestCount", requestCount.toString());
    localStorage.setItem(
      "lastRequestTimestamp",
      new Date().getTime().toString()
    );
  };
  return (
    <>
      {emailSent && (

        <Collapse className="fixed top-10 right-10 bg-green-500 text-white p-5 rounded-md z-50" // Adjust styling as needed
          in={open}>
          <Alert
            className="fixed top-10 right-10 bg-green-500 text-white p-2 rounded-md z-50" // Adjust styling as needed

            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Message sent successfully!
          </Alert>
        </Collapse>
      )}

      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Book Now
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-12 max-w-xl sm:mt-20"
        >
          <div className="sm:col-span-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="user_name"
                  id="first-name"
                  autoComplete="given-name"
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
                  name="user_email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  name="phone_number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Inspection
              </label>
              <div className="relative mt-2.5">
                <select
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue="Option 1"
                  name="inspection"
                >
                  <option value="" disabled>
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
            <div className="flex gap-x-4 sm:col-span-2">
              <label
                className="text-sm leading-6 text-gray-600"
                id="switch-1-label"
              >
                Servicing the Greater Geelong, Surfcoast, Borough of
                Queenscliff, Western suburbs of Melbourne, Colac, Warrnambool
                and surrounding regions.
              </label>
            </div>
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
    </>
  );
}
