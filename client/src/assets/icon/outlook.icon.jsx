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
  <path fill={fill} d="M496,112.011H288v-80c0-4.768-2.112-9.28-5.792-12.32c-3.648-3.04-8.544-4.352-13.152-3.392l-256,48
			C5.472,65.707,0,72.299,0,80.011v352c0,7.68,5.472,14.304,13.056,15.712l256,48c0.96,0.192,1.952,0.288,2.944,0.288
			c3.712,0,7.328-1.28,10.208-3.68c3.68-3.04,5.792-7.584,5.792-12.32v-80h208c8.832,0,16-7.168,16-16v-256
			C512,119.179,504.832,112.011,496,112.011z M144,368.011c-44.096,0-80-43.072-80-96c0-52.928,35.904-96,80-96s80,43.072,80,96
			C224,324.939,188.096,368.011,144,368.011z M288,144.011h161.376l-98.304,76.448L288,180.363V144.011z M480,368.011H288V218.283
			l55.392,35.232c2.624,1.664,5.632,2.496,8.608,2.496c3.456,0,6.944-1.12,9.824-3.36L480,160.715V368.011z"/>
      <ellipse fill={fill} cx="144" cy="272.01" rx="48" ry="64"/>
  </svg>
);

export default SVG;