import styled, { DefaultTheme } from "styled-components";
import { space, variant } from "styled-system";
import { Colors } from "../../theme/types";
import { scaleVariants, styleVariants } from "./theme";
import { TagProps, variants } from "./types";

interface ThemedProps extends TagProps {
  theme: DefaultTheme;
}

const getOutlineStyles = ({ outline, theme, variant: variantKey = variants.PRIMARY }: ThemedProps) => {
  if (outline) {
    const themecolorkey = styleVariants[variantKey].backgroundColor as keyof Colors;
    const color = theme.colors[themecolorkey];

    return `
      color: ${color};
      background: transparent;
      border: 1px solid #ED952E;
    `;
  }

  return "";
};

export const StyledTag = styled.div<ThemedProps>`
  align-items: center;
  border-radius: 16px;
  color: #ffffff;
  display: inline-flex;
  font-weight: 400;
  white-space: nowrap;

  & > svg {
    fill: currentColor;
  }

  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  ${space}

  ${getOutlineStyles}
`;

export default null;
