import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
      <path
        stroke="#EAAA08"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.428 4.166v15.91M16.383 20.075V4.166M12.974 7.576l3.409-3.409 3.409 3.41M11.837 16.666l-3.409 3.41-3.409-3.41"
      ></path>
    </Svg>
  );
};

export default Icon;
