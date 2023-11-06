"use client";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
export default function FacebookButton() {
  return (
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className="Btnn"
      aria-label="Facebook"
    >
      <span className="svgContainer">
        <FacebookOutlinedIcon style={{ color: "white" }} />
      </span>
      <span className="BG-face"></span>
    </button>
  );
}
