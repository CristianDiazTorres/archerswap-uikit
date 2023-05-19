import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15.3337 8.49984L13.707 6.71734L13.9337 4.35984L11.527 3.83595L10.267 1.7915L8.00033 2.72428L5.73366 1.7915L4.47366 3.82956L2.06699 4.34706L2.29366 6.71095L0.666992 8.49984L2.29366 10.2823L2.06699 12.6462L4.47366 13.1701L5.73366 15.2082L8.00033 14.269L10.267 15.2018L11.527 13.1637L13.9337 12.6398L13.707 10.2823L15.3337 8.49984ZM6.25366 11.0618L4.66699 9.52845C4.40699 9.27928 4.40699 8.87678 4.66699 8.62761L4.71366 8.58289C4.97366 8.33373 5.40033 8.33373 5.66033 8.58289L6.73366 9.61789L10.167 6.32123C10.427 6.07206 10.8537 6.07206 11.1137 6.32123L11.1603 6.36595C11.4203 6.61512 11.4203 7.01761 11.1603 7.26678L7.21366 11.0618C6.94032 11.3109 6.52033 11.3109 6.25366 11.0618Z"
        fill="url(#paint0_linear_75_82259)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_82259"
          x1="15.3337"
          y1="1.7915"
          x2="-0.427638"
          y2="3.23211"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#ED952E" />
          <stop offset="1" stop-color="#F7CE47" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
