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
   <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11412063683"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(...args: any[]): void {
                window.dataLayer.push(args);
              }
              gtag('js', new Date());
              gtag('config', 'AW-11412063683');
            `,
          }}
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('config', 'AW-11412063683/wBg4CMGT4vYYEMOL2cEq', {
                'phone_conversion_number': '0404 494 904'
              });
            `,
          }}
        ></script>
      </head>
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
