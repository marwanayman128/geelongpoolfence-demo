"use client";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
export default function FacebookButton() {
  return (
    <button className="Btnn">
      <span className="svgContainer">
        <FacebookOutlinedIcon style={{ color: "white" }} />
      </span>
      <span className="BG-face"></span>
    </button>
  );
}
