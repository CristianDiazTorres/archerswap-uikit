import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <g clip-path="url(#clip0_76_7923)">
        <path d="M1.56546 14.8986C0.841432 15.8983 0.321785 17.031 0.0362899 18.2319C-0.018245 18.471 -0.0112181 18.72 0.0567128 18.9556C0.124644 19.1913 0.251256 19.4058 0.424697 19.5791C0.598138 19.7525 0.812733 19.879 1.04839 19.9468C1.28405 20.0147 1.53307 20.0216 1.77212 19.9669C2.97116 19.681 4.10213 19.1616 5.10046 18.4386C5.56989 17.9698 5.83388 17.3338 5.83435 16.6703C5.83481 16.0069 5.57173 15.3705 5.10296 14.9011C4.63419 14.4316 3.99813 14.1677 3.33472 14.1672C2.67131 14.1667 2.03489 14.4298 1.56546 14.8986ZM3.92212 17.2561C3.25046 17.6863 2.5209 18.0185 1.75546 18.2427C1.98002 17.4774 2.31223 16.7479 2.74212 16.0761C2.89929 15.9243 3.10979 15.8403 3.32829 15.8422C3.54679 15.8441 3.7558 15.9317 3.9103 16.0862C4.06481 16.2407 4.15245 16.4497 4.15435 16.6682C4.15625 16.8867 4.07225 17.0972 3.92046 17.2544L3.92212 17.2561ZM14.9996 7.08357C14.9996 7.6361 14.7801 8.16601 14.3894 8.55671C13.9987 8.94741 13.4688 9.1669 12.9163 9.1669C12.3638 9.1669 11.8338 8.94741 11.4431 8.55671C11.0524 8.16601 10.833 7.6361 10.833 7.08357C10.833 6.53103 11.0524 6.00113 11.4431 5.61043C11.8338 5.21973 12.3638 5.00023 12.9163 5.00023C13.4688 5.00023 13.9987 5.21973 14.3894 5.61043C14.7801 6.00113 14.9996 6.53103 14.9996 7.08357ZM17.4763 0.000228064C15.4932 -0.0115608 13.534 0.433834 11.7509 1.30184C9.96776 2.16984 8.40866 3.4371 7.19462 5.00523C5.87057 5.05101 4.57193 5.38157 3.38712 5.9744C2.01314 6.60709 0.89149 7.68296 0.202123 9.0294C0.0403478 9.40504 -0.0253185 9.81506 0.011054 10.2224C0.0474265 10.6298 0.184692 11.0217 0.410456 11.3627C0.638375 11.7121 0.949862 11.9991 1.3167 12.1978C1.68354 12.3964 2.09413 12.5003 2.51129 12.5002H4.58296C5.35536 12.504 6.09506 12.8124 6.64123 13.3586C7.18741 13.9048 7.4959 14.6445 7.49962 15.4169V17.4886C7.49933 17.9056 7.60304 18.3161 7.80137 18.6829C7.99969 19.0497 8.28637 19.3613 8.63545 19.5894C8.97649 19.8152 9.36839 19.9524 9.77576 19.9888C10.1831 20.0252 10.5932 19.9595 10.9688 19.7977C12.3152 19.1084 13.3911 17.9867 14.0238 16.6127C14.6166 15.4279 14.9472 14.1293 14.993 12.8052C16.5636 11.5881 17.8324 10.0252 18.7007 8.23791C19.5691 6.45065 20.0135 4.48722 19.9996 2.50023C19.9986 2.17024 19.9325 1.84368 19.8051 1.53929C19.6776 1.23489 19.4914 0.958648 19.2569 0.726392C19.0225 0.494135 18.7446 0.310436 18.439 0.185825C18.1334 0.0612139 17.8063 -0.00185712 17.4763 0.000228064ZM3.62129 10.8336H2.51129C2.37037 10.8347 2.23148 10.8 2.1076 10.7328C1.98373 10.6656 1.87891 10.5681 1.80296 10.4494C1.72834 10.3392 1.68273 10.2119 1.67035 10.0793C1.65797 9.94676 1.67922 9.81323 1.73212 9.69107C2.26908 8.707 3.11266 7.92516 4.13462 7.4644C4.66265 7.19965 5.22013 6.99825 5.79545 6.8644C4.96715 8.12802 4.24016 9.45522 3.62129 10.8336ZM12.538 15.8652C12.0772 16.8869 11.2957 17.7304 10.3121 18.2677C10.1898 18.3207 10.0562 18.342 9.92346 18.3296C9.79076 18.3172 9.66333 18.2716 9.55295 18.1969C9.43425 18.121 9.33675 18.0161 9.26956 17.8923C9.20238 17.7684 9.16771 17.6295 9.16879 17.4886V16.3786C10.5471 15.7597 11.8743 15.0327 13.138 14.2044C13.0033 14.7798 12.8011 15.3373 12.5355 15.8652H12.538ZM12.6505 12.5152C11.5228 13.2985 10.3323 13.9872 9.09129 14.5744C8.92182 13.6645 8.48083 12.8272 7.82634 12.1727C7.17186 11.5182 6.33456 11.0772 5.42462 10.9077C6.01228 9.66779 6.70128 8.47848 7.48462 7.3519C10.2913 3.4369 13.1996 1.7894 17.4996 1.6669C17.7166 1.66681 17.9251 1.7514 18.0808 1.90267C18.2364 2.05394 18.3269 2.25995 18.333 2.4769C18.2105 6.80023 16.563 9.70857 12.648 12.5152H12.6505Z" />
      </g>
      <defs>
        <clipPath id="clip0_76_7923">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;