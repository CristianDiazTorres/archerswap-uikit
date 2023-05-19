import React from "react";
import { renderWithTheme } from "../../testHelpers";
import FallingBunnies from "../../components/FallingBunnies/FallingBunnies";

beforeEach(() => {
  jest.spyOn(global.Math, "random").mockReturnValue(0.5);
});

afterEach(() => {
  jest.spyOn(global.Math, "random").mockRestore();
});

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<FallingBunnies count={1} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div>
        <div
          class="sc-gsDJrp cSNsup"
        >
          <svg
            class="sc-bdvvaa jjNFgY"
            color="text"
            height="32"
            viewBox="0 0 42 35"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.2436 13.4146C32.9551 13.4146 31.6653 13.4328 30.3768 13.4041C29.95 13.395 29.79 13.5517 29.7099 13.933C29.4325 15.2716 29.1457 16.6101 28.8336 17.9408C28.7282 18.3901 28.8616 18.5011 29.3111 18.4972C31.2225 18.4776 33.1339 18.4998 35.0452 18.4815C35.4854 18.4776 35.6041 18.5533 35.4921 19.0208C35.0666 20.7956 34.6651 22.5768 34.3183 24.3672C34.2249 24.8465 34.0102 24.8896 33.6087 24.887C31.72 24.8726 29.83 24.8935 27.9413 24.8713C27.4918 24.8661 27.2824 24.9601 27.181 25.4342C26.5448 28.4064 25.8539 31.3682 25.2243 34.3431C25.1149 34.8576 24.9228 35.0026 24.404 35C17.0039 34.9647 9.6039 34.9503 2.20385 34.9229C1.60497 34.9203 1.00742 34.8537 0.40853 34.8341C0.0443961 34.8224 -0.0503052 34.6461 0.023055 34.3274C0.44721 32.4848 0.668625 30.6095 0.971403 28.7473C1.03276 28.3672 1.19949 28.2575 1.58496 28.2654C2.76273 28.2876 3.94049 28.2719 5.11826 28.2628C9.75996 28.2262 14.4017 28.1753 19.0434 28.1622C19.5902 28.1609 19.7703 27.9533 19.8703 27.491C20.9761 22.3522 22.0925 17.2148 23.2035 12.0773C23.5157 10.633 23.8291 9.18863 24.1159 7.74038C24.2159 7.23107 24.384 6.97119 25.0055 7.00254C26.7995 7.09134 28.6055 7.10962 30.3942 7.07306C33.3913 7.01168 36.3884 7.09395 39.3841 7.00645C40.0244 6.98817 40.0644 7.22324 39.9497 7.7234C39.5469 9.48116 39.1534 11.2415 38.7879 13.0058C38.7079 13.3911 38.4972 13.4211 38.1784 13.4198C36.8659 13.4093 35.5547 13.4146 34.2436 13.4146Z"
              fill="#0E1622"
            />
            <path
              d="M62.3406 10.0097C64.2636 10.0097 65.8767 10.0245 67.4911 10.0003C67.9276 9.99351 68.0555 10.1203 67.9793 10.5748C67.8308 11.4581 67.7068 12.3482 67.6112 13.2383C67.5634 13.686 67.3477 13.7683 66.9668 13.771C64.9236 13.7885 62.8804 13.8519 60.8373 13.8492C60.269 13.8479 60.105 14.0556 60.0701 14.6166C60.0042 15.6456 59.8712 16.6692 59.7408 17.6928C59.6762 18.1985 59.817 18.4265 60.3375 18.4575C62.1223 18.56 63.9072 18.5047 65.692 18.5236C65.9723 18.5262 66.2513 18.5303 66.5315 18.5236C66.7937 18.5168 66.9319 18.5964 66.8931 18.9147C66.7808 19.8263 66.6813 20.7407 66.5909 21.6551C66.5561 22.0124 66.3933 22.1338 66.0537 22.1702C64.3372 22.3563 62.6157 22.2485 60.898 22.2862C60.5325 22.2943 60.1683 22.3267 59.8028 22.3388C59.3249 22.355 59.0511 22.5897 58.9775 23.0981C58.767 24.5627 58.5797 26.0286 58.4635 27.5054C58.4209 28.0381 58.5552 28.2552 59.1247 28.2458C61.1459 28.2094 63.1697 28.2417 65.1909 28.2242C65.6339 28.2202 65.7992 28.3092 65.7153 28.8257C65.5693 29.732 65.5009 30.6504 65.324 31.554C65.2594 31.8844 65.1367 32.0003 64.8164 31.995C61.3552 31.937 57.8926 32.1042 54.4327 31.8736C54.0439 31.848 53.9639 31.6983 54.013 31.3341C54.4663 27.9154 54.9131 24.4953 55.36 21.0751C55.7319 18.2336 56.1 15.392 56.4746 12.5505C56.5469 11.9976 56.7006 11.4473 56.707 10.8944C56.7148 10.2457 57.0441 10.1257 57.5555 10.0893C59.2513 9.96923 60.9509 10.0367 62.3406 10.0097Z"
              fill="#0E1622"
            />
            <path
              d="M17.9299 7.02545C18.8153 6.96412 19.6431 7.10112 20.4721 7.0959C21.0012 7.09199 21.0576 7.27074 20.9615 7.74306C20.3747 10.6292 19.8173 13.5218 19.2446 16.4105C18.6629 19.3449 18.067 22.2753 17.4943 25.211C17.3982 25.7055 17.2291 25.9234 16.6704 25.9143C15.2648 25.8921 13.8579 25.9652 12.4511 25.9978C12.2589 26.0017 12.0667 26.0017 11.8745 25.9873C10.9263 25.9169 10.9058 25.9104 11.0929 24.9488C11.9578 20.527 12.8342 16.1091 13.7068 11.6886C13.9707 10.3486 14.2526 9.01258 14.4871 7.66738C14.5575 7.26161 14.719 7.11678 15.1098 7.11808C16.0669 7.1233 17.0202 6.93281 17.9299 7.02545Z"
              fill="#0E1622"
            />
            <path
              d="M75.8183 10.0153C77.6889 10.0153 79.5607 10.0382 81.43 10.0004C81.9851 9.98962 82.0565 10.1894 81.9685 10.6942C81.8179 11.5554 81.7044 12.4247 81.6036 13.294C81.5615 13.6584 81.4147 13.7772 81.0702 13.7813C79.9652 13.7921 78.8602 13.8501 77.7552 13.8609C77.3737 13.865 77.2053 13.9594 77.1491 14.4076C76.6056 18.7891 76.0352 23.1666 75.4699 27.5441C75.3092 28.7886 75.1229 30.0305 74.98 31.2777C74.9225 31.7812 74.6827 31.9985 74.2348 31.9999C73.4271 32.0012 72.6194 31.9931 71.8117 31.9864C71.2937 31.981 71.1278 31.7231 71.2005 31.1711C71.7211 27.2161 72.2251 23.257 72.7266 19.2994C72.9295 17.6998 73.1107 16.0976 73.3072 14.498C73.3697 13.9891 73.1209 13.7961 72.6858 13.7921C71.6446 13.7826 70.6021 13.7597 69.5609 13.7826C69.1245 13.7921 68.9395 13.6908 69.0173 13.186C69.136 12.4112 69.2483 11.6297 69.2827 10.8468C69.3095 10.2447 69.58 10.0963 70.0789 10.099C71.9916 10.1097 73.9043 10.103 75.817 10.103C75.8183 10.0747 75.8183 10.045 75.8183 10.0153Z"
              fill="#0E1622"
            />
            <path
              d="M45.2874 32C44.3162 32 43.3437 32 42.3725 32C42.0628 32 41.9216 31.9153 42.0438 31.5673C42.3494 30.6938 42.6306 29.8112 42.9036 28.9272C43.0041 28.6016 43.1915 28.4984 43.5406 28.4865C44.6693 28.4468 45.8008 28.4058 46.9241 28.2893C48.0202 28.1742 48.2484 27.9148 48.4752 26.8654C49.2562 23.246 49.6297 19.5644 50.188 15.9119C50.4501 14.1955 50.6919 12.4765 50.9187 10.7561C50.9894 10.2215 51.1592 9.95679 51.7935 10.0058C52.6696 10.0746 53.5565 10.0481 54.438 10.023C54.9148 10.0084 55.0533 10.1341 54.9827 10.6211C54.563 13.5378 54.1772 16.4585 53.7779 19.3778C53.3962 22.1674 53.0988 24.9703 52.4903 27.7242C52.1643 29.1998 51.568 30.5192 50.1119 31.3145C49.4233 31.6903 48.717 31.9418 47.9333 31.955C47.0517 31.9696 46.1702 31.9577 45.2887 31.9577C45.2874 31.9735 45.2874 31.9868 45.2874 32Z"
              fill="#0E1622"
            />
            <path
              d="M7.82662 12.0165C8.70812 12.0165 9.59214 12.0517 10.4711 12.003C10.9932 11.9732 11.0575 12.1653 10.9642 12.6522C10.3236 15.9972 9.70059 19.3449 9.07005 22.6925C8.90107 23.5934 8.71947 24.4915 8.55805 25.395C8.5013 25.7142 8.41933 25.9036 8.04731 25.9077C6.39151 25.9198 4.73571 25.9888 3.07864 25.9996C1.95502 26.0078 1.87305 25.886 2.10509 24.7431C2.9311 20.6623 3.76845 16.5829 4.58816 12.5007C4.66509 12.1152 4.8202 11.9976 5.18087 12.0097C6.06237 12.0354 6.94512 12.0165 7.82662 12.0165Z"
              fill="#0E1622"
            />
            <path
              d="M28.9082 0.00715009C29.8227 0.00715009 30.7372 0.0162298 31.6516 0.00196166C31.9708 -0.00322677 32.0449 0.0733026 31.9768 0.442978C31.7353 1.75176 31.5273 3.06962 31.3337 4.38748C31.2643 4.85703 31.0778 5.0075 30.632 4.99972C28.9429 4.96859 27.2526 4.97248 25.5635 4.99712C25.1044 5.00361 24.9204 4.91411 25.0315 4.35765C25.2885 3.07611 25.5216 1.78808 25.7069 0.492268C25.7703 0.0473604 25.9436 -0.00711809 26.2867 0.00066455C27.1593 0.0201212 28.0332 0.00715009 28.9082 0.00715009Z"
              fill="#0E1622"
            />
            <path
              d="M95.1269 25.542C94.7906 27.5098 93.8215 29.0619 92.2209 30.1943C90.619 31.3281 88.5644 31.8943 86.0543 31.8943C83.8262 31.8943 81.9145 31.488 80.3205 30.6753C80.2146 30.6207 80.1564 30.5021 80.1762 30.3835L80.8143 26.6451C80.8448 26.4666 81.0367 26.3653 81.1996 26.4426C82.4123 27.0168 83.4621 27.4272 84.3518 27.6736C85.3182 27.9428 86.2211 28.076 87.0618 28.076C88.0692 28.076 88.8755 27.8815 89.4805 27.4938C90.0855 27.1061 90.4522 26.5292 90.5833 25.7645C90.6561 25.3368 90.6032 24.9571 90.4218 24.624C90.2417 24.291 89.9478 23.9699 89.5414 23.6621C89.135 23.3544 88.2824 22.8614 86.985 22.1859C85.7683 21.5598 84.8773 20.9576 84.3147 20.382C83.7507 19.8051 83.3377 19.135 83.0729 18.3689C82.8081 17.6028 82.7631 16.7089 82.9378 15.6843C83.2675 13.7552 84.1757 12.239 85.6637 11.1359C87.1505 10.0328 89.041 9.4812 91.3326 9.4812C92.4592 9.4812 93.5104 9.61576 94.4874 9.88355C95.3771 10.1287 96.2906 10.4631 97.2266 10.8894C97.3735 10.956 97.4304 11.1386 97.3484 11.2798L95.528 14.4014C95.4578 14.5213 95.3096 14.5692 95.1825 14.5133C94.2054 14.0883 93.3807 13.7872 92.7081 13.6113C91.9853 13.4221 91.2571 13.3275 90.5264 13.3275C89.6566 13.3275 88.9549 13.5314 88.4214 13.939C87.8879 14.3467 87.5648 14.8783 87.4523 15.5351C87.3821 15.9428 87.4152 16.2985 87.5516 16.601C87.6866 16.9047 87.9368 17.1978 88.2983 17.4803C88.6597 17.7641 89.5427 18.273 90.9487 19.0084C92.8074 19.9823 94.0294 20.9602 94.6119 21.9395C95.1984 22.92 95.3691 24.1204 95.1269 25.542Z"
              fill="#0E1622"
            />
            <path
              d="M118.279 31.5973H113.479C113.337 31.5973 113.219 31.488 113.207 31.3455L112.25 20.1435C112.21 19.7359 112.169 18.8939 112.126 17.6162C112.115 17.3098 112.107 17.0273 112.1 16.7702C112.094 16.4664 111.673 16.3971 111.571 16.6836C111.468 16.9727 111.352 17.2884 111.225 17.6308C110.786 18.8193 110.457 19.6666 110.243 20.1729L105.444 31.4294C105.4 31.5306 105.302 31.5959 105.192 31.5959H100.408C100.266 31.5959 100.147 31.4867 100.136 31.3441L98.3783 10.0914C98.3651 9.93154 98.4909 9.79431 98.6497 9.79431H102.616C102.76 9.79431 102.88 9.90756 102.889 10.0514L103.612 21.6943C103.682 23.0972 103.716 24.3816 103.719 25.5447C103.719 25.8551 104.15 25.927 104.25 25.6326C104.34 25.3675 104.439 25.0797 104.546 24.7733C104.962 23.5849 105.319 22.6629 105.619 22.0074L110.79 9.95952C110.833 9.85826 110.931 9.79431 111.04 9.79431H114.952C115.094 9.79431 115.212 9.90356 115.223 10.0448L116.272 22.0074C116.317 22.5537 116.347 23.389 116.363 24.5135C116.369 24.8892 116.371 25.2476 116.371 25.5886C116.371 25.899 116.802 25.971 116.902 25.6779C117.028 25.3115 117.164 24.9211 117.313 24.5068C117.727 23.349 118.086 22.4111 118.385 21.6957L123.105 9.96618C123.147 9.86226 123.246 9.79431 123.357 9.79431H127.28C127.476 9.79431 127.608 9.99549 127.532 10.1767L118.529 31.4294C118.488 31.5306 118.389 31.5973 118.279 31.5973Z"
              fill="#0E1622"
            />
            <path
              d="M137.548 31.3575L136.926 26.6452C136.907 26.5093 136.792 26.4067 136.656 26.4067H129.169C129.063 26.4067 128.968 26.468 128.923 26.5639L126.614 31.4401C126.569 31.536 126.472 31.5973 126.368 31.5973H122.041C121.836 31.5973 121.704 31.3775 121.799 31.1949L132.897 9.85162C132.945 9.76102 133.038 9.70374 133.14 9.70374H138.362C138.495 9.70374 138.607 9.79833 138.631 9.92889L142.47 31.2722C142.501 31.4414 142.372 31.5959 142.202 31.5959H137.818C137.682 31.5973 137.565 31.4947 137.548 31.3575ZM136.146 22.5297C136.312 22.5297 136.439 22.3818 136.416 22.2166C135.794 17.7095 135.444 15.1541 135.369 14.5519C135.35 14.4067 135.335 14.2682 135.319 14.1376C135.287 13.8605 134.914 13.8005 134.8 14.055C134.094 15.6164 132.828 18.3103 131.001 22.1367C130.914 22.3192 131.046 22.531 131.248 22.531H136.146V22.5297Z"
              fill="#0E1622"
            />
            <path
              d="M161.857 16.5943C161.456 18.9405 160.422 20.7351 158.753 21.9781C157.083 23.2211 154.906 23.842 152.218 23.842H150.477C150.345 23.842 150.231 23.9379 150.208 24.0698L148.963 31.3681C148.94 31.5 148.826 31.5959 148.694 31.5959H144.653C144.484 31.5959 144.356 31.4427 144.385 31.2748L148.013 10.0221C148.036 9.89024 148.15 9.79431 148.282 9.79431H154.973C157.601 9.79431 159.502 10.3632 160.676 11.5023C161.848 12.6401 162.242 14.3374 161.857 16.5943ZM150.948 19.7332C150.919 19.9011 151.048 20.0543 151.217 20.0543H152.405C153.817 20.0543 154.923 19.7732 155.72 19.2123C156.517 18.6501 157.008 17.8334 157.191 16.7595C157.376 15.6764 157.218 14.8757 156.719 14.3587C156.22 13.8418 155.342 13.5833 154.087 13.5833H152.229C152.096 13.5833 151.982 13.6793 151.96 13.8112L150.948 19.7332Z"
              fill="#0E1622"
            />
          </svg>
        </div>
      </div>
    </DocumentFragment>
  `);
});
