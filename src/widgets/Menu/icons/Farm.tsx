import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <g clip-path="url(#clip0_76_7901)">
        <path d="M9.16666 14.1667H9.08333C8.97725 13.6442 8.77095 13.1473 8.47583 12.7033L8.53666 12.6425C8.68846 12.4853 8.77246 12.2748 8.77056 12.0563C8.76866 11.8378 8.68102 11.6288 8.52651 11.4743C8.37201 11.3198 8.163 11.2322 7.9445 11.2303C7.726 11.2284 7.5155 11.3124 7.35833 11.4642L7.2975 11.525C6.85335 11.2295 6.35612 11.0229 5.83333 10.9167V10.8333C5.83333 10.6123 5.74553 10.4004 5.58925 10.2441C5.43297 10.0878 5.22101 10 5 10C4.77898 10 4.56702 10.0878 4.41074 10.2441C4.25446 10.4004 4.16667 10.6123 4.16667 10.8333V10.9167C3.64423 11.0228 3.14729 11.2291 2.70333 11.5242L2.6425 11.4633C2.48533 11.3115 2.27483 11.2276 2.05633 11.2295C1.83783 11.2313 1.62882 11.319 1.47432 11.4735C1.31981 11.628 1.23217 11.837 1.23027 12.0555C1.22837 12.274 1.31237 12.4845 1.46417 12.6417L1.525 12.7025C1.22949 13.1467 1.0229 13.6439 0.916666 14.1667H0.833333C0.612319 14.1667 0.400358 14.2545 0.244078 14.4108C0.0877974 14.567 0 14.779 0 15C0 15.221 0.0877974 15.433 0.244078 15.5893C0.400358 15.7455 0.612319 15.8333 0.833333 15.8333H0.916666C1.02275 16.3558 1.22905 16.8527 1.52417 17.2967L1.46333 17.3575C1.31153 17.5147 1.22754 17.7252 1.22944 17.9437C1.23134 18.1622 1.31898 18.3712 1.47348 18.5257C1.62799 18.6802 1.837 18.7678 2.0555 18.7697C2.274 18.7716 2.4845 18.6876 2.64167 18.5358L2.7025 18.475C3.14665 18.7705 3.64388 18.9771 4.16667 19.0833V19.1667C4.16667 19.3877 4.25446 19.5997 4.41074 19.7559C4.56702 19.9122 4.77898 20 5 20C5.22101 20 5.43297 19.9122 5.58925 19.7559C5.74553 19.5997 5.83333 19.3877 5.83333 19.1667V19.0833C6.35577 18.9773 6.8527 18.771 7.29666 18.4758L7.3575 18.5367C7.51467 18.6885 7.72517 18.7725 7.94366 18.7706C8.16216 18.7687 8.37117 18.681 8.52568 18.5265C8.68019 18.372 8.76783 18.163 8.76972 17.9445C8.77162 17.726 8.68763 17.5155 8.53583 17.3583L8.475 17.2975C8.77051 16.8534 8.9771 16.3561 9.08333 15.8333H9.16666C9.38768 15.8333 9.59964 15.7455 9.75592 15.5893C9.9122 15.433 10 15.221 10 15C10 14.779 9.9122 14.567 9.75592 14.4108C9.59964 14.2545 9.38768 14.1667 9.16666 14.1667ZM5 17.5C4.33696 17.5 3.70107 17.2366 3.23223 16.7678C2.76339 16.2989 2.5 15.6631 2.5 15C2.5 14.337 2.76339 13.7011 3.23223 13.2322C3.70107 12.7634 4.33696 12.5 5 12.5C5.66304 12.5 6.29892 12.7634 6.76776 13.2322C7.23661 13.7011 7.5 14.337 7.5 15C7.5 15.6631 7.23661 16.2989 6.76776 16.7678C6.29892 17.2366 5.66304 17.5 5 17.5ZM20 10C20 9.11596 19.6488 8.26811 19.0237 7.64299C18.3986 7.01787 17.5507 6.66668 16.6667 6.66668V5.00002C16.6667 4.779 16.5789 4.56704 16.4226 4.41076C16.2663 4.25448 16.0543 4.16669 15.8333 4.16669C15.6123 4.16669 15.4004 4.25448 15.2441 4.41076C15.0878 4.56704 15 4.779 15 5.00002V6.66668H12.9617L10.0192 1.95835C9.64633 1.3575 9.12588 0.862084 8.50739 0.519289C7.8889 0.176495 7.19296 -0.00226843 6.48583 2.17306e-05H5C4.33696 2.17306e-05 3.70107 0.263414 3.23223 0.732254C2.76339 1.20109 2.5 1.83698 2.5 2.50002V6.66668C1.83696 6.66668 1.20107 6.93007 0.732233 7.39892C0.263392 7.86776 0 8.50364 0 9.16668C0 9.3877 0.0877974 9.59966 0.244078 9.75594C0.400358 9.91222 0.612319 10 0.833333 10C1.05435 10 1.26631 9.91222 1.42259 9.75594C1.57887 9.59966 1.66667 9.3877 1.66667 9.16668C1.66667 8.94567 1.75446 8.73371 1.91074 8.57743C2.06702 8.42115 2.27899 8.33335 2.5 8.33335H16.6667C16.9747 8.33698 17.2757 8.42538 17.5368 8.58886C17.7978 8.75234 18.0088 8.98457 18.1465 9.26007C18.2843 9.53557 18.3435 9.84369 18.3176 10.1506C18.2918 10.4576 18.1819 10.7514 18 11L16.7042 12.7275C11.0967 11.0608 9.57166 19.6442 15.4167 20C16.1496 19.9912 16.8641 19.7688 17.4725 19.36C18.081 18.9513 18.557 18.374 18.8423 17.6988C19.1277 17.0236 19.2099 16.2799 19.0789 15.5587C18.9479 14.8375 18.6095 14.1701 18.105 13.6383L19.3333 12C19.7649 11.4224 19.9987 10.721 20 10ZM4.16667 2.50002C4.16667 2.27901 4.25446 2.06704 4.41074 1.91076C4.56702 1.75448 4.77898 1.66669 5 1.66669H6.48583C6.9101 1.66534 7.32766 1.77262 7.69875 1.97829C8.06983 2.18396 8.3821 2.48119 8.60583 2.84169L11 6.66668H4.16667V2.50002ZM15.4167 18.3333C14.8641 18.3333 14.3342 18.1138 13.9435 17.7231C13.5528 17.3324 13.3333 16.8025 13.3333 16.25C13.3333 15.6975 13.5528 15.1676 13.9435 14.7769C14.3342 14.3862 14.8641 14.1667 15.4167 14.1667C15.9692 14.1667 16.4991 14.3862 16.8898 14.7769C17.2805 15.1676 17.5 15.6975 17.5 16.25C17.5 16.8025 17.2805 17.3324 16.8898 17.7231C16.4991 18.1138 15.9692 18.3333 15.4167 18.3333Z" />
      </g>
      <defs>
        <clipPath id="clip0_76_7901">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
