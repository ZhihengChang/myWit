import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 512 512"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M257,0C116.39,0,0,114.39,0,255s116.39,257,257,257s255-116.39,255-257S397.61,0,257,0z M287,392c0,16.54-13.47,30-30,30
      c-16.54,0-30-13.46-30-30V240c0-16.54,13.46-30,30-30c16.53,0,30,13.46,30,30V392z M257,150c-16.54,0-30-13.46-30-30
      s13.46-30,30-30c16.53,0,30,13.46,30,30S273.53,150,257,150z"
    />
  </svg>
);

export default SVG;