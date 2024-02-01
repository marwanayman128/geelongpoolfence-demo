"use client";
import Home from "@mui/icons-material/Home";
import Head from "next/head";

const ThankYouPage = () => {
  return (
    <>
      <Head>
        {/* Google Analytics script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11412063683"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11412063683');
            gtag('config', 'AW-11412063683/wBg4CMGT4vYYEMOL2cEq', {
              'phone_conversion_number': '0404 494 904'
            });
            gtag('event', 'conversion', {'send_to': 'AW-11412063683/-n9ZCO7e3fYYEMOL2cEq'});
          `,
          }}
        />
      </Head>
      <div className="relative  h-[90vh]  w-full overflow-hidden ">
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
          <div className="flex justify-between  max-[850px]:flex-col  items-center">
            <div className=" rounded-lg relative max-[850px]:m-auto max-[850px]:my-16 max-[700px]:w-full max-[850px]:h-auto flex flex-col justify-center items-center">
              <h1 className="text-7xl font-bold leading-tight max-[1500px]:text-6xl max-[1100px]:text-5xl max-[500px]:text-4xl text-center">
                Thank You{" "}
              </h1>
              <h2 className="text-center pt-5">
                We will get back to you shortly
              </h2>
              <a className="mt-5" href="/">
                <button
                  type="button"
                  className="text-white bg-[#2499ED] hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  flex   items-center gap-2"
                >
                  <Home />
                  <h1 className="text-lg">Back to Home</h1>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ThankYouPage;
