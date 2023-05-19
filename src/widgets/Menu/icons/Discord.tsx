import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
      <path d="M15.7761 4.70143C14.7136 4.21393 13.5747 3.8549 12.3837 3.64935C12.3622 3.64518 12.3407 3.6556 12.3289 3.67504C12.1823 3.93546 12.0198 4.27574 11.9066 4.5424C10.6254 4.35074 9.35108 4.35074 8.09622 4.5424C7.98302 4.26949 7.81427 3.93546 7.66774 3.67504C7.65594 3.6556 7.63441 3.64588 7.61288 3.64935C6.42261 3.85421 5.28372 4.21324 4.22052 4.70143C4.2115 4.7049 4.20316 4.71185 4.1983 4.72018C2.03789 7.94796 1.44553 11.0966 1.7358 14.2063C1.73719 14.2216 1.74552 14.2361 1.75733 14.2452C3.18302 15.2924 4.56358 15.9278 5.91913 16.3486C5.94066 16.3556 5.96358 16.3473 5.97747 16.3292C6.2983 15.8917 6.58372 15.4299 6.82886 14.9445C6.84344 14.916 6.82955 14.882 6.79969 14.8709C6.34622 14.6986 5.91497 14.4889 5.49969 14.2514C5.46705 14.232 5.46427 14.1855 5.49413 14.1625C5.58163 14.0973 5.66913 14.0292 5.75247 13.9605C5.76775 13.948 5.78858 13.9452 5.80663 13.9535C8.53441 15.1986 11.4872 15.1986 14.1823 13.9535C14.2004 13.9452 14.2212 13.9473 14.2372 13.9605C14.3205 14.0292 14.408 14.098 14.4962 14.1632C14.5268 14.1855 14.5247 14.2327 14.4914 14.2521C14.0761 14.4945 13.6448 14.7 13.1907 14.8709C13.1608 14.882 13.1483 14.9167 13.1622 14.9452C13.4122 15.4299 13.6983 15.8917 14.0129 16.3292C14.0261 16.348 14.0497 16.3556 14.0712 16.3493C15.433 15.9278 16.8143 15.2924 18.2393 14.2459C18.2518 14.2368 18.2594 14.223 18.2608 14.2077C18.608 10.6125 17.6789 7.48962 15.7969 4.72157C15.7934 4.71185 15.7851 4.7049 15.7761 4.70143ZM7.2365 12.3132C6.41497 12.3132 5.73858 11.5591 5.73858 10.6334C5.73858 9.70768 6.40177 8.95351 7.2365 8.95351C8.07747 8.95351 8.74761 9.71393 8.73441 10.6334C8.73441 11.5598 8.07052 12.3132 7.2365 12.3132ZM12.7747 12.3132C11.9539 12.3132 11.2768 11.5591 11.2768 10.6334C11.2768 9.70768 11.94 8.95351 12.7747 8.95351C13.6157 8.95351 14.2858 9.71393 14.2726 10.6334C14.2726 11.5598 13.6157 12.3132 12.7747 12.3132Z" />
    </Svg>
  );
};

export default Icon;