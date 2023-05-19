import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M10.25 9H21.625" stroke="#A9A29D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.25 2H21.625" stroke="#A9A29D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2.375 16H21.625" stroke="#A9A29D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.875 1.125L1.5 5.5L5.875 9.875" stroke="#A9A29D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    </Svg>
  );
};

export default Icon;
