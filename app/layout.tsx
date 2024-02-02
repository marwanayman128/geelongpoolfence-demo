import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Link } from "@mui/material";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geelong Pool Fence",
  description: "Pool & Spa Barrier Compliance Inspection Specialist",
  icons: {
    icon: "/icon/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
      <body className={inter.className + " overflow-x-hidden"}>
        <Link href="/book-now">
          <button className="bg-[#2499ED] z-50 fixed top-1/2 transform -translate-y-1/2 right-[-60px] -rotate-90 p-5 rounded-xl text-white flex gap-5 max-[700px]:hidden ">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={52}
                height={52}
                viewBox="0 0 52 52"
                fill="none"
              >
                <rect width={52} height={52} rx={8} fill="white" />
                <path
                  d="M12.25 38.5H39.75"
                  stroke="#2FA8FD"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.725 37.9375V34.1875"
                  stroke="#2FA8FD"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.75 25.8627C34.225 25.8627 33 27.0877 33 28.6127V31.4501C33 32.9751 34.225 34.2001 35.75 34.2001C37.275 34.2001 38.5 32.9751 38.5 31.4501V28.6127C38.5 27.0877 37.275 25.8627 35.75 25.8627Z"
                  stroke="#2FA8FD"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.8749 24.283C29.1236 23.9741 28.4458 23.5231 27.8749 22.9634V38.5001C27.8749 39.0523 28.3226 39.5001 28.8749 39.5001C29.4272 39.5001 29.8749 39.0523 29.8749 38.5001V24.283ZM27.6437 14.2757C26.9218 13.9172 26.0725 13.7626 25.1499 13.7626H17.3624C15.9607 13.7626 14.7264 14.1194 13.8502 15.0043C12.9759 15.8874 12.6249 17.1284 12.6249 18.5376V38.5001C12.6249 39.0523 13.0726 39.5001 13.6249 39.5001C14.1772 39.5001 14.6249 39.0523 14.6249 38.5001V18.5376C14.6249 17.4343 14.8989 16.7878 15.2715 16.4115C15.6423 16.037 16.2766 15.7626 17.3624 15.7626H25.1499C25.7317 15.7626 26.1826 15.8413 26.5324 15.9718C26.8097 15.3456 27.1868 14.7735 27.6437 14.2757Z"
                  fill="#2FA8FD"
                />
                <circle
                  cx="32.2499"
                  cy="18.5"
                  r="5.25"
                  stroke="#2FA8FD"
                  strokeWidth={2}
                />
                <path
                  d="M30.1666 19.4134L31.3017 20.5835L34.3333 17.4585"
                  stroke="#2FA8FD"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.2501 21.3125H24.4376"
                  stroke="#2FA8FD"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.2501 26H24.4376"
                  stroke="#2FA8FD"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.3125 38.5V33.8125"
                  stroke="#2FA8FD"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
            </span>
            <span className="text-md">
              Book <br /> Inspection
            </span>
          </button>
        </Link>

        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
