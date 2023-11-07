'use client'
import React from "react";
import emailjs from '@emailjs/browser';
import { Alert } from "@mui/material";
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import React, { useRef, useState } from 'react'; // Import useRef and useState from React

export default function ContactSection() {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [open, setOpen] = React.useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0ddyb9l', 'template_2790ybp', form.current, '9sgOe7r-ELP1nMQZx')
      .then((result) => {
        console.log(result.text);

        if (result.text === 'OK') {
          setEmailSent(true);
        }
      })
      .catch((error) => {
        console.log(error.text);
      });

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
        <form ref={form} onSubmit={sendEmail}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
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
              type="submit"
              className="block w-full rounded-md bg-blue-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {"Let's talk"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
