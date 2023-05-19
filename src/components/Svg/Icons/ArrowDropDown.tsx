import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.0331 1.1574C10.9634 1.0871 10.8804 1.0313 10.789 0.993227C10.6976 0.95515 10.5996 0.935547 10.5006 0.935547C10.4016 0.935547 10.3036 0.95515 10.2122 0.993227C10.1208 1.0313 10.0378 1.0871 9.9681 1.1574L6.5331 4.5924C6.46338 4.66269 6.38043 4.71849 6.28903 4.75656C6.19764 4.79464 6.09961 4.81424 6.0006 4.81424C5.90159 4.81424 5.80356 4.79464 5.71217 4.75656C5.62077 4.71849 5.53782 4.66269 5.4681 4.5924L2.0331 1.1574C1.96337 1.0871 1.88042 1.0313 1.78903 0.993227C1.69763 0.95515 1.5996 0.935547 1.5006 0.935547C1.40159 0.935547 1.30356 0.95515 1.21216 0.993227C1.12077 1.0313 1.03782 1.0871 0.968095 1.1574C0.828406 1.29792 0.75 1.48801 0.75 1.68615C0.75 1.88428 0.828406 2.07437 0.968095 2.2149L4.4106 5.6574C4.83247 6.07875 5.40435 6.31542 6.0006 6.31542C6.59685 6.31542 7.16873 6.07875 7.5906 5.6574L11.0331 2.2149C11.1728 2.07437 11.2512 1.88428 11.2512 1.68615C11.2512 1.48801 11.1728 1.29792 11.0331 1.1574Z"
        fill="#79716B"
      />
    </Svg>
  );
};

export default Icon;
