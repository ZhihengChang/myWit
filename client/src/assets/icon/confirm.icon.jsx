import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 493.464 493.464"
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
    <path fill={fill} d="M246.736,0C110.692,0,0.004,110.68,0.004,246.732c0,136.06,110.688,246.732,246.732,246.732
        c136.048,0,246.724-110.672,246.724-246.732C493.456,110.68,382.78,0,246.736,0z M360.524,208.716L230.98,338.268
        c-2.82,2.824-7.816,2.824-10.64,0l-86.908-86.912c-1.412-1.416-2.192-3.3-2.192-5.324c0.004-2.016,0.784-3.912,2.192-5.336
        l11.108-11.104c1.412-1.408,3.3-2.18,5.328-2.18c2.016,0,3.908,0.772,5.316,2.18l67.752,67.752c1.5,1.516,3.94,1.516,5.444,0
        l110.392-110.392c2.824-2.824,7.828-2.824,10.644,0l11.108,11.124c1.412,1.4,2.208,3.304,2.208,5.308
        C362.732,205.412,361.936,207.3,360.524,208.716z"/>
  </svg>
);

export default SVG;