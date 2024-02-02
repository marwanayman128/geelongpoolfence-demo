// pages/page2.js
"use client";
import { usePathname } from "next/navigation";
import GoogleTag from "./api/google-tag.jsx";
import GoogleTagThankYou from "./api/google-tag-thankyou.jsx";

const Page2 = () => {
  const pathname = usePathname();

  const isThankYouPage = pathname === "/thankyou";
  console.log("isThankYouPage", isThankYouPage);

  return <head>{isThankYouPage ? <GoogleTagThankYou /> : <GoogleTag />}</head>;
};

export default Page2;
