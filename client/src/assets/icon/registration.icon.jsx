import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 64 64"
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
  <path fill={fill} d="M32,12V11H22v1a5,5,0,0,0,.1,1h9.8A5,5,0,0,0,32,12Z"/>
  <path fill={fill} d="M39.1,39A12.915,12.915,0,0,1,43,37.363V15H33.315a6.985,6.985,0,0,1-12.63,0H11V53H33.363A12.961,12.961,0,0,1,33,50c0-.338.025-.669.051-1H13V47H33.363A12.985,12.985,0,0,1,34,45H13V43H35.063a13.052,13.052,0,0,1,1.578-2H13V39ZM13,23H41v2H13Zm0,4H41v2H13Zm0,4H41v2H13Zm0,4H41v2H13Z"/>
  <path fill={fill} d="M27,17a4.977,4.977,0,0,0,3.974-2H23.026A4.977,4.977,0,0,0,27,17Z"/>
  <path fill={fill} d="M36,3H18V9H36ZM22,7H20V5h2ZM34,7H32V5h2Z"/>
  <path fill={fill} d="M34,12a7.026,7.026,0,0,1-.08,1H44a1,1,0,0,1,1,1V37.051c.331-.026.662-.051,1-.051s.669.025,1,.051V7H38v3a1,1,0,0,1-1,1H34Z"/>
  <path fill={fill} d="M10,55a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1H20.08A7.026,7.026,0,0,1,20,12V11H17a1,1,0,0,1-1-1V7H7V59H36.641A13.013,13.013,0,0,1,34,55Z"/>
  <path fill={fill} d="M46,39A11,11,0,1,0,57,50,11.013,11.013,0,0,0,46,39ZM43,56H40V53L50,43l3,3Z"/>
  </svg>
);

export default SVG;