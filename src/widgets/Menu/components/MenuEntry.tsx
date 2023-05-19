import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean; isActive: boolean }>`
  color: ${({ isPushed, isActive, theme }) =>
    !isPushed ? "transparent" : isActive ? theme.colors.sidebarActiveText : theme.colors.textSubtle};
  transition: color 0.4s;
  flex-grow: 1;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px 0 24px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  background-color: ${({ secondary, theme }) => (secondary ? theme.colors.background : "transparent")};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.sidebarActiveText : theme.colors.textSubtle)};
  box-shadow: ${({ isActive, theme }) => (isActive ? `inset 4px 0px 0px #ED952E` : "none")};
  background: ${({ isActive, theme }) => (isActive ? theme.colors.sidebarActiveBack : "transparent")};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.textSubtle} !important;
  }

  svg path {
    fill: ${({ isActive, theme }) => (isActive ? "#ED952E" : theme.colors.sidebarIcon)};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};

    svg path {
      fill: ${({ theme }) => theme.colors.text};
    }
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

// const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed);

export { MenuEntry, LinkLabel };
