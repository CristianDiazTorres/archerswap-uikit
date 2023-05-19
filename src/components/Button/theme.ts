import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "42px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    background: "button",
    color: "black",
    ":disabled": {
      background: "transparent",
      backgroundColor: "backgroundDisabled",
    },
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    color: "primary",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "background",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "text",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "text",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "text",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
  [variants.SWITCH]: {
    backgroundColor: "success",
    color: "#ffffff",
    boxShadow: "none",
  },
  [variants.TRADEPRIMARY]: {
    // background: "button",
    backgroundColor: "tradeprimarybg",
    color: "tradeprimarytext",
    boxShadow: "none",
  },
  [variants.TRADESECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "tradesecondarybg",
    boxShadow: "none",
    color: "tradesecondarytext",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
};
