'use client';
import { KeyboardArrowUp } from "@mui/icons-material";
import { Zoom, useScrollTrigger } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const ScrollToTop = () => {
  return (
    <>

      <Zoom in={useScrollTrigger({ threshold: 100 })}>
        <div
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          variant="extended"
          size="small"

          className="bg-[#2499ED] hover:bg-[#000000] fixed bottom-9 right-9 rounded-full w-12 h-12 z-50"
          aria-label="add"
        >
          <KeyboardArrowUp fontSize="medium" style={{ color: "white", margin: "auto", width: "50%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} />
        </div>
      </Zoom>
        <a className="bg-[#2499ED] hover:bg-[#000000] fixed bottom-24 right-9 rounded-full w-12 h-12 z-50"
          href="tel:0404494904">
          <LocalPhoneIcon fontSize="medium" style={{ color: "white", margin: "auto", width: "50%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} />
        </a>

    </>
  );
};

export default ScrollToTop;
