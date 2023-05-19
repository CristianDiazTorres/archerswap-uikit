import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 11.75C10.0711 11.75 11.75 10.0711 11.75 8C11.75 5.92893 10.0711 4.25 8 4.25C5.92893 4.25 4.25 5.92893 4.25 8C4.25 10.0711 5.92893 11.75 8 11.75Z"
        stroke="#F1CF1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 2.25V1.75" stroke="#F1CF1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3.93106 3.93106L3.58105 3.58105"
        stroke="#F1CF1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2.25 8H1.75" stroke="#F1CF1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3.93106 12.0688L3.58105 12.4188"
        stroke="#F1CF1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 13.75V14.25" stroke="#F1CF1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12.0684 12.0688L12.4184 12.4188"
        stroke="#F1CF1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13.75 8H14.25" stroke="#F1CF1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12.0684 3.93106L12.4184 3.58105"
        stroke="#F1CF1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
