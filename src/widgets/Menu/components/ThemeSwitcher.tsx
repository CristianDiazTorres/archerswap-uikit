import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";

const TabContainer = styled.div<{ isDark: boolean }>`
  display: flex;
  justify-content: center;
  background: ${(props) => (!props.isDark ? "#FFFFFF" : "#0F0E0C")};
  border: 1px solid ${(props) => (!props.isDark ? "#29292D" : "#29292D")};
  border-radius: 100px;
  cursor: pointer;
`;
const TabItem = styled.div<{ active: boolean; ml: number; bg: string }>`
  background: ${(props) => (props.active ? props.bg : "transparent")};
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  border-radius: 100px;
  padding: 6px;
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.ml}px;
`;

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon } = Icons;

interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const ThemeSwitcher: React.FC<Props> = ({ isDark, toggleTheme }) => {
  return (
    <TabContainer
      isDark={isDark}
      onClick={() => {
        toggleTheme(!isDark);
      }}
    >
      <TabItem active={!isDark} ml={1} bg="#1A1C26">
        <MoonIcon width={16} />
      </TabItem>
      <TabItem active={isDark} ml={0} bg="#1A1C26">
        <MoonIcon width={16} />
      </TabItem>
    </TabContainer>
  );
};

export default React.memo(ThemeSwitcher, (prev, next) => prev.isDark === next.isDark);
