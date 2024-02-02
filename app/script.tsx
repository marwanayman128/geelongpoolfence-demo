// pages/page2.js
"use client";
import { usePathname } from "next/navigation";
import GoogleTag from "./api/google-tag.jsx";
import GoogleTagThankYou from "./api/google-tag-thankyou.jsx";

const Page2 = () => {
  const pathname = usePathname();

  const isHome = pathname === "/" || "/book-now";

  return <head>{isHome ? <GoogleTag /> :  <GoogleTagThankYou />}</head>;
};

export default Page2;
