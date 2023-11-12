import Image from "next/image";
import Section1 from "@/app/components/sections/section1";
import Section2 from "@/app/components/sections/section2";
import Section3 from "@/app/components/sections/section3";
import Section4 from "@/app/components/sections/section4";
import Section5 from "@/app/components/sections/section5";
import Contact from "@/app/components/sections/contactSection";
import ScrollToTop from "@/app/components/scrollToTop/ScrollToTop";
export default function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section4 />
      <Section3 />
      <Section5 />
      <Contact />
      <ScrollToTop />
    </>
  );
}
