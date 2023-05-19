import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 320 320" {...props}>
      <circle cx="48" cy="48" r="48" fill="white"></circle>
      <path
        id="形状结合"
        fill="rgb(0,0,0)"
        d="M30,11.15,71.19,52.32A115,115,0,0,1,258,138.67L258,142V276.85l-41.19-41.16A115,115,0,0,1,30.05,149.34L30,146Zm28.17,68V146a86.79,86.79,0,0,0,135.15,72l2.23-1.55L63.67,84.65ZM94.68,70l-2.23,1.55L224.33,203.36l5.5,5.5V142A86.79,86.79,0,0,0,94.68,70Z"
      ></path>
    </Svg>
  );
};

export default Icon;
