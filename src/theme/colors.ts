import { Colors } from "./types";

export const baseColors = {
  failure: "#79716B",
  primary: "#1C1917",
  primaryBright: "#FFE583",
  primaryDark: "#A15C07",
  secondary: "#3960C1",
  success: "#EAAA08",
  warning: "#FFB237",
  linear: "linear-gradient(265.22deg, #25A1E7 0%, #D02E86 100%);",
  copyright: "#A9A29D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F5F5F4",
  backgroundDisabled: "#E7E5E4",
  contrast: "#FFFFFF",
  invertedContrast: "#FFFFFF",
  input: "rgba(241, 241, 241, 0.4)",
  inputSecondary: "#EAAA08",
  tertiary: "#E5E8EC",
  text: "#1C1917",
  title: "#EAAA08",
  bow: "#CA8504",
  textDisabled: "#79716B",
  textSubtle: "#57534E",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  extra: "#EAAA08",
  button: "#ED952E",
  farming: "#F4F4F5",
  sidebar: "#FFFFFF",
  sidebarIcon: "rgba(15, 12, 9, 0.7)",
  sidebarActiveText: "#1B1B1B",
  sidebarActiveBack: "#FDF2E6",
  tag: "linear-gradient(265.22deg, rgba(237, 149, 46, 0.12) 0%, rgba(247, 206, 71, 0.12) 100%);",
  red: "#E2151C",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
  tradeprimarybg: "#ED952E",
  tradeprimarytext: "#1C1917",
  tradesecondarybg: "#000000",
  tradesecondarytext: "#000000",
};
export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#FAC515",
  background: "#0B0B0C",
  backgroundDisabled: "#292524",
  contrast: "#FFFFFF",
  invertedContrast: "#2F3F63",
  input: "#141416",
  inputSecondary: "#FAC515",
  primary: "#A9A29D",
  primaryDark: "#FEFBE8",
  tertiary: "#141416",
  text: "#FEFBE8",
  title: "#FAC515",
  bow: "#FEFBE8",
  textDisabled: "#79716B",
  textSubtle: "#A9A29D",
  borderColor: "#232633",
  card: "#141416",
  extra: "#FAC515",
  button: "linear-gradient(86.46deg, #6C3A00 0%, #F78E15 101.73%)",
  farming: "#FAC515",
  sidebar: "#141416",
  sidebarIcon: "#BA6401",
  sidebarActiveText: "#BA6401",
  sidebarActiveBack: "linear-gradient(86.46deg, rgba(0, 0, 0, 0) 30.73%, #DA7500 101.73%)",
  tag: "linear-gradient(265.22deg, rgba(237, 149, 46, 0.12) 0%, rgba(247, 206, 71, 0.12) 100%)",
  red: "#E2151C",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
  tradeprimarybg: "#000000",
  tradeprimarytext: "#ED952E",
  tradesecondarybg: "#000000",
  tradesecondarytext: "#000000",
  copyright: "#ED952E",

};
