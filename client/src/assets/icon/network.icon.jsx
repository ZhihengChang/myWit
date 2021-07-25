import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 414.065 414.065"
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
        d="M271.995,223.747l41.409,8.219c0.429,20.311,17.243,36.429,37.554,36s36.429-17.243,36-37.554
        c-0.429-20.311-17.243-36.429-37.554-36c-14.264,0.301-27.068,8.824-32.851,21.867l-42.483-8.432
        c-0.044-15.546-6.095-30.474-16.887-41.664l54.987-77.678c23.193,11.028,50.934,1.166,61.962-22.027
        c11.028-23.193,1.166-50.934-22.027-61.962c-23.193-11.028-50.934-1.166-61.962,22.027c-8.418,17.705-4.829,38.787,8.975,52.708
        l-54.456,76.927c-25.044-15.041-57.264-9.986-76.5,12l-71.491-55.521c9.384-18.063,2.349-40.314-15.714-49.698
        c-18.063-9.384-40.314-2.349-49.698,15.714c-9.384,18.063-2.349,40.314,15.714,49.698c12.692,6.594,28.053,5.25,39.406-3.448
        l72.87,56.591c-12.108,24.737-5.937,54.533,15,72.426l-44.285,62.613c-23.445-14.228-53.986-6.756-68.214,16.69
        c-14.228,23.445-6.756,53.986,16.69,68.214c23.445,14.228,53.986,6.756,68.214-16.69c11.057-18.221,9.254-41.466-4.482-57.763
        l45.48-64.32c15.56,7.398,33.538,7.802,49.414,1.109l53.963,79.716c-15.871,16.78-15.134,43.249,1.646,59.12
        c16.78,15.871,43.249,15.134,59.12-1.646c15.871-16.78,15.134-43.249-1.646-59.12c-12.373-11.703-30.607-14.734-46.1-7.662
        l-53.185-78.568C261.163,247.563,268.577,236.378,271.995,223.747z"
    />
  </svg>
);

export default SVG;